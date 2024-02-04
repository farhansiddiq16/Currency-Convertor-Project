import inquirer from "inquirer";
let currency = {
    "PKR": {
        USD: 0.004434589800443458980044345898,
        GBP: 0.0037,
        PKR: 1
    },
    "GBP": {
        USD: 1.21,
        GBP: 1,
        PKR: 270
    },
    "USD": {
        USD: 1,
        GBP: 0.83,
        PKR: 280
    }
};
let answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "GBP", "USD"],
        message: "Select your currency"
    }, {
        type: "list",
        name: "to",
        choices: ["PKR", "GBP", "USD"],
        message: "Select your conversion currency"
    }, {
        type: "number",
        name: "amount",
        message: "Enter your amount"
    }
]);
let { from, to, amount } = answer;
if (from && to && amount) {
    let result = currency[from][to] * amount;
    console.log(`Your conversion amount is ${result}`);
}
else {
    console.log("invalid input");
}
