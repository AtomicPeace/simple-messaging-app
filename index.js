// npm install --save express
const express = require('express');
const serve = express();
const electron = require('./lib/electron');
// npm install --save body-parser
const body_parser = require('body-parser');
let looper;
let stringVariable = "Hello";

electron.init();

const messages = [];

const SERVER_PORT = 8080;

serve.use(body_parser({type: 'json'}));
serve.post('/messages', (request, res) => {
  const user = request.body.user;
  const message = request.body.message;
  messages.push({
    user: user,
     messsage: message
 });
 res.send('OK');
});

serve.get('/messages', (request, res)=>{
  res.json(messages);
});








serve.listen(SERVER_PORT, ()=>{
  console.log(`Listening on port ${SERVER_PORT}`);
});
