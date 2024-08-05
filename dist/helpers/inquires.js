"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.valuePercent = exports.value = exports.word = exports.sentence = exports.stop = exports.palindromeName = exports.multipleNumber = exports.menu = void 0;
const prompts_1 = require("@inquirer/prompts");
const colors_1 = require("colors");
const menu = () => __awaiter(void 0, void 0, void 0, function* () {
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
    };
    console.clear();
    console.log('\n');
    console.log((0, colors_1.green)("================= Menu Options ================="));
    const option = yield (0, prompts_1.select)(menuOptions);
    return option;
});
exports.menu = menu;
const multipleNumber = () => __awaiter(void 0, void 0, void 0, function* () {
    const action = {
        type: 'input',
        message: `${(0, colors_1.yellow)('Enter the multiple')}`
    };
    const number = yield (0, prompts_1.input)(action);
    return number;
});
exports.multipleNumber = multipleNumber;
const palindromeName = () => __awaiter(void 0, void 0, void 0, function* () {
    const action = {
        type: 'input',
        message: `${(0, colors_1.yellow)('Enter the name')}`,
    };
    const palindrome = yield (0, prompts_1.input)(action);
    return palindrome;
});
exports.palindromeName = palindromeName;
const stop = () => __awaiter(void 0, void 0, void 0, function* () {
    const action = {
        type: 'input',
        message: `Press ${(0, colors_1.green)("ENTER")} to continue`,
    };
    console.log(`\n`);
    yield (0, prompts_1.input)(action);
});
exports.stop = stop;
const sentence = () => __awaiter(void 0, void 0, void 0, function* () {
    const action = {
        type: 'input',
        message: 'Introduce the sentence'
    };
    const sentence = yield (0, prompts_1.input)(action);
    return sentence;
});
exports.sentence = sentence;
const word = () => __awaiter(void 0, void 0, void 0, function* () {
    const action = {
        type: 'input',
        message: 'Introduce the word'
    };
    const sentence = yield (0, prompts_1.input)(action);
    return sentence;
});
exports.word = word;
const value = () => __awaiter(void 0, void 0, void 0, function* () {
    const action = {
        type: 'input',
        message: 'Please introduce de value',
    };
    const value = yield (0, prompts_1.input)(action);
    return value;
});
exports.value = value;
const valuePercent = () => __awaiter(void 0, void 0, void 0, function* () {
    const action = {
        type: 'input',
        message: 'Please introduce de percent (%)',
    };
    const percent = yield (0, prompts_1.input)(action);
    return percent;
});
exports.valuePercent = valuePercent;
//# sourceMappingURL=inquires.js.map