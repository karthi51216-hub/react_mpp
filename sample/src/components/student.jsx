import React from "react";
import "./student.css";

const StudentList = () => {
  const students = [
    { name: "Arun", marks: 45 },
    { name: "Bala", marks: 67 },
    { name: "Chitra", marks: 80 },
    { name: "Deepak", marks: 30 },
    { name: "Esha", marks: 55 }
  ];

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            <span
              style={{
                fontWeight: student.marks > 50 ? "bold" : "normal",
                color: student.marks > 50 ? "green" : "black"
              }}
            >
              {student.name}
            </span>{" "}
            - {student.marks}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;