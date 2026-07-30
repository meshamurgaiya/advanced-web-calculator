function addToDisplay(value){
    document.getElementById("display").value += value;
}

function clearDisplay(){
    document.getElementById("display").value = "";
}

function calculate(){
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
}

function calculate(){
    let display = document.getElementById("display");
    let expression = display.value;

    try{
        let result = eval(expression);

        let historyList = document.getElementById("historyList");
        let item = document.createElement("li");
        item.textContent = expression + " = " + result;
        historyList.prepend(item);
saveHistory(expression, result);
        display.value = result;
    }
    catch{
        display.value = "Error";
    }
}

function backspace(){
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function square(){
    let display = document.getElementById("display");
    display.value = eval(display.value) ** 2;
}

function squareRoot(){
    let display = document.getElementById("display");
    display.value = Math.sqrt(eval(display.value));
}

document.addEventListener("keydown", function(event){

    let key = event.key;

    if("0123456789+-*/.%".includes(key)){
        addToDisplay(key);
    }

    else if(key === "Enter"){
        calculate();
    }

    else if(key === "Backspace"){
        backspace();
    }

    else if(key === "Escape"){
        clearDisplay();
    }

});
function clearHistory(){

    document.getElementById("historyList").innerHTML = "";

    localStorage.removeItem("calculatorHistory");

}

function saveHistory(expression, result){

    let history = JSON.parse(localStorage.getItem("calculatorHistory")) || [];

    history.unshift(expression + " = " + result);

    localStorage.setItem(
        "calculatorHistory",
        JSON.stringify(history)
    );
}
window.onload = function(){

    let history =
    JSON.parse(localStorage.getItem("calculatorHistory")) || [];

    let historyList =
    document.getElementById("historyList");

    history.forEach(function(entry){

        let item = document.createElement("li");
        item.textContent = entry;

        historyList.appendChild(item);

    });

};
function toggleTheme(){

    document.body.classList.toggle("light-theme");

    let btn = document.getElementById("themeBtn");

    if(document.body.classList.contains("light-theme")){
        btn.textContent = "Dark Mode";
    }
    else{
        btn.textContent = "Light Mode";
    }

}