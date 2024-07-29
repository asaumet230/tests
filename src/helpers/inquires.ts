
import { input, select } from "@inquirer/prompts";
import { blue, green, yellow } from "colors";

export const menu = async () => {

    const menuOptions = {
        type: 'list',
        name: 'option',
        message: "What would you like to do?",
        choices: [
            {
                name: '1. Multiplication table',
                value: 1,
            },
            {
                name: '2. Addition table',
                value: 2,
            },
            {
                name: '3. Susbtraction table',
                value: 3,
            },
            {
                name: '0. Exit',
                value: 0,
            },
        ]
    }

    console.clear();
    console.log('\n');
    console.log(green("================= Menu Options ================="));

    const option = await select(menuOptions);
    return option;
}

export const multipleNumber = async () => {

    const action = {
        type: 'input',
        message: `${yellow('Enter the multiple')}`
    }

    const number = await input(action);
    return number;

}


export const palindromeName = async () => {

    const action = {
        type: 'input',
        message: `${yellow('Enter the name')}`,
    }

    const palindrome = await input(action);
    return palindrome as string;
}

export const stop = async () => {

    const action = {
        type: 'input',
        message: `Press ${green("ENTER")} to continue`,
    }


    console.log(`\n`);
    await input(action);

}
