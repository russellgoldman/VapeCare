const socketIOClient = require('socket.io-client')
const socket = socketIOClient('http://35.203.112.83:5000')
socket.on('ping', () => {
    console.log('ping')
});
socket.connect(); 
socket.on('error', (error) => {
    console.log(error)
});
socket.on('event', function(data){
    console.log('connected to socket server'); 

});
socket.on("connect", () => {
    console.log('connected to socket server'); 
})
socket.on("no anomaly", (res) => { 
    console.log(res)
    console.log('connected to socket server'); 
})