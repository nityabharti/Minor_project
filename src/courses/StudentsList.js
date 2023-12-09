import "./studentList.css";

import { Link } from "react-router-dom";
import React from "react";
import { studentdata } from "./StudentData";

function StudentsList() {
  return (
    <div>
      <h3>Student Courses and their Status</h3>

      <table>
        <thead>
          <tr className="table-items">
            <th>Roll Number</th>
            <th>Name</th>
            <th>Course Name</th>

            <th>Course Duration (days)</th>
            <th>Completed (days)</th>
            <th>Remaining (days)</th>
            <th>Topics Remaining</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {studentdata.map((student) => (
            <tr key={student.id}>
              <td>{student.rollNo}</td>
              <td>{student.name}</td>
              <td>{student.courseName}</td>
              <td>{student.courseDuration}</td>
              <td>{student.completed}</td>
              <td>{student.remaining}</td>
              <td>{student.remainingTopics}</td>
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
