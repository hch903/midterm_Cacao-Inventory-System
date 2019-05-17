const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require("body-parser");

// Create server to serve index.html
const app = express()
const http = require('http').Server(app)
const port = process.env.PORT || 4000

// Routing
// app.use(express.static('public'))
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Socket.io serverSocket
const serverSocket = require('socket.io')(http)

// Start server listening process.
http.listen(port, () => {
    console.log(`Server listening on port ${port}.`)
})


// Connect to mongo
mongoose.connect('mongodb+srv://Winston:Hsieh@cluster0-lrz44.gcp.mongodb.net/test?retryWrites=true', {
    useNewUrlParser: true
})
const db = mongoose.connection

db.on('error', error => {
    console.log(error)
})

db.once("open", () => {
    console.log('MongoDB connected!');
    serverSocket.on("connection", socket => {
        console.log('User connected');
    })
});

router.use(function(req, res, next) {
    // 輸出記錄訊息至終端機
    console.log(req.method, req.url);
  
    // 繼續路由處理
    next();
});

router.get('/', (req, res) => {
    console.log("in");
    return res.send('Hello World!');
});

router.get('/summary', (req, res) => {
    console.log("in sum");
    return res.send('Hello Sum!');
});

app.use('/', router);