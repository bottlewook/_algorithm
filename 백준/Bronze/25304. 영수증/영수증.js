const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const totalAmount = parseInt(input[0]);
const itemCount = parseInt(input[1]);

let calculatedTotal = 0;

for (let i = 2; i < 2 + itemCount; i++) {
    const [price, quantity] = input[i].split(' ').map(Number);
    calculatedTotal += price * quantity;
}

if (calculatedTotal === totalAmount) {
    console.log('Yes');
} else {
    console.log('No');
}
