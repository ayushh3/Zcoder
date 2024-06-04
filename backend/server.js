const express = require('express');
const cors = require('cors');
const router= require('./routers')
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 80;
const db= require('./db')
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 6969 });

wss.on('connection', (ws) => {
    console.log('New client connected');

    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        
        // Broadcast the message to all clients except the sender
        wss.clients.forEach(client => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });

    ws.on('error', (error) => {
        console.error('WebSocket error: ', error);
    });
});

console.log('WebSocket server is running on ws://localhost:6969');

// DB connections
db.connect()

// (Your DB connection code goes here)

// Middleware parts
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.use(express.json());

// Headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  next();
});

//api
app.use('/api', router);

// Static resources
app.use('/upload', express.static(path.join(__dirname, '/../uploads')));
app.use(express.static(path.join(__dirname, '/../frontend/zcoder/build')));

app.get('*', (req,res) => {
    try{
        res.sendFile(path.join('${__dirname}/../frontend/build/index.html'))

    } catch (e) {
        res.send('oops! error occured')
    }
    
})

//cors
app.use(cors())

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




