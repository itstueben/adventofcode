const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data.txt');

try {
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.split('\n');

    let leftNumbers = [];
    let rightNumbers = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line) {
            const [left, right] = line.split(/\s+/).map(Number);
            leftNumbers.push(left);
            rightNumbers.push(right);
        }
    }


    leftNumbers.sort((a, b) => a - b);
    rightNumbers.sort((a, b) => a - b);

    console.log("Left Numbers:", leftNumbers);
    console.log("Right Numbers:", rightNumbers);

    let totalDistance = 0;
    leftNumbers.forEach((item, index) => {
        totalDistance +=  Math.abs(item - rightNumbers[index])
    })

    console.log(totalDistance)


} catch (err) {
    console.error('Error reading file:', err);
}