
import { input, select } from "@inquirer/prompts";
import { green, yellow } from "colors";

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
                name: '2. Is a palindrome word',
                value: 2,
            },
            {
                name: '3. How many times ther word appers in a sentence',
                value: 3,
            },
            {
                name: '4. Inverse a letter',
                value: 4,
            },
            {
                name: '5. Percent % of the value',
                value: 5,
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


export const sentence = async ()=> {

    const action = {
        type: 'input',
        message: 'Introduce the sentence'
    }

    const sentence = await input(action);
    return sentence;
}

export const word = async ()=> {

    const action = {
        type: 'input',
        message: 'Introduce the word'
    }

    const sentence = await input(action);
    return sentence;
}


export const value = async () => {

    const action = {
        type: 'input',
        message: 'Please introduce de value',
    }

    const value = await input(action);
    return value;
}

export const valuePercent = async () => {

    const action = {
        type: 'input',
        message: 'Please introduce de percent (%)',
    }

    const percent = await input(action);
    return percent;
}