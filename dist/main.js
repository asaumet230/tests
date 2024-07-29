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
const colors_1 = require("colors");
const models_1 = require("./models");
const helpers_1 = require("./helpers");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let option;
        do {
            option = yield (0, helpers_1.menu)();
            const excersise = new models_1.Excercises();
            switch (option) {
                case 1:
                    console.log('\n');
                    const number = yield (0, helpers_1.multipleNumber)();
                    if (isNaN(parseInt(number))) {
                        console.log('\n');
                        console.log('Please insert a valid name');
                        break;
                    }
                    excersise.multiplicationTable(parseInt(number));
                    break;
                case 2:
                    console.log('\n');
                    const name = yield (0, helpers_1.palindromeName)();
                    if (!isNaN(parseInt(name))) {
                        console.log('\n');
                        console.log('Please insert a valid name');
                        break;
                    }
                    excersise.isPalindrome(name);
                    break;
                case 3:
                    console.log('\n');
                    console.log((0, colors_1.green)(`Option Selected ${option}`));
                    break;
                default:
                    console.log('\n');
                    console.log(`Not a valid option`);
                    break;
            }
            yield (0, helpers_1.stop)();
        } while (option !== 0);
    });
}
main();
//# sourceMappingURL=main.js.map