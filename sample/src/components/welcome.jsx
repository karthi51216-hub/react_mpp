import React from "react";

function WelcomeMessage() {
  const style = {
    color: "blue",
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "20px"
  };

  return (
    <div style={style}>
      Welcome to React Learning!
    </div>
  );
}

export default WelcomeMessage;