import "./reviews.css";

import React from "react";
import img1 from "../../assets/review_1.jpg";

const Reviews = ({ reviewText, userName, profilePic }) => {
  return (
    <div className="review-card">
      <div className="review-content">
        <p>
          <span>"</span>The way of teaching is very good and understandable
          <span>"</span>
        </p>
      </div>
      <div className="user-info">
        <div className="profile-pic">
          <img src={img1} alt="Profile" />
        </div>
        <div className="user-name">Neetu Singh</div>
      </div>
    </div>
  );
};

export default Reviews;
