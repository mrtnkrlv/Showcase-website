let messageBoard = JSON.parse(localStorage.getItem("messageBoard")) || [];

document.getElementById("clearButton").addEventListener("click", function() {
    localStorage.clear(); 
    messageBoard = []; 
    displayItems(); 
})


// THIS IS SUPER UGLY!! FIX!!
// works though

const textbox = document.getElementById('textBox');

textbox.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default Enter key behavior
        sendMessage(); // Call the function to send the message
    }
});

function sendMessage() {
    let store = textbox.value.trim();
    if (store) {
        let timestamp = new Date().toLocaleTimeString();
        let messageObject = {
            text: store,
            time: timestamp
        };
        messageBoard.push(messageObject);
        localStorage.setItem('messageBoard', JSON.stringify(messageBoard));
        displayItems();
        textbox.value = ''; // Clear the textbox after sending
    }
}

document.getElementById("mainButton").addEventListener("click", function() {
    let store = document.getElementById("textBox").value.trim();
    document.getElementById("textBox").value = "";

    if (store) {
        let timestamp = new Date().toLocaleTimeString(); 
        let messageObject = {
            text: store,
            time: timestamp
        };

        messageBoard.push(messageObject);
        localStorage.setItem('messageBoard', JSON.stringify(messageBoard));
        displayItems();
    }
});

function displayItems() {
    const displayArea = document.getElementById('displayArea');
    displayArea.innerHTML = messageBoard.map(item => 
        `<p>New message (${item.time}): ${item.text}</p>`
    ).join('');
}

window.addEventListener('load', displayItems);

