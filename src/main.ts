import { green } from "colors";

import { Excercises } from "./models";
import { 
    menu, 
    multipleNumber, 
    palindromeName, 
    sentence, 
    stop, 
    value, 
    valuePercent, 
    word } from "./helpers";
import { Excersise2 } from "./models/Excersise-2";


async function main() {

    let option: number;

    do {
        option = await menu();
        const excersise = new Excercises();
        
        switch (option) {

            case 1: 
                
                console.log('\n');
                const number = await multipleNumber();

                if(isNaN(parseInt(number))) {

                    console.log('\n');
                    console.log('Please insert a valid name');
                    break;
                }

                excersise.multiplicationTable( parseInt(number) );
                break;

            case 2:
                console.log('\n');
                const name = await palindromeName();

                if(!isNaN(parseInt(name))) {

                    console.log('\n');
                    console.log('Please insert a valid name');
                    break;
                }

                excersise.isPalindrome(name);
                break;

            case 3:
                const sentenceToAnalyze = await sentence();
                const wordTofind = await word();

                if( !isNaN(parseInt(sentenceToAnalyze)) || !isNaN(parseInt(wordTofind)) ) {
                    console.log('\n');
                    console.log(green('Please enter a valid sentence or name'));
                    break;
                }

                console.log('\n');
                excersise.isWordInSentence(sentenceToAnalyze, wordTofind);
                break;

            case 4:

                const wordToInvert = await word();
                excersise.inverseString(wordToInvert);
                break;

            case 5:

                const num = await value();
                const percent = await valuePercent();

                if( isNaN(parseInt( num )) || isNaN(parseInt( percent )) ) {
                    console.log('\n');
                    console.log('Please incert valid values');
                }

                excersise.numberPercent( parseInt(percent), parseInt(num) );
        
            default:
                console.log('\n');
                console.log(`Not a valid option`);
                break;
        }

        await stop();

    } while (option !== 0);

}

// main();

const excersise = new Excercises();
const excersises = new Excersise2();

// excersise.drawSquare(10);
// excersise.oddNumbersInARange(1,100);
// excersise.invertNumber(-78);
// excersise.sameItemsArray();
// excersise.drawLadder(10);
// excersise.censureText('hola tontos', 'hola tontos que mas wey hola tontos');
// excersise.numbersEightByEight(456);
// excersise.divideArray([1,2,3,4,5,6,7,8], 3);
// excersise.repeatString('andres', 4);
// excersise.characterRepeat();
// excersise.vowelsRepeat('vrgtykl');
// excersises.mustiplesOfThreeAndFive(100);
// excersises.divisorOfFive(10);

excersises.sawMovies();
