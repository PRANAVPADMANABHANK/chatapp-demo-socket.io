const http = require("http")
const express = require("express");
const path = require("path")
const {Server} = require("socket.io")

const app = express();
const server = http.createServer(app)
const io = new Server(server)

app.use(express.static(path.resolve("./public")))

//socket.io
io.on('connection', (socket) => {
    socket.on('user-message',message=>{
        io.emit("message", message)
    })    
})

app.get('/', (req,res)=>{
    return res.sendFile("/public/index.html")
})

server.listen(9000, ()=>console.log("Server Started at 9000 port"))