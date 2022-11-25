import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import LaptopList from "./LaptopList";
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <LaptopList laptops={props.laptops} />
    </Card>
  );
};

export default Home;
