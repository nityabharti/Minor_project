// TeacherCard.js

import "./Teachers.css";

import React from "react";

const TeacherCard = ({ teacher }) => {
  const { name, subject, experience, profilePic } = teacher;

  return (
    <div className="teacher-card">
      <img className="profile-pic" src={profilePic} alt={`${name}'s profile`} />
      <div className="teacher-details">
        <h3>{name}</h3>
        <p>Subject: {subject}</p>
        <p>Experience: {experience}</p>
      </div>
    </div>
  );
};

export default TeacherCard;
