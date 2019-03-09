
const input = document.getElementById("message-input-box");
const sendButton = document.getElementById("message-send-button");

sendButton.addEventListener('click', (e)=>{
    alert(input.value);
});

input.addEventListener('keyup', (event)=>{

    if (event.key === 'Enter') {
        sendButton.click();
    }
    
});