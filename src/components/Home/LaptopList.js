import React from "react";

import Laptop from "./Laptop";
import classes from "./LaptopsList.module.css";

const LaptopList = (props) => {
  return (
    <ul>
      {props.laptops.map((laptop) => (
        <Laptop
          key={laptop.id}
          title={laptop.title}
          price={laptop.price}
          description={laptop.description}
        />
      ))}
    </ul>
  );
};

export default LaptopList;
