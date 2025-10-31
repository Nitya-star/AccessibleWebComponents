function leapYear(year) {
    if((year % 4 == 0) && (year % 400 != 0))
        return true;
}
console.log(`Part-A`);
let year1 = 2001;
let result1 = leapYear(year1);
if (result1 == true) {
    console.log(`True`);
    console.log(`The year ${year1} is a leap year.`)
}
else {
    console.log(`False`);
    console.log(`The year ${year1} is not a leap year.`)
}
let year2 = 2024;
let result2 = leapYear(year2);
if (result2 == true) {
    console.log(`True`);
    console.log(`The year ${year2} is a leap year.`)
}
else {
    console.log(`False`);
    console.log(`The year ${year2} is not a leap year.`)
}
let year3 = 2200;
let result3 = leapYear(year3);
if (result3 == true) {
    console.log(`True`);
    console.log(`The year ${year3} is a leap year.`)
}
else {
    console.log(`False`);
    console.log(`The year ${year3} is not a leap year.`)
}
let year4 = 2400;
let result4 = leapYear(year4);
if (result4 == true) {
    console.log(`True`);
    console.log(`The year ${year4} is a leap year.`)
}
else {
    console.log(`False`);
    console.log(`The year ${year4} is not a leap year.`)
}



console.log(``);
console.log(`Part-B`);
let n = 3;
console.log(`The number of rows here is ${n}.`)
for (let i = 1; i <= n; i++) {
    let str = '';
    let count = 1;
    for (let j = 1; j <= 2 * n; ++j) {
        if (i + j >= n + 1 && (i >= j - n + 1)) {
            str += '@';
            count++;
        } else {
            str += ' ';
        }
    }
    console.log(str);
}
console.log(``);
let m = 5;
console.log(`The number of rows here is ${m}.`)
for (let i = 1; i <= m; i++) {
    let str = '';
    let count = 1;
    for (let j = 1; j <= 2 * m; ++j) {
        if (i + j >= m + 1 && (i >= j - m + 1)) {
            str += '@';
            count++;
        } else {
            str += ' ';
        }
    }
    console.log(str);
}


console.log(``);
console.log(`Part-C`);
function capital_letter(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(" ");
}
console.log(capital_letter("My name is Nitya Shah.")); 
console.log(capital_letter("This is my assignment 2."));
console.log(capital_letter("This is the part c in third question of this assignment."));





