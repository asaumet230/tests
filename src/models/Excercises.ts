import { blue, red, yellow } from "colors";
import { value } from '../helpers/inquires';

export class Excercises {

    constructor() { };

    multiplicationTable(num: number) {

        console.log('\n');
        console.log(blue(` ==== Multiplication Table: ${num} === `));

        for (let i = 1; i <= 10; i++) {

            const multiple = num * i;
            console.log(`${i} * ${num} = ${multiple}`);

        }
    }

    isPalindrome(name: string) {

        const palindromeName = name.split('').reverse().join('');

        console.log('\n');
        palindromeName === name ? console.log(yellow(`True the name ${name} is palindrome`)) : console.log(red(`False the name ${name} is not a palindrome`));

    }

    isWordInSentence(sentence: string, word: string) {

        const cleanSentence = sentence.toLocaleLowerCase().replace(/[!@#$%^&*-+,.?~()><""':;]/gi, "");
        const cleanWord = word.toLocaleLowerCase().replace(/[!@#$%^&*-+,.?~()><""']:;/gi, "");

        const sentenceArray = cleanSentence.split(' ');

        const count: number = 0;

        const timesTheWordApper = sentenceArray.reduce((accumulator, currentValue) => currentValue === cleanWord ? accumulator + 1 : accumulator, count);

        console.log('\n');
        console.log(yellow(`The word appers: ${timesTheWordApper} ${timesTheWordApper === 1 ? 'time' : 'times'}`))
    }


    //* INVERTIR CADENA DE TEXTO SIN UTILIZAR METODOS DE LOS ARRAYS, SOLO ESTRUCTURAS DE CONTROL:
    inverseString(letter: string) {

        let inverseLetter: string = '';

        for (const character of letter) {
            inverseLetter = character + inverseLetter;
        }

        console.log('\n');
        console.log(blue(inverseLetter));
    }

    numberPercent(percent: number, value: number) {

        const valuePercent = (percent / 100) * value;
        console.log('\n');
        console.log(yellow(`The percent ${percent}% of the value ${value} is: ${valuePercent.toPrecision(2)}`));
    }

    drawSquare(asteriks: number) {

        let topAndBottom: string = '';
        let middle: string[] = [];

        for (let i = 0; i < asteriks; i++) {

            topAndBottom = '*' + topAndBottom;

            if (i === 0 || i === (asteriks - 1)) {
                middle.push('*');
            } else {
                middle.push(' ');
            }
        }

        console.log(topAndBottom);

        for (let i = 0; i < asteriks - 2; i++) {
            console.log(middle.join(''));
        }

        console.log(topAndBottom);
    }


    oddNumbersInARange(num1: number, num2: number) {

        let a: number;
        let b: number;
        let oddNumbers: number = 0;

        if (num1 > num2) {
            b = num1;
            a = num2;
        } else {
            b = num2;
            a = num1;
        }

        for (let i = a; i < b; i++) {

            if (i % 2 !== 0) {
                oddNumbers += 1;
            }
        }

        console.log(blue(`The quantity of odd numbers is: ${oddNumbers}`));
    }

    invertNumber(value: number) {

        if (isNaN(value)) {
            console.log(blue('please enter a valid value'));
            return;
        }

        const signNumber = Math.sign(value);
        const valueInverted = parseInt(value.toString().split("").reverse().join("")) * signNumber;
        console.log(`The number inverted is: ${valueInverted}`);
    }


    sameItemsArray() {

        const array1: any[] = [1, 2, 3, 4, 5, 3, 5, 7];
        const array2: any[] = [3, 6, 7, 8, 5, 1, 5, "perro"];
        let newArray: any[] = [];

        array1.forEach(item => {
            if (array2.includes(item)) {

                if (newArray.includes(item)) return;
                newArray = [...newArray, item];
            }
        });
        console.log(`The array with similars items is: [${newArray}]`);
    }

    drawLadder(value: number) {

        if (value <= 0) {
            console.log(yellow('Insert a valid value'));
        }

        let ladder: string[] = [];
        let completeLadder: string = "";

        for (let i = 0; i < value; i++) {

            ladder.push('[-]');
            completeLadder += ladder.join("") + '\n';
        }

        console.log(yellow(completeLadder));
    }

    censureText(text: string = '', sententce: string = '') {

        if (sententce.length <= 0 && text.length > 1) {

            console.log('\n');
            console.log(blue("Can't read the sentence"));
            return;
        }

        if (text.length <= 0 && sententce.length > 1) {

            console.log('\n');
            console.log(blue("Can't read the text"));
            return;
        }

        if (text.length <= 0 && sententce.length <= 1) {
            console.log('\n');
            console.log(blue("Can't read the text & the sentence"));
            return;
        }

        const searchValue = text.toLocaleLowerCase();
        const regex = new RegExp(searchValue, 'gi');
        const newSentenceWithCensure = sententce.toLocaleLowerCase().replace(regex, '[-CENSURE-]');

        console.log('\n');
        console.log(newSentenceWithCensure);
    }


    numbersEightByEight(value: number) {

        let count: number = value;

        if (value < 8) {
            console.log('\n');
            console.log('The number must be major than eight (8)');
        }

        console.log(`======== Numbers of ${value} to 0 ========`);

        while (count > 0) {

            console.log(`nº${count}`);
            count += -8;
        }

        if (count <= 0) {
            console.log('nº0');
        }

        console.log(`======== End List ==========================`);
    }


    divideArray(mainArray: any[], arraySize: number) {

        let newArray: any[] = [];

        for (let i = 0; i < mainArray.length; i+= arraySize) {
           
           let subArray = mainArray.slice(i, i + arraySize);
           newArray.push(subArray);
        }

        console.log(newArray);
    }

    repeatString(text: string, value: number) {

        if( value <= 0) {
            console.log('please introduce a valid value, must be 0 or grater');
            return
        }

        const newString = text.repeat(value);
        console.log(newString);
    }

    characterRepeat() {

        const name = 'andres felipe,* saumet. chilito';

        interface ICharacter {
            [key:string]: number;
        }

        let characterObject: ICharacter= {}

        const newString = name.replace(/[,*/&^%$#@,.;]/ig, "").replace(/[" "]/ig, "");
        const newSringArray = newString.split("");
        let maxValue: number = 0;
        let maxKey: string = "";
    
        for (const value of newSringArray) {
            
            const item = newSringArray.filter(item => item === value);
            characterObject[value] = item.length;
        }

        for (const key in characterObject) {

            if(characterObject[key] > maxValue) {
                maxValue = characterObject[key];
                maxKey = key;
            }     
        }

        console.log(`The character that is repeatet the most is: ${ maxKey } and appers ${maxValue} times`);
        
    }


    vowelsRepeat(value: string) {

       const vowelsInSentence = value.match(new RegExp(/[aeiou]/, 'ig'));
        const quantityVowelsInSentence = vowelsInSentence?.length || 0;
       console.log(`The sentence have ${ quantityVowelsInSentence } in sentence`);

    }
}
