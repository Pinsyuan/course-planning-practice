import axios from 'axios'

// const instance = axios.create({baseURL: `https://course-planning-practice.herokuapp.com/api/course`})
// const instance = axios.create({baseURL: `${process.env.HOST}:${process.env.PORT}/api/course`})
const instance = axios.create({baseURL: `http://localhost:4000//api/course`})
console.log(`url in axios: ${instance}`)

const course = async() => {
    const {data: {coursesList}} = await instance.get('/course');
    return coursesList
}

export {course}