#! /usr/bin/env node
"use strict";
exports.__esModule = true;
//import { add } from "./add.js";
var inquirer_1 = require("inquirer");
var answers = await inquirer_1["default"].prompt([
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
]);
//const result = add(answers.num1, answers.num2)
console.log(answers);
