import express from 'express'
import cors from 'cors'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import courseRoute from './routes/course.js' 

const app = express();

//init middleware
app.use(cors())

const __dirname = dirname(fileURLToPath(import.meta.url));
//define routes
app.use(express.static(path.resolve(__dirname, '../frontend/build')));
app.use('/api/course', courseRoute)

//define server
const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`server is up on port ${port}.`)
})