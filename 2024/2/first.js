const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data.txt');

function checkIncreasing(numbers) {
    for (let j = 1; j < numbers.length; j++) {
        const mul = numbers[j] - numbers[j - 1]
        // More than three
        if (mul > 3) {
            return false

        }
        // equal
        if (mul === 0) {
            return false

        }
        // decreasing
        if (mul < 0) {
            return false
        }
    }

    return true
}

function checkDecreasing(numbers) {
    for (let j = 1; j < numbers.length; j++) {
        const mul = numbers[j - 1] - numbers[j]
        // More than three
        if (mul > 3) {
            return false
        }
        // equal
        if (mul === 0) {
            return false
        }
        // increasing
        if (mul < 0) {
            return false
        }
    }

    return true
}


try {
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.split('\n');

    let reportsSafe = 0;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line) {
            const arNum = line.split(/\s+/).map(Number);
            console.log(arNum)
            let IncOrDec = true
            if (arNum[0] < arNum[1]) {
                if (checkIncreasing(arNum)) reportsSafe++
            } else {
                if (checkDecreasing(arNum)) reportsSafe++
            }


        }

    }


    console.log(reportsSafe)


} catch
    (err) {
    console.error('Error reading file:', err);
}