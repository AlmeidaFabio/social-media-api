import express, { json, urlencoded } from 'express'
import cors from 'cors'
import path from 'path'
import feedRoutes from './routes/feed'
import userRoutes from './routes/user'
import postsRoutes from './routes/posts'
import { errorHandler } from './middlewares/ErrorHandler'

const app = express()

app.use(cors())
app.use(json())
app.use(urlencoded({extended:true}))
app.use(express.static(path.resolve(__dirname, '..', 'public')))
app.use('/feed', feedRoutes)
app.use('/user', userRoutes)
app.use('/posts', postsRoutes)
app.use(errorHandler)

export { app }