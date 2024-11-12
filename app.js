//1:
const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");
let isFirstNumber = true;
let operator;
let number1 = 0;
let number2 = 0;
let total;

buttons.forEach((button) => {
    button.addEventListener("click",(event) =>{
        if(event.target.classList.contains("number")) {
            display.textContent = display.textContent + event.target.textContent;
            if(isFirstNumber){
                number1 =  Number(number1 + event.target.textContent);
            }
            else {
                number2 =  Number(number2 + event.target.textContent)
                switch (operator) {
                    case '+':
                        total = number1 + number2;
                        break;
                    case '-':
                        total = number1 - number2;
                        break;
                    case '*':
                        total = number1 * number2;
                        break;
                    case '/':
                        total = number1 / number2;
                        break;
                }
            }
        }
        if(event.target.textContent === "+") {
            display.textContent = display.textContent + event.target.textContent;
            isFirstNumber = false;
            operator = "+";
        }
        else if(event.target.textContent === "-") {
            display.textContent = display.textContent + event.target.textContent;
            isFirstNumber = false;
            operator = "-";
        }
        else if(event.target.textContent === "*") {
            display.textContent = display.textContent + event.target.textContent;
            isFirstNumber = false;
            operator = "*";
        }
        else if(event.target.textContent === "/") {
            display.textContent = display.textContent + event.target.textContent;
            isFirstNumber = false;
            operator = "/";
        }
        if(event.target.textContent === "="){
            display.textContent = total;
            number1 = total;
            number2 = 0;
            total = 0;
            isFirstNumber = false;     
        }
        if(event.target.textContent === "C"){
            display.textContent = "";
            total = 0;
            number1 = 0;
            number2 = 0;
            isFirstNumber = true;
        }
    });
});