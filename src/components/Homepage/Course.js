import * as React from "react";
import "./course.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const carddata = [
  {
    imgUrl: "https://example.com/dca.jpg",
    title: "Diploma in Computer Applications (DCA)",
    description:
      "This diploma covers various aspects of computer applications including office automation tools, programming basics, database management, and more.",
  },
  {
    imgUrl: "https://example.com/ctp.jpg",
    title: "Certified Training Professional (CTP)",
    description:
      "CTP program provides comprehensive training in various computer technologies, focusing on advanced programming languages, and system analysis.",
  },
  {
    imgUrl: "https://example.com/ccna.jpg",
    title: "Cisco Certified Network Associate (CCNA)",
    description:
      "CCNA course offers knowledge about networking fundamentals,routing technologies, and more, essential for networking professionals.",
  },
  {
    imgUrl: "https://example.com/webdev.jpg",
    title: "Web Development Bootcamp",
    description:
      "This bootcamp covers HTML, CSS, JavaScript, and modern web development frameworks, providing hands-on experience in building web applications.",
  },
  {
    imgUrl: "https://example.com/python.jpg",
    title: "Python Programming",
    description:
      "Python programming course covers the fundamentals of Python, data analysis, web scraping, and application development using Python.",
  },
];

const CourseCard = ({ imgUrl, title, description }) => {
  return (
    <Card sx={{ maxWidth: 300, maxHeight: 380 }}>
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
