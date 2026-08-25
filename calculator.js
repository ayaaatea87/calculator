const readline = require("readline");
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter First Number:",(answer)=>{
    const firstNumber = Number(answer);
    rl.question("Enter Second Number:", (answer) =>{
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
                    if (secondNumber===0){
                        console.log("Error:Division by zero is not allowed");
                    } else { console.log(firstNumber / secondNumber); }
                    break;

                default:
                    console.log("Invalid operation");
            }
            rl.close();
        });
        
    });
});