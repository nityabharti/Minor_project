import "./course.css";

import * as React from "react";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import img1 from "../../assets/course_1.jpg";
import img2 from "../../assets/course_2.jpg";
import img3 from "../../assets/course_3.jpg";
import img4 from "../../assets//course_4.jpg";
import img5 from "../../assets/course_5.jpg";
import img6 from "../../assets/course_6.jpg";

const carddata = [
  {
    imgUrl: img1,
    title: "Diploma in Computer Applications (DCA)",
    description:
      "This diploma covers various aspects of computer applications including office automation tools, programming basics, database management, and more.",
  },
  {
    imgUrl: img2,
    title: "Certified Training Professional (CTP)",
    description:
      "CTP program provides comprehensive training in various computer technologies, focusing on advanced programming languages, and system analysis.",
  },
  {
    imgUrl: img3,
    title: "Cisco Certified Network Associate (CCNA)",
    description:
      "CCNA course offers knowledge about networking fundamentals,routing technologies, and more, essential for networking professionals.",
  },
  {
    imgUrl: img4,
    title: "Web Development Bootcamp",
    description:
      "This bootcamp covers HTML, CSS, JavaScript, and modern web development frameworks, providing hands-on experience in building web applications.",
  },
  {
    imgUrl: img5,
    title: "Python Programming",
    description:
      "Python programming course covers the fundamentals of Python, data analysis, web scraping, and application development using Python.",
  },
  {
    imgUrl: img6,
    title: "Typing",
    description:
      "Typing course designed to enhance your skills , improve your typing speed and empower your digital journey.",
  },
];

const CourseCard = ({ imgUrl, title, description }) => {
  return (
    <Card sx={{ maxWidth: 350, maxHeight: 370 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={imgUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined">
          Share
        </Button>
        <Button size="small" variant="outlined">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

const Course = () => {
  return (
    <div className="course_main">
      {carddata.map((data, key) => {
        return (
          <CourseCard
            key={key}
            imgUrl={data.imgUrl}
            title={data.title}
            description={data.description}
          />
        );
      })}
    </div>
  );
};

export default Course;
