import { blue, red, yellow } from "colors";

export class Excercises {

    constructor(){};

    multiplicationTable(num: number) {

        console.log('\n');
        console.log(blue(` ==== Multiplication Table: ${num} === `));
    
        for (let i = 1; i <= 10; i++) {
    
            const multiple = num * i;
            console.log(`${i} * ${num} = ${multiple}`);
    
        }
    }

    isPalindrome( name: string ) {

        const palindromeName = name.split('').reverse().join('');

        console.log('\n');
        palindromeName === name? console.log(yellow(`True the name ${ name } is palindrome`)) : console.log(red(`False the name ${ name } is not a palindrome`)) ;
  
    }

}