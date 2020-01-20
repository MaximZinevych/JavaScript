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

let johnsGreaterMark = johnBMI >markBMI;

console.log(`John's BMI: ${johnBMI}, Mark's BMI: ${markBMI}`);
console.log(`Jon's BMI is hiher than Mark's? ${johnsGreaterMark}`); 

console.log('Coding challenge 1 ends');