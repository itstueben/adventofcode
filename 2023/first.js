const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'first.txt');

const numberWordsToDigits = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
};

try {
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.split('\n');
    let counter = 0

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const firstNumberMatch = line.match(/(?=\d|one|two|three|four|five|six|seven|eight|nine)/);
        const lastNumberMatch = line.match(/(\d|one|two|three|four|five|six|seven|eight|nine)(?!.*(\d|zero|one|two|three|four|five|six|seven|eight|nine))/);

        // console.log("firstNumberMatch",firstNumberMatch)
        // console.log("lastNumberMatch",lastNumberMatch)



        const firstNumber = firstNumberMatch ? (isNaN(firstNumberMatch[0]) ? numberWordsToDigits[firstNumberMatch[0]] : parseInt(firstNumberMatch[0])) : 0;
        const lastNumber = lastNumberMatch ? (isNaN(lastNumberMatch[0]) ? numberWordsToDigits[lastNumberMatch[0]] : parseInt(lastNumberMatch[0])) : 0;

        console.log(line)
        console.log("firstNumber",firstNumber)
        console.log("lastNumber",lastNumber)

        if (firstNumber === 0 || lastNumber === 0)  {
            break;
        }


        const number = firstNumber + lastNumber;
        counter += parseInt(number)

    }

    console.log("ZUsammen sind das: ", counter)

} catch (err) {
    console.error('Error reading file:', err);
}