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
exports.menu = void 0;
const prompts_1 = require("@inquirer/prompts");
const colors_1 = require("colors");
const menu = () => __awaiter(void 0, void 0, void 0, function* () {
    const menuOptions = {
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
        ]
    };
    console.log('\n');
    console.log((0, colors_1.green)("================= Menu Options ================="));
    const response = yield (0, prompts_1.select)(menuOptions);
    return response;
});
exports.menu = menu;
//# sourceMappingURL=menu.js.map