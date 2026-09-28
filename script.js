const display = document.getElementById("display");

let firstNumber = "";
let operation = "";

const addNumber = function(number) {
  
   if (number === "." && display.value.includes(".")) {
    return;

   }

    display.value += number; 

    if (display.value === "Error") {
        display.value = "";
        
    }

};

const chooseOperation = function(op) {
    firstNumber = Number(display.value);
    operation = op;
    display.value = "";
};

const clearDisplay = function() {
    display.value = "";
    firstNumber = "";
    operation = "";
};

const calculate = function() {
    let secondNumber = Number(display.value);
    
    if (operation === "+") {
        display.value = firstNumber + secondNumber;
    }
    
    if (operation === "-") {
      display.value = firstNumber - secondNumber;
    }

    if (operation === "*") {
        display.value = firstNumber * secondNumber;
    }

    if (operation === "/") {
        if (secondNumber === 0) {
            display.value = "Error";
        } else {
            display.value = firstNumber / secondNumber;
        }
    }

}

document.addEventListener("keydown", function(event) {
        if (event.key >= "0" && event.key <= "9") {
            addNumber(event.key);
        }

        if (event.key ===".") {
            addNumber(event.key);
        }

        if (event.key === "+") {
            chooseOperation("+");
        }

        if (event.key === "-") {
            chooseOperation("-");
        }

        if (event.key === "*") {
            chooseOperation("*");
        }

        if (event.key === "/") {
            event.preventDefault();
            chooseOperation("/");
        }

        if (event.key === "Enter") {
            calculate();
        }

        if (event.key === "Escape") {
            clearDisplay();
        }

});