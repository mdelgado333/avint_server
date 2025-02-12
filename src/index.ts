import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import mongoose from 'mongoose'
import scriptRoutes from './routes/script.routes'
import dotenv from 'dotenv'
import router from './routes/index.routes'

dotenv.config()
const app = express()

app.use(express.json())

app.use(cors({
    credentials: true
}))

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

export const server = http.createServer(app)

server.listen(8080, () => {
    console.log('Server running on http://localhost:8080/')
})

const MONGO_URL = 'mongodb+srv://avint2021:WqY7ZBnprlFYm4IR@avint.qxzss.mongodb.net/?retryWrites=true&w=majority&appName=Avint'

mongoose.Promise = Promise
mongoose.connect(MONGO_URL)
mongoose.connection.on('error', (error: Error) => console.log(error))

app.use('/', scriptRoutes)