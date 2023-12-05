import "./aboutus.css";

import React from "react";

const Aboutus = () => {
  return (
    <div className="main_about" id="about">
      <div className="about_card">
        <div className="title_aboutus">
          <img
            height={40}
            src="https://cdn-icons-png.flaticon.com/128/12958/12958731.png"
            alt="info"
          />
          <h1 style={{ color: " #2d4dc4 " }}>
            {" "}
            Welcome to Our Computer Classes
          </h1>
        </div>
        <p>
          Our Computer Classes is a distinguished educational hub with a
          decade-long legacy in the realm of Computer Courses. Bringing forth a
          diverse array of career-oriented, professional, short-term, and
          certification programs, our curriculum is meticulously crafted by
          seasoned academicians following extensive market analysis and
          research. The instructional team comprises experienced and certified
          faculty members dedicated to imparting knowledge. To stay abreast of
          the ever-evolving tech landscape, our trainers consistently enhance
          their technical prowess. Engaging students through a spectrum of
          events like Techno Minds, placement workshops, and seminars, we foster
          interactive learning, gearing individuals towards successful job
          interviews and industry readiness. In summary, This Coaching Classes
          shapes adept IT professionals via a multitude of courses delivered
          through cutting-edge teaching methodologies.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
