"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
class Todo {
    constructor() { }
    ;
    multiplicationTable(num) {
        console.log(`--- Multiplication Table: ${num} ---`);
        for (let i = 1; i <= 10; i++) {
            const multiple = num * i;
            console.log(`${i} * ${num} = ${multiple}`);
        }
    }
}
exports.Todo = Todo;
//# sourceMappingURL=Todo.js.map