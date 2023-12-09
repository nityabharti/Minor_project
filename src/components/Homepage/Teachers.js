// Teachers.js

import React from "react";
import styled from "styled-components";

const teachersData = [
  {
    id: 1,
    name: "John Doe",
    designation: "Python Programming specialist",
    experience: "5 years",
    description:
      "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Sed sem urna, molestie id viverra ut, tincidunt vitae odio.Integer diam urna, tempor eu dapibus at, consequat at sem.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdSFeV5vHnO9mSV6CK6KkqYNx2GCcahcWMw&usqp=CAU", // Replace with the actual image path
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Web Development Teacher",
    experience: "8 years",
    description:
      "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Sed sem urna, molestie id viverra ut, tincidunt vitae odio.Integer diam urna, tempor eu dapibus at, consequat at sem. .",
    image:
      "https://backup.pondiuni.edu.in/Establishment/img/employeePhotos/Teaching/Profile/911.jpeg",
  },
  {
    id: 3,
    name: "Robert Johnson",
    designation: "CCNA Teacher",
    experience: "6 years",
    description:
      "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Sed sem urna, molestie id viverra ut, tincidunt vitae odio. Integer diam urna, tempor eu dapibus at, consequat at sem.",
    image:
      "https://www.shutterstock.com/image-photo/profile-picture-successful-man-worker-260nw-1916665292.jpg", // Replace with the actual image path
  },
];

const Teachers = () => {
  return (
    <Container id="teachers">
      {teachersData.map((teacher) => (
        <TeacherCard key={teacher.id}>
          <TeacherImage src={teacher.image} alt={teacher.name} />
          <TeacherInfo>
            <h2>{teacher.name}</h2>
            <p>{teacher.designation}</p>
            <p>Experience: {teacher.experience}</p>
            <p>{teacher.description}</p>
          </TeacherInfo>
        </TeacherCard>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 20px;
`;

const TeacherCard = styled.div`
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 15px;
  overflow: hidden;
  max-width: 300px;
`;

const TeacherImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const TeacherInfo = styled.div`
  padding: 15px;

  h2 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    margin: 5px 0;
  }
`;

export default Teachers;
