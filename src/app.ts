import express, { json, urlencoded } from 'express'
import cors from 'cors'
import path from 'path'
import userRoutes from './routes/user'

const app = express()

app.use(cors())
app.use(json())
app.use(urlencoded({extended:true}))
app.use(express.static(path.resolve(__dirname, '..', 'public')))
app.use(userRoutes)

export { app }