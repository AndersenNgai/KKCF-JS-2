// Equal values
10 == 3 // returns false
5 == 5 // returns true
6 == "6" // returns true
console.log('5 and 5 are equal:', 5 == 5);
console.log('10 and 3 are equal:', 10 == 3);

// Not equal values
10 != 3 // returns true
5 != 5 // returns false
console.log('10 and 3 are not equal:', 10 != 3);
console.log('5 and 5 are not equal:', 5 != 5);

// Less than
10 < 3 // returns false
5 < 5 // returns false
4 < 5 // returns true
console.log('10 is less than 3:', 10 < 3);
console.log('5 is less than 5:', 5 < 5);
console.log('4 is less than 5:', 4 < 5);

// Greater than
10 > 3 // returns true
5 > 5 // returns false
4 > 5 // returns false
console.log('10 is greater than 3:', 10 > 3);
console.log('5 is greater than 5:', 5 > 5);
console.log('4 is greater than 5:', 4 > 5);

// Less than or Equal values
10 <= 3 // returns false
5 <= 5 // returns true
4 <= 5 // returns true
console.log('10 is less than or equal to 3:', 10 <= 3);
console.log('5 is less than or equal to 5:', 5 <= 5);
console.log('4 is less than or equal to 5:', 4 <= 5);

// Greater than or Equal values
10 >= 3 // returns true
5 >= 5 // returns true
4 >= 5 // returns false
console.log('10 is greater than or equal to 3:', 10 >= 3);
console.log('5 is greater than or equal to 5:', 5 >= 5);
console.log('4 is greater than or equal to 5:', 4 >= 5);

// Equal values and type
10 === 3 // returns false
5 === 5 // returns true
6 === "6" // returns false
console.log('5 and 5 are equal and of same type:', 5 === 5);
console.log('10 and 3 are equal and of same type:', 10 === 3);
console.log('6 and "6" are equal and of same type:', 6 === "6");

// Not equal values or type
10 !== 3 // returns true
5 !== 5 // returns false
6 !== "6" // returns true
console.log('10 and 3 are not equal or not of same type:', 10 !== 3);
console.log('5 and 5 are not equal or not of same type:', 5 !== 5);
console.log('6 and "6" are not equal or not of same type:', 6 !== "6");

// AND operator 
let x = 4;
let y = 8;
let z = 12;

x < 5 && y > 5; // returns true because both conditions are true
x > 5 && z > 10; // returns false because x > 5 is false
y > 10 && z > 10; // returns false because y > 10 is false
console.log('x < 5 and y > 5:', x < 5 && y > 5);
console.log('x > 5 and z > 10:', x > 5 && z > 10);
console.log('y > 10 and z > 10:', y > 10 && z > 10);

// OR operator
let a = 3;
let b = 6;
let c = 9;

a > 2 || b < 5; // returns true because a > 2 is true
a < 2 || b < 5; // returns false because both conditions are false
b > 5 || c < 8; // returns true because b > 5 is true
console.log('a > 2 or b < 5:', a > 2 || b < 5);
console.log('a < 2 or b < 5:', a < 2 || b < 5);
console.log('b > 5 or c < 8:', b > 5 || c < 8);

// if statement 
let age = 25;
if (age >= 18) {
    console.log("You can vote!");
}

// if else 
let number = 2
if(number > 0){
    console.log("number is positive")
}
else {
    console.log("number is not greater than 0")
}

// if else if else
let num = 2
if(num > 0){
    console.log("number is positive")
}
else if(num == 0){
    console.log("number is equal to 0")
}
else {
    console.log("number is negative")
}

// Write a conditional statement to find the largest of three numbers
// Make 3 variables that prompts the user for a number
// Use conditionals and comparisons to find which of the 3 is largest 
// console.log the result
// Result: “x is the largest number”

let d = 3255;
let e = 9;
let f = prompt("Enter a number:");
console.log("d: ", d, ", e: ", e, ", f (your number): ", f)
if (d > e){
    if (d > f){console.log("d at 3255 is the biggest")}
    else {console.log("Your number is highest")}
}
else {
    if (e > f){console.log("e at 9 is the biggest")}
    else {console.log("Your number is biggest")}
}