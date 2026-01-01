
import React from "react";          
import "./hobbies.css"; 

function HobbiesList({ hobbies = [] }) {
  if (!Array.isArray(hobbies) || hobbies.length === 0) {
    return <p className="empty">No hobbies to show.</p>;
  }

  return (
    <section className="hobbies">
      <h2 className="hobbies__title">Hobbies</h2>
      <ul className="hobbies__list">
        {hobbies.map((item, idx) => (
          <li key={idx} className="hobbies__item">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default HobbiesList;  