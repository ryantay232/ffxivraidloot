import { createSlice } from "@reduxjs/toolkit";

function shuffle(arr) {
  arr = [...arr];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

export const lootTableSlice = createSlice({
  name: "lootTable",
  initialState: {
    weeklyLoot: {}, // {weekNo: {floor: {loot: {memberId: int, set: bool}}}}
    books: {}, // {weekNo: {book: {memberId: {loot: string, set: bool}}}}
    hasSet: false,
    countSet: {}, // {weekNo: {floor: count}}
  },
  reducers: {
    calculateLoot: (state, action) => {
      const dropObj = {
        mainArm: {},
        head: {},
        body: {},
        hands: {},
        waist: {},
        legs: {},
        feet: {},
        earrings: {},
        necklace: {},
        bracelets: {},
        ring: {},
        glaze: {},
        twine: {},
      };
      /* *
       * take everyone who has a tome gear the glaze/twine list on dropObj and randomise
       * from there
       * if dont have, randomise from all
       *
       * books always use on twine and glaze */

      const bisEqObj = action.payload.bisEq;
      const rightSideAccList = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
      };
      Object.keys(bisEqObj).forEach((memberId) => {
        Object.keys(bisEqObj[memberId])
          .filter(
            (eq) =>
              bisEqObj[memberId][eq].type === "Raid" &&
              action.payload.currentEq[memberId][eq].type !== "Raid"
          )
          .forEach((eq) => {
            eq = eq === "ring1" || eq === "ring2" ? "ring" : eq;
            if (
              eq === "earrings" ||
              eq === "necklace" ||
              eq === "bracelets" ||
              eq === "ring"
            ) {
              rightSideAccList[memberId] += 1;
            }
            if (dropObj[eq][memberId] === undefined) {
              dropObj[eq][memberId] = 1;
            } else {
              dropObj[eq][memberId] += 1;
            }
          });
      });

      // from here should check if theres set in current loot table
      dropObj["twine"] = Object.assign({}, action.payload.twines);
      dropObj["glaze"] = Object.assign({}, action.payload.glazes);

      //let memberOrder = shuffle(["0", "1", "2", "3", "4", "5", "6", "7"]);

      let memberOrder = shuffle(
        Object.keys(rightSideAccList).map((key) => [key, rightSideAccList[key]])
      )
        .sort((a, b) => (a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0))
        .map((mem) => mem[0]);
      let twineOrder = shuffle(
        Object.keys(dropObj["twine"]).map((key) => [key, dropObj["twine"][key]])
      )
        .sort((a, b) => (a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0))
        .map((mem) => mem[0]);
      let glazeOrder = shuffle(
        Object.keys(dropObj["glaze"]).map((key) => [key, dropObj["glaze"][key]])
      )
        .sort((a, b) => (a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0))
        .map((mem) => mem[0]);
      const order = {
        member: memberOrder,
        twine: twineOrder,
        glaze: glazeOrder,
      };

      // debugging stuff
      //console.log(dropObj);
      //console.log(memberOrder);
      //console.log(twineOrder);
      //console.log(glazeOrder);
      //console.log(rightSideAccList);

      const drops = [
        [1, "waist"],
        [1, "earrings"],
        [1, "necklace"],
        [1, "bracelets"],
        [1, "ring"],
        [2, "head"],
        [2, "hands"],
        [2, "feet"],
        [2, "glaze"],
        [3, "head"],
        [3, "hands"],
        [3, "feet"],
        [3, "legs"],
        [3, "twine"],
        [4, "mainArm"],
        [4, "body"],
      ];
      const weeklyLoot = {};
      const books = {};
      let dropObjIsEmpty = false; // check if dropObj arrays are empty
      let weekNo = 1;

      // loot distribution
      while (!dropObjIsEmpty) {
        dropObjIsEmpty = true;
        // loot = {floor: {drop: memberId}, books: {1: {}, 2: {}, 3: {}, 4: {}}
        const loot = {
          1: {},
          2: {},
          3: {},
          4: {},
        };
        // eslint-disable-next-line no-loop-func
        drops.forEach((drop) => {
          const o =
            drop[1] === "twine"
              ? "twine"
              : drop[1] === "glaze"
              ? "glaze"
              : "member";
          const mem = order[o].filter(
            (memberId) => dropObj[drop[1]][memberId] > 0
          );
          if (mem.length > 0) {
            loot[drop[0]][drop[1]] = {
              memberId: mem[0],
            };
            order[o] = [
              ...order[o].filter((memberId) => memberId !== mem[0]),
              mem[0],
            ];
            dropObj[drop[1]][mem[0]] -= 1;
            dropObjIsEmpty = false;
          } else {
            loot[drop[0]][drop[1]] = {
              memberId: "-1",
            };
          }
        });
        if (weekNo % 4 === 0) {
          // pages
          const b = {
            1: {},
            2: {},
            3: {},
          };
          for (let mem = 0; mem < 8; mem++) {
            for (let i = 1; i < 5; i++) {
              if (dropObj[drops[i][1]][mem] > 0) {
                dropObj[drops[i][1]][mem] -= 1;
                b[1][mem] = drops[i][1];
                break;
              }
            }
            if (dropObj["glaze"][mem] > 0) {
              dropObj["glaze"][mem] -= 1;
              b[2][mem] = "glaze";
            }
            if (dropObj["twine"][mem] > 0) {
              dropObj["twine"][mem] -= 1;
              b[3][mem] = "twine";
            }
          }
          books[weekNo] = b;
        }
        /*
        if (weekNo % 6 === 0) {
          // belt and legs?
        }
        if (weekNo % 8 === 0) {
          // 4th floor books?
        }*/
        if (!dropObjIsEmpty) {
          weeklyLoot[weekNo] = loot;
        }
        weekNo++;
      }
      state.weeklyLoot = weeklyLoot;
      state.books = books;
      console.log(weeklyLoot);
      console.log(books);
    },
    setLoot: (state, action) => {
      const weekNo = action.payload.weekNo;
      const floor = action.payload.floor;
      const loot = action.payload.loot;
      const obj = state.weeklyLoot[weekNo][floor][loot];
      if (obj.set === true) {
        state.countSet[weekNo][floor] = 0;
        console.log(state.countSet[weekNo][floor]);
      } else {

      }
      /*
      switch (action.payload.floor) {
        case "1":
          if (count < 4) {
            obj[action.payload.loot].set = !obj[action.payload.loot].set;
          } else {
            obj[action.payload.loot].set = false;
          }
          break;
        case "2":
          if (count < 4) {
            if ()
          } else {

          }
          break;
        case "3":
          break;
        default:
      }*/
      obj.set = !obj.set;
    },
  },
});

export const { calculateLoot, setLoot } = lootTableSlice.actions;

export const selectWeeklyLoot = (state) => state.lootTable.weeklyLoot;

export const selectBooks = (state) => state.lootTable.books;

export default lootTableSlice.reducer;
