const WebSocket = require('ws');
const fs = require('fs');
const socket = new WebSocket('ws://127.0.0.1:1313');

socket.addEventListener('message', (event) => {
  console.log('Message from server:', event.data);
});

socket.addEventListener('open', (event) => {
  fs.readFile('level.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading level:', err);
      return;
    }

    const jsonData = JSON.parse(data);
    const objects = jsonData.map(obj => `1,${obj.objectID},2,${obj.x},3,${obj.y}`).join(';') + ';';

    const add = {
      action: 'ADD_OBJECTS',
      objects: objects,
      close: true
    };
    socket.send(JSON.stringify(add));
    console.log('Objects sent:', objects);
  });
});
