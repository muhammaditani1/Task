import React from "react";

function Input(props) {
  return (
    <div className={props.className}>
      <label htmlFor={props.type}>{props.title}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      ></input>
    </div>
  );
}
export default Input;
