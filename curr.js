import inquirer from "inquirer";
let loop = true;
while (loop) {
    const userInput = await inquirer.prompt([
        {
            type: "list",
            name: "currencyInput",
            choices: ["Pakistani rupee", "US Doller", "Saudi Riyal"],
            meesage: "Select your input currency"
        },
        {
            type: "number",
            name: "amountInput",
            message: "Enter the amount you want to convert"
        },
        {
            type: "list",
            name: "currencyOutput",
            choices: ["Pakistani Rupee", "US Doller", "Saudi Riyal"],
            Message: "Select your output currency"
        }
    ]);
    const input = userInput.currencyInput;
    const output = userInput.currencyOutput;
    const amount = userInput.amountInput;
    if (input === "Pakistani Rupee") {
        if (output === "US dollar ") {
            console.log('The ${amount} Pakistani Rupee is equal to ${amount / 281} US Doller');
        }
        else if (output === "Saudi Riyal") {
            console.log('The ${amount} Pakistani Rupee is equal to ${amount / 75} Saudi Riyal');
        }
    }
    else if (input === "US Doller") {
        if (output === "pakistani Rupee") {
            console.log('The ${amount} US Doller is equal to ${amount * 281} Pakistani rupee');
        }
        else if (output === "Saudi Riyal")
            console.log('The ${amount} US Doller is equal to ${amount * 3.75} Saudi Riyal');
    }
    else if (input === "Saudi Riyal") {
        if (output === "pakistani Rupee") {
            console.log('The ${amount} Saudi Riyal is equal to ${amount * 75} Pakistani rupee');
        }
        else if (output === "US Doller")
            console.log('The ${amount} Saudi Riyal is equal to ${amount * 3.75} US Doller');
    }
    const calulateagain = await inquirer.prompt({
        type: "confirm",
        name: "calulateMore",
        message: "Do you want more conversions?",
        default: false
    });
    if (calulateagain.calulateMore) {
        loop = false;
    }
}
