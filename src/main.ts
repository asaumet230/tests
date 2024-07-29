import { green } from "colors";

import { Excercises } from "./models";
import { menu, multipleNumber, palindromeName, stop } from "./helpers";


async function main() {

    let option: number;

    do {
        option = await menu();
        const excersise = new Excercises();
        
        switch (option) {

            case 1: 
                
                console.log('\n');
                const number = await multipleNumber();

                if(isNaN(parseInt(number))) {

                    console.log('\n');
                    console.log('Please insert a valid name');
                    break;
                }

                excersise.multiplicationTable( parseInt(number) );
                break;

            case 2:
                console.log('\n');
                const name = await palindromeName();

                if(!isNaN(parseInt(name))) {

                    console.log('\n');
                    console.log('Please insert a valid name');
                    break;
                }

                excersise.isPalindrome(name);
                break;

            case 3:
                console.log('\n');
                console.log( green(`Option Selected ${option}`));
                break;
        
            default:
                console.log('\n');
                console.log(`Not a valid option`);
                break;
        }

        await stop();

    } while (option !== 0);

}

main();