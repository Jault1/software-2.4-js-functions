// //Built-in functions
// console.log("Hello World");

// let arr1 = ["John", "Paul", "George", "Ringo"];
// console.log(arr1.toString());

// console.log(Math.sqrt(121));

// //User-defined functions
// function multiplyNumbers(a, b){
//     // console.log(a * b);
//     return (a * b);
// }

// console.log(multiplyNumbers(30, 123));

// let x = 9;
// let y = 7;
// let product = multiplyNumbers(x, y);
// console.log(`The result of ${x} multiplied by ${y} is ${product}`);

// //Object methods
// const pet = {
//     name: "Cody",
//     species: "Dog",
//     greet: function(){
//         console.log(`Hi, my name is ${this.name}!`);
//     },
//     eat: function(food){
//         console.log(`Thank you! I love eating ${food}`);
//     }
// }

// pet.greet();
// pet.eat("beef");









// Q1. Create a function called fizzBuzz that would print the result based on the following conditions:

// If the number is divisible by 3, print 'Fizz'.
// If the number is divisible by 5, print 'Buzz'.
// If the number is divisible by 3 AND 5, print 'FizzBuzz'.
// If the number is not divisible by 3 or 5, print 'Pop'.

function fizzBuzz(num1) {
    if ((num1 % 3 == 0) && (num1 % 5 == 0)) {
        console.log("FizzBuzz")
    } else if (num1 % 3 == 0) {
        console.log("Fizz")
    } else if (num1 % 5 == 0) {
        console.log("Buzz")
    } else if ((num1 % 3 != 0) && (num1 % 5 != 0)) {
        console.log("Pop")
    } else {
        console.log("None of the above")
    }
}

//Use the following test scenarios:
fizzBuzz(49); //Pop
fizzBuzz(55); //Buzz
fizzBuzz(120); //FizzBuzz
fizzBuzz(9999); //Fizz


/* Q2. Create a function called averager that gets the average of an array. */
const prices = [12.99, 17.75, 88.12, 111.11, 77.09, 53.45];

function averager(myArray) {
    let sum = 0;
    for (let i = 0; i < myArray.length; i++) {
        sum += myArray[i];
    }
    return Math.round(sum / myArray.length);
}

let result = averager(prices);
console.log(result);


// Q3. Create functions that would convert temperature from Celsius to Fahrenheit and Kelvin. Round the result to two decimal places. 
console.log('==================');

function celToFah(x) {
    let valNum = parseFloat(x);
    valNum *= 1.8;
    valNum += 32;
    console.log(valNum);
}

function celToKel(x) {
    let valNum = parseFloat(x);
    (valNum += 273.15);
    console.log(valNum);
}

celToFah(37.5);
celToFah(-40);
celToFah(0);
celToFah(100);
celToKel(173.13);
celToKel(-13);


console.log('==================');
/* Q4. Create a function called pow that gets two values and computes for the power value of the two numbers
pow(2, 3) -> 2 * 2 * 2 -> 8

Note: You can not use Math.pow function. You need to write your own implementation of the function.
*/
function pow(num1, num2) {
    let product = 0;
    for (let i = 1; i < num2; i++) {
       product += num1 * num1;
        console.log('Looping')
    }
    console.log(product);

}

pow(2, 2);
pow(1,2)
pow(1,8)
pow(2,3)
