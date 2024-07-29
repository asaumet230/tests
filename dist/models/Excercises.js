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
}
exports.Excercises = Excercises;
//# sourceMappingURL=Excercises.js.map