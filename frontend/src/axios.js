import axios from 'axios'

// const instance = axios.create({baseURL: `https://course-planning-practice.herokuapp.com/api/course`})
// const instance = axios.create({baseURL: `${process.env.HOST}:${process.env.PORT}/api/course`})
const baseUrl = process.env.baseURL || "http://localhost:4000"
const instance = axios.create({baseURL: `${baseUrl}/api/course`})

const course = async() => {
    const {data: {coursesList}} = await instance.get('/course');
    return coursesList
}

export {course}