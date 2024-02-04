#! /usr/bin/env node


import inquirer from 'inquirer';


let newuser:{n1:number, n2:number, operator:string}=await inquirer.prompt([
    {
        type: "number",
        name: "n1",
        message: "Please enter your first number."
    },
{
        type: "number",
        name: "n2",
        message: "Please enter your second number."
},
{
         type: "list",
         name: "operator",
         choices: ["+", "-", "*", "/"],
         message: "Please enter your operator."
}])

let {n1, n2, operator}= newuser
if (n1 && n2 && operator){
    if (operator == "+"){
        console.log(`The result of ${n1} + ${n2}= ${n1+n2}`)
    }
    else if ( operator == "-"){
        console.log(`The result of ${n1} - ${n2}= ${n1-n2}`)
    }
    else if (operator == "*"){
        console.log(`The result of ${n1} * ${n2}= ${n1*n2}`)
    }
    else if (operator == "/"){
        console.log(`The result of ${n1} / ${n2}= ${n1/n2}`)

    }
    else {
        console.log("Please enter valid operator.")
    }
}
console.log(newuser)
















