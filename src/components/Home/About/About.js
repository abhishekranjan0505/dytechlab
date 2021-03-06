import React from "react";
import classes from "./About.module.css";
import AboutCards from "./AboutCards/AboutCards";

const about = () => {
  return (
    <div className={classes.About}>
      <AboutCards />
      <a href="/" className={classes.Button}>
        Learn More About Drw
      </a>
    </div>
  );
};

export default about;
