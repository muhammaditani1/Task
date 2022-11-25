import React from "react";

import classes from "./Laptop.module.css";

const Laptop = (props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.price}</h3>
      <p>{props.description}</p>
    </li>
  );
};

export default Laptop;
