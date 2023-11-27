import "./reviews.css";

import React from "react";

const Reviews = ({ reviewText, userName, profilePic }) => {
  return (
    <div className="review-card">
      <div className="review-content">
        <p></p>
      </div>
      <div className="user-info">
        <div className="profile-pic">
          <img src={profilePic} alt="Profile" />
        </div>
        <div className="user-name">{userName}</div>
      </div>
    </div>
  );
};

export default Reviews;
