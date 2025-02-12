storeEverything = [];

function clickyAndClear(){
    alert("Button clicked!")
    store = document.getElementById("textBox").value;
    document.getElementById("textBox").value = "";

    storeEverything.push(store);
}

console.log(store[0]);

document.getElementById("mainButton").addEventListener("click", clickyAndClear);




