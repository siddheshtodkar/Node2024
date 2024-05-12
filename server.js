import http from 'http'
const PORT = process.env.PORT ? process.env.PORT : 3200

// fetch payload of POST req
const addUser = (req, res) => {
    let body = ''
    //listen for data
    req.on('data', (chunk) => {
        body += chunk.toString()
    })
    req.on('end', () => {
        const newUser = JSON.parse(body)
        res.statusCode = 201
        res.setHeader('Content-Type', 'text/json')
        res.write(JSON.stringify(newUser))
        res.end()
    })
}

const server = http.createServer((req, res) => {
    try {
        if (req.method == 'GET') {
            if (req.url == '/') {
                res.writeHead(200, { 'Content-Type': 'text/plain' })
                res.end('Home page')
            }
            else {
                res.writeHead(404, { 'Content-Type': 'text/plain' })
                res.end('error page')
            }
        }
        else if (req.method == 'POST') {
            if (req.url == '/') {
                addUser(req, res)
            }
            else {
                res.writeHead(404, { 'Content-Type': 'text/plain' })
                res.end('error page')
            }
        }
        else
            throw new Error('Method not allowed')
    }
    catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' })
        res.end('internal server error')
    }
})

server.listen(PORT, () => {
    console.log('server running on port', PORT)
})