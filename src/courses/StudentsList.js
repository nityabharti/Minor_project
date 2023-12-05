import { Link } from "react-router-dom";
import React from "react";
import { studentdata } from "./StudentData";

function StudentsList() {
  return (
    <div>
      <h3>Student Courses and their Status</h3>

      <table>
        <thead>
          <tr>
            <th>Roll Number</th>
            <th>Name</th>
            <th>Course Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {studentdata.map((student) => (
            <tr key={student.id}>
              <td>{student.rollNo}</td>
              <td>{student.name}</td>
              <td>{student.courseName}</td>
              <td>
                {student.completionDate ? (
                  <Link to={`/dashboard/course/details/${student.id}`}>
                    Completed
                  </Link>
                ) : (
                  <button onClick={() => alert("Not Completed")}>
                    Not Completed
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentsList;
