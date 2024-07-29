"use strict";
function multiplicationTable(num) {
    console.log(`--- Multiplication Table: ${num} ---`);
    for (let i = 1; i <= 10; i++) {
        const multiple = num * i;
        console.log(`${i} * ${num} = ${multiple}`);
    }
}
multiplicationTable(5);
//# sourceMappingURL=app.js.map