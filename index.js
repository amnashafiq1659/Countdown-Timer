#!/usr/bin/env node
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
console.log("\n\t\t Welcome in the Countdown timer.\n");
console.log("\t Enter the time in seconds and seconds must be within 60!\n");
let answer = await inquirer.prompt({
    name: "userInput",
    type: "number",
    message: "Enter the time in seconds:",
});
if (answer.userInput > 60) {
    console.log("Enter the second must be within 60.");
    process.exit();
}
else if (isNaN(answer.userInput)) {
    console.log("Please! Enter the valid number.");
    process.exit();
}
;
let input = answer.userInput;
function startTime(value) {
    let initialTime = new Date().setSeconds(new Date().getSeconds() + 2 + value);
    let timeInterval = new Date(initialTime);
    setInterval(() => {
        let currentTime = new Date();
        let timeDifference = differenceInSeconds(timeInterval, currentTime);
        if (timeDifference <= 0) {
            console.log("Timer has expired!");
            process.exit();
        }
        ;
        let minutes = Math.floor((timeDifference % (3600 * 24)) / 3600);
        let seconds = Math.floor(timeDifference % 60);
        console.log(`${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`);
    }, 1000);
}
;
startTime(input);
