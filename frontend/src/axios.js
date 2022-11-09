import axios from 'axios'

const instance = axios.create({baseURL: `http://${process.env.PORT}/api/course`})

const course = async() => {
    const {data: {coursesList}} = await instance.get('/course');
    return coursesList
}

export {course}