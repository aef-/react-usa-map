import React from "react";

const USAState = (props) => {
  return (
    <path d={props.dimensions} fill={props.fill} data-name={props.state} className={`${props.state} state`} onClick={props.onClickState} data-tip data-for={props.state}/>
  );
}
export default USAState;
