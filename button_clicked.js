let messageBoard = JSON.parse(localStorage.getItem("messageBoard")) || [];

document.getElementById("mainButton").addEventListener("click", function() {
    alert("Button clicked!")
    store = document.getElementById("textBox").value;
    document.getElementById("textBox").value = "";

    if (store){
        messageDiv = document.createElement("div");
        messageDiv.textContent = store;

        displayArea.appendChild(messageDiv);

        messageBoard.push(store);
        localStorage.setItem('items', JSON.stringify(items));
    }
});


window.addEventListener('load', function() {
    const store = document.getElementById("textBox").value;
    if (store) {
        const messages = JSON.parse(localStorage.getItem('messages') || '[]');
        messages.push(store);
        localStorage.setItem('messages', JSON.stringify(messages));
        displayMessages();
        userInput.value = '';
    }
});


