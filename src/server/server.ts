import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import router from './router'

const app = express()

app.use(express.json())
app.use(
  cors({
    credentials: true,
  }),
)
app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/', router())

export { app }
