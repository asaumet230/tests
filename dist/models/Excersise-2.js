"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Excersise2 = void 0;
const colors_1 = require("colors");
class Excersise2 {
    constructor() { }
    mustiplesOfThreeAndFive(value) {
        for (let i = 1; i <= value; i++) {
            const isMultipleOfThree = i % 3 === 0;
            const isMultipleOfFive = i % 5 === 0;
            if (isMultipleOfThree && isMultipleOfFive) {
                console.log("BuzzLightyear");
            }
            else if (isMultipleOfThree) {
                console.log("buzz");
            }
            else if (isMultipleOfFive) {
                console.log("lightyear");
            }
            else {
                console.log(i);
            }
        }
    }
    divisorOfFive(value) {
        if (value <= 0) {
            console.log((0, colors_1.yellow)('Insert a valid value'));
        }
        for (let i = 1; i <= value; i++) {
            if (value % i === 0) {
                console.log(`${i} is divisor of: ${value}`);
            }
        }
    }
    sawMovies() {
        const movies = [
            {
                title: "Lord of the ring tow towers",
                director: "NAN",
                watch: true,
            },
            {
                title: "Batman returns",
                director: "NAN",
                watch: true,
            },
            {
                title: "Dead Pool & wolverine",
                director: "NAN",
                watch: false,
            },
        ];
        for (const movie of movies) {
            movie.watch ? console.log(`I saw ${movie.title}`) : console.log(`I have yet to see ${movie.title}`);
        }
    }
}
exports.Excersise2 = Excersise2;
//# sourceMappingURL=Excersise-2.js.map