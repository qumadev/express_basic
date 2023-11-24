const http = require('node:http') // protocolo HTTP
const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Bienvenido a mi página web')
  }else if(req.url==='/contacto'){
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain;charset=utf-8')
    res.end('Contacto')
  }else{
    res.statusCode=404
    res.end('404')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`)
})
