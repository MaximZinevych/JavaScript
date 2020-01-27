/* Function constructor */

/*
let Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function () {
        console.log(new Date().getFullYear() - yearOfBirth);
    }
};

let john = new Person('John', 1990, 'teacher');
john.calculateAge();

Person.prototype.lastName = 'Smith';

console.log(john.name + ' ' + john.lastName);
*/



/* Object create */

/*
let personProto = {
    calculateAge: function(){
        console.log(new Date().getFullYear() - this.year);
    }
};

let john = Object.create(personProto);
john.name = 'John';
john.year = 1990;

console.log(john);

let jane = Object.create(personProto, {
    name: { value: 'Jane'},
    year: { value: 1969 }
});

console.log(jane);
*/

/* Objects and primitives */

/*
//Primitives
let a = 30;
let b = a;
//Mutation
a += 30;
console.log(a, b);


//Objects
let obj1 = {
    name: 'John',
    age: 23
};
let obj2 = obj1;
obj1.age += 40;
console.log(obj1, obj2);


function change(a, b){
    a = 30;
    b.age = 11;
}

change(a, obj1);
console.log(a, obj1);
*/


/* Passing functions as arguments */

/*
let years = new Array(1992, 1960, 1978, 2011);

function arrayCalc(array, func){
    var resultArray = [];
    for(let i = 0; i < array.length; i++){
        resultArray.push(func(array[i]));
    }

    return resultArray;
}

function func(year){
    return new Date().getFullYear() - year;
}

function isFullAge(age){
    return age >= 18;
}

function maxHeartRate(age){
    return Math.round(206.9 - (0.67 * age));
}

let ages = arrayCalc(years, func);
let fullAges = arrayCalc(ages, isFullAge);
let heartRates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(heartRates);
*/

/* Functions returnning functions */
function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
            console.log(name + ', can you please explain what is UX design is?');
        }
    } else if (job === 'teacher'){
        return function(name){
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function (name){
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

let teacherQuestion = interviewQuestion('teacher');
let designerQuestion = interviewQuestion('designer');

designerQuestion('Markus');
teacherQuestion('Jonnas');  
interviewQuestion('Boxer')('Sultan');

