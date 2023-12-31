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
console.log('Using my function & calc');
/* Q4. Create a function called pow that gets two values and computes for the power value of the two numbers
pow(2, 3) -> 2 * 2 * 2 -> 8

Note: You can not use Math.pow function. You need to write your own implementation of the function.
*/
function pow(num1, multiplyTimes) {
    let product = 0;
    for (let i = 0; i < (multiplyTimes - 1); i++) {
        if (num1 == 1) {
            product = 1;
        } else {
            if (num1 <= 2) {
                product += (num1 * num1);
            } else {
                if (i == 0) {
                    product += (num1 * num1);
                    console.log("First time through the loop, product =" + product + ".")
                } else {
                    product *= num1;
                    console.log("Looping =" + product + " here.")
                }
            }
        }
    }
    console.log("Answer: " + product);

}

    pow(2, 2);
    pow(1, 2);
    pow(1, 8);
    pow(2, 3);
    pow(3, 3);
    pow(9, 5);

    console.log("-----------------------");
    console.log("Using Math.pow to check");
    console.log(Math.pow(2, 2));
    console.log(Math.pow(1, 2));
    console.log(Math.pow(1, 8));
    console.log(Math.pow(2, 3));
    console.log(Math.pow(3, 3));
    console.log(Math.pow(9, 5));
