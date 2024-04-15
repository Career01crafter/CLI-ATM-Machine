#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 15000;
console.log("Your current balance is = ", myBalance);

let myPinCode = 1122;

let pinCode = await inquirer.prompt([
  { name: "pin", type: "number", message: "Enter your pin number." },
]);
if (pinCode.pin === myPinCode) {
  console.log("You entered correct pin code!");
  let operations = await inquirer.prompt([
    {
      name: "Operators",
      message: "Please select operator!",
      type: "list",
      choices: ["Withdraw", "Check Balance", "PassCash"],
    },
  ]);
  if (operations.Operators === "Withdraw") {
    let amountAns = await inquirer.prompt([
      { name: "Amount", type: "number", message: "Enter your amount!" },
    ]);
    myBalance -= amountAns.Amount;
    console.log("Now! Your remaining balance is:" + myBalance);
  } else if (operations.Operators === "Check Balance") {
    console.log("Your current balance is:" + myBalance);
  } else if (operations.Operators === "PassCash") {
    let cashAns = await inquirer.prompt([
      {
        name: "Cash",
        message: "Please! Select one to withdraw.",
        type: "list",
        choices: ["5000", "10000"],
      },
    ]);
    if (cashAns.Cash === "5000") {
      myBalance -= cashAns.Cash;
      console.log("Your remaining balance is:" + myBalance);
    } else if (cashAns.Cash === "10000") {
      myBalance -= cashAns.Cash;
      console.log("Your remaining balance is:" + myBalance);
    }
  }
} else {
  console.log("Pin Code is incorrect.");
}
