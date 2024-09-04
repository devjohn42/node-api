import { connectToDB } from './server/database'
import { app } from './server/server'
import http from 'http'
import dotenv from 'dotenv'

dotenv.config()

connectToDB()

const server = http.createServer(app)

server.listen(3333, () => {
  console.log('server api running')
})
