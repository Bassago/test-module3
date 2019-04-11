// 1. Write a program to display the city name if the string begins with "Los" or "New" otherwise return "The city name does not begin with Los or New". 

let theCity = "Los";
console.log(theCity);

let cityName = "New";
console.log(cityName);

console.log(("The city name does not begin with " + (theCity) + " or " + (cityName)));

// 2. Write a program to compute the sum of three elements of a given array of integers. The length of the array must be 3.  
// * **Example**
// * [5, 10, 15] ➞ 30

let five = 5;
let ten = 10;
let fifteen = 15;

console.log(five + ten + fifteen);

// 3. Given two strings, firstName and lastName, return a single string in the format "last, first".
// * **Examples**
// * "John", "Doe" ➞ "Doe, John"
// * "Mary", "Jane" ➞ "Jane, Mary"


let firstName = "Jhon ";
let lastName = "Doe ";

console.log(firstName  + lastName);
console.log(lastName + firstName);

// let reversed = firstName.reversed();
// console.log('reversed:', reversed);


// 4. Write a program that takes an integer and returns true if it's divisible by 100, otherwise return false.
// * **Examples**
// * 1 ➞ false
// * 1000 ➞ true
// * 100 ➞ true


let one = 1;
let oneHundred = 100;
let oneThousand = 1000;

console.log(one == oneHundred);
console.log(one < oneThousand);
console.log(oneThousand > oneHundred);


// 5. Write a program that adds a string ending to each item in an array.
// * **Examples & Expected output**
// * ["clever", "meek", "hurried", "nice"], "ly" ➞ ["cleverly", "meekly", "hurriedly", "nicely"]
// * ["new", "pander", "scoop"], "er" ➞ ["newer", "panderer", "scooper"]
// * ["bend", "sharpen", "mean"], "ing" ➞ ["bending", "sharpening", "meaning"]

let examples = ["clever", "meek", "hurried", "nice"];
let Expected = ["cleverly", "meekly", "hurriedly", "nicely"];

console.log(examples.toString);
