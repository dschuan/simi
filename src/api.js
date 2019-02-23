import openSocket from 'socket.io-client';
// const  socket = openSocket('http://localhost:5000');
const  socket = openSocket('http://192.168.43.8:5000');

// socket.on('connect', function() {
//     socket.emit('my_event', {data: 'I\'m connected!'});
// });

function connect(cb) {
  socket.emit('connect')
};

function join_room(username,room,cb){
  console.log('join_room')
  socket.emit('join',{'username':username,'room':room})
};

function room_namelist(cb) {
  console.log('namelist')
  socket.on('room_namelist', (msg) => {
    console.log(msg)
    cb(msg)
  });
};

export { room_namelist,connect,join_room }
