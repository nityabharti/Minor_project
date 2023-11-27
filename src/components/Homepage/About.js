import React from "react";
import "./aboutus.css";

const Aboutus = () => {
  return (
    <div className="main_about">
      <div className="about_card">
        <div className="title_aboutus">
          <img
            height={40}
            src="https://cdn-icons-png.flaticon.com/128/189/189664.png"
            alt="info"
          />
          <h1>Title</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          deleniti nisi cupiditate quae hic molestiae, omnis commodi quasi!
          Voluptatum ipsam excepturi eveniet cumque illum dolor modi voluptas
          molestiae at quod! Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Id amet placeat laboriosam eos eaque optio voluptatibus sit,
          reiciendis neque quas, rerum aspernatur aliquid earum. Nostrum
          repellendus omnis praesentium itaque recusandae?
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
