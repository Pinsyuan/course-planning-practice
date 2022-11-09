import axios from 'axios'

const instance = axios.create({baseURL: `${process.env.HOST}:${process.env.PORT}/api/course`})

const course = async() => {
    console.log("get from axios")
    const {data: {coursesList}} = await instance.get('/course');
    return coursesList
}

export {course}