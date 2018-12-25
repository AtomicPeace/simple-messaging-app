/// |
/// |
/// \/
function postMessage(user, text) {
	//TODO: Create a message based off passed in arguments
  var message = new Message(user, text);
  //TODO: Put message into messages array
  messages.push(message);
  //TODO: Return the messages array
  return messages;
}
/// |
/// |
/// \/

let x = { hello: 'goodbye',
          greet: function(){
          return "32".toPrecision();
                           }};

const messages = [];

function Message(user, text) {
    this.user = user;
    this.text = text;

  	this.greet = function () {
      return "Hello, I'm " + this.user;
    }

    return this;
}

let message =  {
  		user: "lawrence",
      text: "something"
    }

/**
    Message {
  		user,
      text
    }
*/
