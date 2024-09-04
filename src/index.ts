import { app } from './server/server'
import http from 'http'

const server = http.createServer(app)

server.listen(3333, () => {
  console.log('server api running')
})
