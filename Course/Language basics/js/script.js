/* Basic data types */
let number = 5;
console.log(number);
let bigint = 1839172893172837198273891273891273891723891757435273894758234759823748592734985;
console.log(bigint);
let string = 'Hello World';
console.log(string);
let booleanTrue = true;
let booleanFalse = false;
console.log(`${booleanTrue} : ${booleanFalse}`);
let nullValue = null;
console.log(nullValue);
let notAssignedYet;
console.log(notAssignedYet);
let object = { name: 'user', age: 5}; 
console.log(object);
console.log(typeof object);

/* Basic operators */

//Math operators
let x = 10;
console.log('10 + 2 = ' + (x + 2));
console.log('10 * 2 = ' + (x * 2));
console.log('10 - 2 = ' + (x - 2));
console.log('10 / 2 = ' + (x / 2));
console.log('10 % 3 = ' + (x%3));

let johnBirth = 1978;
let adamBirth = 1994;

console.log(`John: ${calculateAge(johnBirth)}; Adam: ${calculateAge(adamBirth)};`) ;

function calculateAge(birthDate){
    let currentYear = new Date().getFullYear();

    return currentYear - birthDate;
}


//Logical operators 
let isOlder = calculateAge(johnBirth) > calculateAge(adamBirth);
console.log('Is John older than Adam?: ' + isOlder);


/* Coding challenge 1 
BMI = mass / height^2 = mass / (height / height)
(mass in kg and height in meter)

1. Store Mark's and John's mass and height in variables
2. Calculat both their BMIs
3. Create boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's BMI? true")
*/

console.log('Coding challenge 1 starts')

function getBMI(mass, height){
    return mass / Math.pow(height, 2);
}

let john = { mass: 80, height: 1.75 };
let mark = { mass: 122, height: 1.92 };

let johnBMI = getBMI(john.mass, john.height);
let markBMI = getBMI(mark.mass, mark.height);

let johnsGreaterMark = johnBMI >   markBMI;

console.log(`John's BMI: ${johnBMI}, Mark's BMI: ${markBMI}`);
console.log(`Jon's BMI is hiher than Mark's? ${johnsGreaterMark}`); 

console.log('Coding challenge 1 ends');


/* if / else  statement */
if (johnBMI > markBMI){
    console.log('John\'s BMI is greater than Mark\'s BMI');
}else{
    console.log('Mark\s BMI is greater than John\'s BMI');
} 


/* Boolean logic */

let firstName = 'John';
let age = 13;
console.log(`${firstName} ${age}`);

if(age < 13){
    console.log(firstName + ' is a boy.');
} else if(age >= 13 && age < 20){
    console.log(firstName + ' is a teenager.');
} else {
    console.log(firstName + ' is a man.');
}

/* The Ternary Operator and Switch Statement */

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

let job = 'professor';

switch(job){
    case 'teacher':
    case 'professor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' teaches people how to drive a car.');
        break;
    case 'doctor':
        console.log(firstName + ' is trying to fix people.');
        break;
    default:
        console.log(' doing nothing.');
}


switch(true) {
    case age < 13: 
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    default: 
        console.log(firstName + ' is a man.');

}

/* Truthy and Falsy valuse*/

// falsy values: undefined, null, 0, '', NaN
// truthy falues: NOT falsy values;

let height;
height = 23;
console.log(typeof height);
if(height || height === 0){
    console.log('The variable is defined.');
}else{
    console.log('The variable is not defined.');
}

//Equality operators
if(height == '23'){
    console.log('The == operator does type coercion!');
}

console.log(23 == '23');

let a = null;
console.log(`Value: ${a}, Type: ${typeof a}`);
a = +null;
console.log(`Value: ${a}, Type: ${typeof a}`);

/* Coding challenge 2 */

let mikeScore = [89, 120, 103];
let johnScore = [116, 94, 123];
let marryScore = [97, 134, 105];

let reducer = (accumulator, currentValue) => accumulator + currentValue;
let avg = (score) => score.reduce(reducer) / score.length;

mikeAvgScore = avg(mikeScore);
johnAvgScore = avg(johnScore);
marryAvgScore = avg(marryScore);

let winner = Math.max(mikeAvgScore, johnAvgScore, marryAvgScore);

function nomination(){
    switch(true){
        case mikeAvgScore === winner:
            console.log(`Mike won with the score ${winner}`);
            break;
        case johnAvgScore === winner:
            console.log(`John won with the score ${winner}`);
            break;
        case marryAvgScore === winner:
            console.log(`Marry won with the score ${winner}`);
            break;
    }
}

nomination();
johnAvgScore += 110;
winner = Math.max(mikeAvgScore, johnAvgScore, marryAvgScore);
nomination();


/* Functions */
function yearsUntilRetirement(year, name){
    let age = calculateAge(year);
    let retirement = 65 - age;
    if(retirement > 0){
        console.log(`${name} retires in ${retirement} years`);
    } else {
        console.log(`${name} is already retired`);
    }
    
}

yearsUntilRetirement(1992, 'Maxim');
yearsUntilRetirement(1955 , 'Markus');
yearsUntilRetirement(2000, 'Boris');

/* Function Statement and Expressions */

//Function declaration
function whatDoYouDo1(job, firstName){

}

//Function expression
let whatDoYouDo = function (job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else.'
    }
}

console.log(whatDoYouDo('driver', 'John'));

/* Arrays */


var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names);


//Mutate array data
names[1] = 'Ben';
console.log(names);

names[5] = 'Mary';
console.log(names);

//Different data type
john = ['John', 'Smith', 1990, 'teacher', false];
john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
console.log(john);

console.log(john.indexOf(1990));

let isDesigner = john.indexOf('designer') === -1 ?
    'John is not a designer' : 'John is a designer';
console.log(isDesigner);

/* Coding challenge 3 */
let bills = new Array(124, 48, 268);

let tipCalculator = (bill) => {
    console.log(bill);
    switch (true){
        case bill < 50:
            return bill * 0.2;
        case bill < 200:
            return bill * 0.15;
        case bill >= 200:
            return bill * 0.1;
    }
}

let tips = [];
let totalAmountWithTips = [];

for(i = 0; i < bills.length; i++){
    let tip = tipCalculator(bills[i]);
    tips.push(tip);
    totalAmountWithTips.push(bills[i] + tip);
}

console.log(bills);
console.log(tips);
console.log(totalAmountWithTips);

/* Objects and properties */
 var markus = {
     name: 'Markus',
     surname: 'Smith',
     birthDate: 1990,
     family: ['Mark', 'John', 'Bob', 'Emily'],
     isMarried: false
 };
 console.log(markus);
 console.log(markus.family);
 console.log(markus['name']);
 markus['isMarried'] = true;
 console.log(markus);

 // New Object syntax
 let jane = new Object();
 console.log(jane);

 jane.name = 'Jane';
 jane.birthYear = 1969;
 console.log(jane);

 //Object methods

 markus = {
    name: 'Markus',
    surname: 'Smith',
    birthDate: 1990,
    family: ['Mark', 'John', 'Bob', 'Emily'],
    isMarried: false,
    calcAge: function(){
        this.age = new Date().getFullYear() - this.birthDate;
    }
};
markus.calcAge();
console.log(markus.age);

/* Coding challenge 4 */

mark = {
    name: 'Mark Lebovski', 
    mass: 82,
    height: 1.89,
    calculateBMI: function(){
        return this.bmi = this.mass / (this.height * this.height);
    }
};

john = {
    name: 'John Rembo',
    mass: 81,
    height: 1.89,
    calculateBMI: function(){
        return this.bmi = this.mass / Math.pow(this.height, 2);
    }
};

console.log(mark, john);
if(mark.calculateBMI() == john.calculateBMI()){
    console.log(`${mark.name} and ${john.name} has the same BMI ${mark.bmi}`);
}else if(mark.bmi > john.bmi){
    console.log(`${mark.name} won with BMI ${mark.bmi}`);
}else {
    console.log(`${john.name} won with BMI ${john.bmi}`);
}

/* This keyword */
console.log(stark);
var stark = {
    name: 'John',
    surname: 'Stark',
    birth: 1293,
    isAlive: true,
    doSomething: function(){
        console.log(this);

        function andDosomethingAgain(){
            console.log(this);
        }

        andDosomethingAgain();
    }
}


/* Coding challenge 5*/

console.log('************ Coding challenge 5 ************');

function tipsCalculator(payer){

    let tips = [];
    let paidAbount = [];
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    let avg = (score) => score.reduce(reducer) / score.length;

    for(let i = 0; i < bills.length; i++){

        if(payer.bills[i] > 0 && payer.bills[i] < payer.rates[0].to)
           tips[i] = payer.bills[i] * payer.rates[0].rate;
        else if (payer.bills[i] >= payer.rates[1].from && payer.bills[i] < payer.rates[1].to)
            tips[i] = payer.bills[i] * payer.rates[1].rate;
        else if (payer.bills[i] > payer.rates[2].from)
            tips[i] = payer.bills[i] * payer.rates[2].rate;

        paidAbount[i] = tips[i] + payer.bills[i];
    }

    console.log(tips, paidAbount);
    return {tips, paidAbount, averaverageTips: avg(tips)};
}

let John = {
    name: 'John',
    bills: [124, 48, 268, 180, 42],
    rates: [
        {rate: 0.2, to: 100},
        {rate: 0.1, from: 100, to: 300},
        {rate: .25, from: 300,}
    ]
}

let Mark = {
    name: ' Mark',
    bills: [77, 375, 110, 45],
    rates: [
        {rate: 0.2, to: 50},
        {rate: 0.15, from: 50, to: 200},
        {rate: .1, from: 200}
    ]
}

let johnAvgTip;
let markAvgTip;
console.log(johnAvgTip = tipsCalculator(John));
console.log(markAvgTip = tipsCalculator(Mark));

console.log(johnAvgTip > markAvgTip ? 
    `John is the winner: ${johnAvgTip.averaverageTips}` : `Mark is the winner: ${markAvgTip.averaverageTips}`);

/* Coding challenge 5(ver2) */


let james = {
    name: 'John',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for(let i = 0; i < this.bills.length; i++){
            let percentage;
            let bill = this.bills[i];

            if(bill < 50) percentage = .2;
            else if (bill >= 50 && bill < 200) percentage = .15;
            else if (bill > 200) percentage = .1;

            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

james.calcTips();
console.log(james);