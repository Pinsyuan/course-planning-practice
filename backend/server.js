import express from 'express'
import cors from 'cors'
import courseRoute from './routes/course' 

const app = express();

//init middleware
app.use(cors())

//define routes
app.use('/api/course', courseRoute)

//define server
const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`server is up on port ${port}.`)
})