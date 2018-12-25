// npm install --save express
const express = require('express');
const app = express();
// npm install --save body-parser
const body_parser = require('body-parser');
let looper;
let stringVariable = "Hello";

const messages = [];

const SERVER_PORT = 8080;

app.use(body_parser({type: 'json'}));
app.post('/messages', (request, res) => {
  const user = request.body.user;
  const message = request.body.message;
  messages.push({
    user: user,
     messsage: message
 })
 res.send('OK');
})

app.get('/messages', (request, res)=>{
  res.json(messages);
});








app.listen(SERVER_PORT, ()=>{
  console.log(`Listening on port ${SERVER_PORT}`);
});
