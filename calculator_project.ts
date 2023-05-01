#! /usr/bin/env node


import inquirer from "inquirer"

const answers: {
    num1: number,
    num2: number,
    operator: string
}
    = await inquirer.prompt([
        {
            name: "num1",
            message: "Enter the first number",
            type: "number"
        },
        {
            name: "num2",
            message: "Enter the second number",
            type: "number"

        },
        {
            name: "Operator",
            message: "Select the Operator",
            type: "list",
            choices: ["+", "-", "*", "/"]


        }

    ])
const { num1, num2, operator } = answers;
if (num1 && num2 && operator) {
    let result: number = 0;
    if (operator === "+") {
        result = num1 + num2;
    }
    else if (operator === "-") {
        result = num1 - num2;
    }
    else if (operator === "*") {
        result = num1 * num2;
    }
    else if (operator === "/") {
        result = num1 / num2;
    }
    else {
        alert(`invalid`)
    }


}
console.log(answers)