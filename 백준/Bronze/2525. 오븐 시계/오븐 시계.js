const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let time = input[0]
let plus = +input[1]
let [hour, minute] = time.split(' ').map(item => +item)

let plusHour = parseInt((plus + minute) / 60)
let plusMinute = (plus + minute) % 60

if (hour + plusHour >= 24) {
    console.log((hour + plusHour - 24) + ' ' + plusMinute)
} else {
    console.log(hour + plusHour + ' ' + plusMinute)
}