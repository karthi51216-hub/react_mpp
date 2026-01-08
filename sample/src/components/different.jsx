import React from "react";

function Greeting() {
  const currentHour = new Date().getHours();

  // Multiple return conditions based on time
  if (currentHour < 12) {
    return <h2> Good Morning, Karthi!</h2>;
  } else if (currentHour < 18) {
    return <h2>  Good Afternoon, Karthi!</h2>;
  } else {
    return <h2> Good Evening, Karthi!</h2>;
  }
}

export default Greeting;