// StudentDetails.js

import CompletionStatus from "./CompletionStatus";
import React from "react";
import { studentdata } from "./StudentData";
import { useParams } from "react-router-dom";

function StudCourseDetails() {
  const { id } = useParams();
  const student = studentdata.find((s) => s.id === parseInt(id));

  if (!student) {
    return <div>Student not found</div>;
  }

  return (
    <div>
      <h2>{student.name}'s Details</h2>
      <p>Roll No: {student.rollNo}</p>
      <p>Course Name: {student.courseName}</p>
      <p>Start Date: {student.startDate}</p>
      <p>Completion Date: {student.completionDate || "Not Completed"}</p>
      {student.completionDate && (
        <CompletionStatus completedTopics={student.completedTopics} />
      )}
    </div>
  );
}

export default StudCourseDetails;
