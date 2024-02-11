const http = require("http")
const port = 3000

const rotes = {
    '/': 'Node course',
    '/books': 'On books page',
    '/authors': 'On authors page',
    '/editors': 'On editors page',
    '/about': 'About this project'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(rotes[req.url])
})

server.listen(port, () => {
    console.log(`🟢 Server is running on http://localhost:` + port)
})