import React from "react";

function NumberFilter() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Filter only even numbers
  const evenNumbers = numbers.filter((num) => num % 2 === 0);

  return (
    <div>
      <h2> Even Numbers</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {evenNumbers.map((num) => (
          <li
            key={num}
            style={{
              color: "blue",
              fontWeight: "bold",
              marginBottom: "8px",
            }}
          >
            {num}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NumberFilter;