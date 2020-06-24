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
      /**
       * take everyone who has a tome gear the glaze/twine list on dropObj and randomise
       * from there
       * if dont have, randomise from all
       *
       * floor 1 book always use on ring
       * if have ring already, use on neck, brace or ears
       *
       * books always use on twine and glaze
       * */

      const bisEqLists = action.payload.bisEqLists;
      Object.keys(bisEqLists).map((memberId) => {
        Object.keys(bisEqLists[memberId])
          .filter(
            (eq) =>
              bisEqLists[memberId][eq].type === "Raid" &&
              action.payload.currentEqLists[memberId][eq].type !== "Raid"
          )
          .map((eq) => {
            if (eq === "ring1" || eq === "ring2") {
              eq = "ring";
            }
            if (dropObj[eq][memberId] === undefined) {
              dropObj[eq][memberId] = 1;
            } else {
              dropObj[eq][memberId] += 1;
            }
            return null;
          });
        return null;
      });

      dropObj["twine"] = Object.assign({}, action.payload.twineLists);
      dropObj["glaze"] = Object.assign({}, action.payload.glazeLists);

      let memberOrder = shuffle(["0", "1", "2", "3", "4", "5", "6", "7"]);
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
      // console.log(dropObj);
      // console.log(memberOrder);
      // console.log(twineOrder);
      // console.log(glazeOrder);

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
        drops.map((drop) => {
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
          return null;
        });
        if (weekNo % 4 === 0) {
          // pages
          loot["books"] = {
            1: {},
            2: {},
            3: {},
          };
          for (let mem = 0; mem < 8; mem++) {
            if (dropObj["ring"][mem] > 0) {
              dropObj["ring"][mem] -= 1;
              loot["books"][1][mem] = "ring";
            } else {
              for (let i = 1; i < 4; i++) {
                if (dropObj[drops[i][1]][mem] > 0) {
                  dropObj[drops[i][1]][mem] -= 1;
                  loot["books"][1][mem] = drops[i][1];
                  break;
                }
              }
            }
            if (dropObj["glaze"][mem] > 0) {
              dropObj["glaze"][mem] -= 1;
              loot["books"][2][mem] = "glaze";
            }
            if (dropObj["twine"][mem] > 0) {
              dropObj["twine"][mem] -= 1;
              loot["books"][3][mem] = "twine";
            }
          }
        }
        if (weekNo % 6 === 0) {
          // belt and legs?
        }
        if (weekNo % 8 === 0) {
          // 4th floor books?
        }
        if (!dropObjIsEmpty) {
          weeklyLoot[weekNo] = loot;
        }
        weekNo++;
      }
      state.weeklyLoot = Object.assign({}, weeklyLoot);
      console.log(weeklyLoot);
    },
  },
});

export const { calculateLoot } = lootTableSlice.actions;

export const selectWeeklyLoot = (state) => state.lootTable.weeklyLoot;

export default lootTableSlice.reducer;
