"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Excercises = void 0;
const colors_1 = require("colors");
class Excercises {
    constructor() { }
    ;
    multiplicationTable(num) {
        console.log('\n');
        console.log((0, colors_1.blue)(` ==== Multiplication Table: ${num} === `));
        for (let i = 1; i <= 10; i++) {
            const multiple = num * i;
            console.log(`${i} * ${num} = ${multiple}`);
        }
    }
    isPalindrome(name) {
        const palindromeName = name.split('').reverse().join('');
        console.log('\n');
        palindromeName === name ? console.log((0, colors_1.yellow)(`True the name ${name} is palindrome`)) : console.log((0, colors_1.red)(`False the name ${name} is not a palindrome`));
    }
    isWordInSentence(sentence, word) {
        const cleanSentence = sentence.toLocaleLowerCase().replace(/[!@#$%^&*-+,.?~()><""':;]/gi, "");
        const cleanWord = word.toLocaleLowerCase().replace(/[!@#$%^&*-+,.?~()><""']:;/gi, "");
        const sentenceArray = cleanSentence.split(' ');
        const count = 0;
        const timesTheWordApper = sentenceArray.reduce((accumulator, currentValue) => currentValue === cleanWord ? accumulator + 1 : accumulator, count);
        console.log('\n');
        console.log((0, colors_1.yellow)(`The word appers: ${timesTheWordApper} ${timesTheWordApper === 1 ? 'time' : 'times'}`));
    }
    inverseString(letter) {
        let inverseLetter = '';
        for (const character of letter) {
            inverseLetter = character + inverseLetter;
        }
        console.log('\n');
        console.log((0, colors_1.blue)(inverseLetter));
    }
    numberPercent(percent, value) {
        const valuePercent = (percent / 100) * value;
        console.log('\n');
        console.log((0, colors_1.yellow)(`The percent ${percent}% of the value ${value} is: ${valuePercent.toPrecision(2)}`));
    }
    drawSquare(asteriks) {
        let topAndBottom = '';
        let middle = [];
        for (let i = 0; i < asteriks; i++) {
            topAndBottom = '*' + topAndBottom;
            if (i === 0 || i === (asteriks - 1)) {
                middle.push('*');
            }
            else {
                middle.push(' ');
            }
        }
        console.log(topAndBottom);
        for (let i = 0; i < asteriks - 2; i++) {
            console.log(middle.join(''));
        }
        console.log(topAndBottom);
    }
    oddNumbersInARange(num1, num2) {
        let a;
        let b;
        let oddNumbers = 0;
        if (num1 > num2) {
            b = num1;
            a = num2;
        }
        else {
            b = num2;
            a = num1;
        }
        for (let i = a; i < b; i++) {
            if (i % 2 !== 0) {
                oddNumbers += 1;
            }
        }
        console.log((0, colors_1.blue)(`The quantity of odd numbers is: ${oddNumbers}`));
    }
    invertNumber(value) {
        if (isNaN(value)) {
            console.log((0, colors_1.blue)('please enter a valid value'));
            return;
        }
        const signNumber = Math.sign(value);
        const valueInverted = parseInt(value.toString().split("").reverse().join("")) * signNumber;
        console.log(`The number inverted is: ${valueInverted}`);
    }
    sameItemsArray() {
        const array1 = [1, 2, 3, 4, 5, 3, 5, 7];
        const array2 = [3, 6, 7, 8, 5, 1, 5, "perro"];
        let newArray = [];
        array1.forEach(item => {
            if (array2.includes(item)) {
                if (newArray.includes(item))
                    return;
                newArray = [...newArray, item];
            }
        });
        console.log(`The array with similars items is: [${newArray}]`);
    }
    drawLadder(value) {
        if (value <= 0) {
            console.log((0, colors_1.yellow)('Insert a valid value'));
        }
        let ladder = [];
        let completeLadder = "";
        for (let i = 0; i < value; i++) {
            ladder.push('[-]');
            completeLadder += ladder.join("") + '\n';
        }
        console.log((0, colors_1.yellow)(completeLadder));
    }
    censureText(text = '', sententce = '') {
        if (sententce.length <= 0 && text.length > 1) {
            console.log('\n');
            console.log((0, colors_1.blue)("Can't read the sentence"));
            return;
        }
        if (text.length <= 0 && sententce.length > 1) {
            console.log('\n');
            console.log((0, colors_1.blue)("Can't read the text"));
            return;
        }
        if (text.length <= 0 && sententce.length <= 1) {
            console.log('\n');
            console.log((0, colors_1.blue)("Can't read the text & the sentence"));
            return;
        }
        const searchValue = text.toLocaleLowerCase();
        const regex = new RegExp(searchValue, 'gi');
        const newSentenceWithCensure = sententce.toLocaleLowerCase().replace(regex, '[-CENSURE-]');
        console.log('\n');
        console.log(newSentenceWithCensure);
    }
    numbersEightByEight(value) {
        let count = value;
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
    divideArray(mainArray, arraySize) {
        let newArray = [];
        for (let i = 0; i < mainArray.length; i += arraySize) {
            let subArray = mainArray.slice(i, i + arraySize);
            newArray.push(subArray);
        }
        console.log(newArray);
    }
    repeatString(text, value) {
        if (value <= 0) {
            console.log('please introduce a valid value, must be 0 or grater');
            return;
        }
        const newString = text.repeat(value);
        console.log(newString);
    }
    characterRepeat() {
        const name = 'andres felipe,* saumet. chilito';
        let characterObject = {};
        const newString = name.replace(/[,*/&^%$#@,.;]/ig, "").replace(/[" "]/ig, "");
        const newSringArray = newString.split("");
        let maxValue = 0;
        let maxKey = "";
        for (const value of newSringArray) {
            const item = newSringArray.filter(item => item === value);
            characterObject[value] = item.length;
        }
        for (const key in characterObject) {
            if (characterObject[key] > maxValue) {
                maxValue = characterObject[key];
                maxKey = key;
            }
        }
        console.log(`The character that is repeatet the most is: ${maxKey} and appers ${maxValue} times`);
    }
    vowelsRepeat(value) {
        const vowelsInSentence = value.match(new RegExp(/[aeiou]/, 'ig'));
        const quantityVowelsInSentence = (vowelsInSentence === null || vowelsInSentence === void 0 ? void 0 : vowelsInSentence.length) || 0;
        console.log(`The sentence have ${quantityVowelsInSentence} in sentence`);
    }
}
exports.Excercises = Excercises;
//# sourceMappingURL=Excercises.js.map