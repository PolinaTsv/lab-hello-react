import React from "react";
import Button from "@mui/material/Button";
import logo from "../images/logo.png";
import menu from "../images/menu.png";

function BigHeader() {
  return (
    <header className="App-header">
      <div className="Header-up">
        <img src={logo} className="App-logo" alt="logo" />
          <img src={menu} className="App-menu" alt="menu" />
      </div>
      <a className="Header-down" href="https://google.com">
        <h1>Say hello to ReactJS!</h1>
        <p> You will learn how to use the most popular frontend library</p>
        <Button className="ButtonOne" color="primary" variant="contained">
          AWESOME!
        </Button>
      </a>
    </header>
  );
}

export default BigHeader;
