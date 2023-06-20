import React from "react";
import Login from "./Login";

const WelcomePage = () => {
  const style = {
    "background-image": `url("images/background.jpg")`,
    "background-repeat": "no-repeat",
    "background-size": "cover",
    position: "absolute",
    height: "100%",
    width: "100%",
  };
  return (
    <div>
      <div style={style}>
        <Login />
      </div>
    </div>
  );
};

export default WelcomePage;
