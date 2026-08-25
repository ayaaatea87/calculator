const readline = require("readline");
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function calculate(){
    rl.question("Enter First Number:", (answer) => {
        const firstNumber = Number(answer);
        rl.question("Enter Second Number:", (answer) => {
            const secondNumber = Number(answer);
            rl.question("Enter operation (+, -, *,/):", (operation) => {
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
