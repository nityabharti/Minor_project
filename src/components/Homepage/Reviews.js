import "./reviews.css";

import React from "react";
import img1 from "../../assets/review_1.jpg";
import img2 from "../../assets/review_2.jpg";
import img3 from "../../assets/review_3.jpg";
import img4 from "../../assets/review_4.jpg";
import img5 from "../../assets/review_5.jpg";
import img6 from "../../assets/review_6.jpg";

// import ReviewSlider from "./ReviewSlider";

const reviewsData = [
  {
    reviewText: "The way of teaching is very good and understandable.",
    userName: "Neetu Singh",
    profilePic: img1,
  },
  {
    reviewText:
      "Great experience! I learned a lot.Teachers are very helpful and friendly to the student.",
    userName: "John Doe",
    profilePic: img2,
  },
  {
    reviewText: "Highly recommended. Excellent teaching methodology.",
    userName: "Alice Johnson",
    profilePic: img3,
  },
  {
    reviewText: "Highly recommended. Excellent teaching methodology.",
    userName: "Alice Johnson",
    profilePic: img4,
  },
  {
    reviewText: "Highly recommended. Excellent teaching methodology.",
    userName: "Alice Johnson",
    profilePic: img5,
  },
  {
    reviewText: "Highly recommended. Excellent teaching methodology.",
    userName: "Alice Johnson",
    profilePic: img6,
  },
];

const Reviews = () => {
  return (
    <div>
      {reviewsData.map((review, index) => (
        <Review key={index} {...review} />
      ))}
    </div>
  );
};

const Review = ({ reviewText, userName, profilePic }) => {
  return (
    <div className="review-card">
      <div className="review-content">
        <p>
          <span>"</span>
          {reviewText}
          <span>"</span>
        </p>
      </div>
      <div className="user-info">
        <div className="profile-pic">
          <img src={profilePic} alt="Profile" />
        </div>
        <div className="user-name">{userName}</div>
      </div>
      {/* <div>
        <ReviewSlider reviewsData={reviewsData} />
      </div> */}
    </div>
  );
};

export default Reviews;
