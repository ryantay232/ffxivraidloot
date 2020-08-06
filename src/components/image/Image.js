import React from "react";

function Image(props) {
  return <img width={25} height={25} src={props.src} alt={props.alt} />;
}

export default Image;
