import styled from "styled-components";
import CourseInfo from './components/CourseInfo';
import CoursePlan from './components/CoursePlan';
import './App.css';
import React, { useCallback, useState } from 'react';
import { course } from './axios'

function App() {
  const [coursesList, setCoursesList] = useState({});
  // course().then(res => setCoursesList(res))

  const [selectedCourses, setSelectedCourses] = useState([]);
  const [resultCourses, setResultCourses] = useState('');

  fetch('/course')
      .then(res => {
        return res.json();
        // console.log(res.json())
        // console.log(res.json().coursesList)
        // setCoursesList(res.json().coursesList)
      })
      .then(res => {
        setCoursesList(res.coursesList)
      });

  return (
    <div className="App">
      <CourseContainer>
        <ListContainer>
          <Title>Course Infomation</Title>
          <CourseInfo coursesList={coursesList} selectedCourses={selectedCourses} setSelectedCourses={setSelectedCourses} />
        </ListContainer>
        <ListContainer>
          <Title>Courses I Plan to Take</Title>
          <CoursePlan selectedCourses={selectedCourses} setSelectedCourses={setSelectedCourses} setResultCourses={setResultCourses} />
        </ListContainer>
      </CourseContainer>
      <Title>Result</Title>
      <h3>{resultCourses}</h3>
    </div>
  );
}

export default App;

const CourseContainer = styled.div`
  display: flex;
  gap: 10vw;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100vw;
`

const ListContainer = styled.div`
  align-items: center;
  height: 80vh;
  width: 30vw;
`

const Title = styled.h2`
  color: #00bcd4;
`