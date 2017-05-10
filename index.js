var path = require('path');
var express = require('express');
var app = express();
var server = require('http').Server(app)
var io = require('socket.io')(server)
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(express.static(path.join(__dirname, 'public')));

// app.use('/peerjs', require('peer').ExpressPeerServer(server, {
//     debug: true
// }))
//hosting our own peerjs server which serves as a connections broker

// var peerid; 

app.get('/', (req, res, next) => {
    res.send("hi hi hi")
})

app.post('/api/sentiment', (req, res, next) => {
    console.log("this is api/sentiment", req.body)
    res.send("if you can't love yourself, how in the hell are you gonna love somebody else?")
})
//make an axios request from the component to get this peer id so that 
//the client side can connect to their friend. 
// app.get('/peerid', (req, res, next) => {
//     res.send(peerid)
// })

//When the peer id comes in, send it to a component as a prop so that it can be
//used in peer.connect
io.on('connection', function(socket){
  socket.emit('message', 'hello i am your message')
});


// io.on('connection', function(socket){
//   console.log("YEAHHHH BABY WE LIVE. here's my id", socket.id)
// });


server.listen(3002, function () {
    console.log("listening on 3002 hey girrrlll")
});
