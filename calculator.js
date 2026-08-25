const readline = require("readline");
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function askForOperation(callback){
    rl.question("Enter operation (+, -, *,/):", (operation) => {
        const validOperations = ["+", "-", "*", "/"];
        if (!validOperations.includes(operation)) {
            console.log("Invalid operation. Please choose +, -, *, or /.");
            askForOperation(callback);
            return;
        }
        callback(operation);
});
}
function askForNumber(message,callback){
    rl.question(message, (answer) => {
        const number = Number(answer);
        if (Number.isNaN(number)) {
            console.log("Invalid input. Please enter a valid number.");
            askForNumber(message, callback);
            return;
        }
        callback(number);
});
}
function calculate(){
    askForNumber("Enter First Number:",(firstNumber)=>{
    askForNumber("Enter Second Number:", (secondNumber) => { 
            askForOperation((operation) => {
                const validOperations = ["+", "-", "*", "/"];
                if (!validOperations.includes(operation)) {
                    console.log("Invalid operation. Please choose +, -, *, or /.");
                    rl.close();
                    return;
                }
                switch (operation) {
                    case "+":
                        console.log(firstNumber + secondNumber);
                        break;

                    case "-":
                        console.log(firstNumber - secondNumber);
                        break;

                    case "*":
                        console.log(firstNumber * secondNumber);
                        break;

                    case "/":
                        if (secondNumber === 0) {
                            console.log("Error:Division by zero is not allowed");
                        } else { console.log(firstNumber / secondNumber); }
                        break;

                    default:
                        console.log("Invalid operation");
                }
                rl.question("do you want to perform another calculation? (yes/no):", answer =>{
                    if(answer.toLowerCase()== "yes"){
                        calculate();
                    }else{
                        console.log("Thanks for using our calculation service ..!");
                        rl.close();
                    }
                });
            });
        });
    });

}
calculate();
