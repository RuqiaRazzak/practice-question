//  Q1. Write a JavaScript program that asks the user for their age and then 
// displays a message indicating whether they are eligible to vote (18 or older)?

// let age = prompt("Enter your age:");
// if (age >= 18) {
//     document.write("Congratulations!!</br>You are eligible to vote.");
// } else {
//     document.write("Sorry!!</br>You are not eligible to vote.");
// }


// Q2. Use a conditional statement to determine whether a number is positive, negative, or zero?

// let number = prompt("Enter a number:");
// if (number > 0) {
//     document.write("The number is positive.");
// } else if (number < 0) {
//     document.write("The number is negative.");
// } else {
//     document.write("The number is zero.");
// }


//  Q3. Write a JavaScript program that asks the user for their favorite color and 
//  then displays a message indicating whether they like a primary color (red, blue, or yellow, green)?


// let color = prompt("What is your favorite color?");
// if (color === "red" || color === "blue" || color === "yellow" || color === "green") {
//     document.write("WOW!!</br>You like a primary color.");
// } else {
//   document.write("GREAT!!</br> You don't just like a primary color.");
// }


// Q4. Use logical operators to determine whether a number is between 10 and 20 (use logical operator)?


// let num = prompt("Enter a number:");
// if (num >= 10 && num <= 20) {
//   document.write("The number is between 10 and 20.");
// } else {
//    document.write("The number is not between 10 and 20.");
// }



//  Q5. Write a JavaScript program that asks the user for their grade (A, B, C, D, or F) and then 
//  displays a message indicating whether they passed or failed?



// let grade = prompt("Enter your grade (A, B, C, D, or F):");
// if (grade === "A" || grade === "B" || grade === "C" || grade === "a" || grade === "b" || grade === "c") {
//     document.write("Congratulations!!</br> You passed.");
// } else if (grade === "D" || grade === "F"|| grade === "d"|| grade === "f") {
//     document.write("Sorry!!</br> You failed.");
// } else {
//     document.write("Invalid grade.");
// }


//  Q6. Write a JavaScript program that asks the user for their age and gender, and then 
//  displays a message indicating whether they are eligible to serve in the military (18-30 years old, male)?

// let userAge = prompt("Enter your age:");
// let gender = prompt("Enter your gender (male/female):");

// if (userAge >= 18 && userAge <= 30 && gender === "male") {
//     document.write("Congratulations!!</br> You are eligible to service in the military.");
// } else {
// document.write("Sorry!!</br> You are not eligible to service in the military.");
// }


// Q7. Use logical operators to determine whether a number is even or odd?

// let number =prompt("enter number")
// if(number%2 == 0){
//  document.write("Even number");
// }
// else {
//  document.write("Odd number");
// }

// Q8. Use a conditional statement to determine whether a number is a multiple of 3?

let multiple = prompt("Enter a number:");
if (multiple % 3 === 0) {
    document.write("This number is a multiple of 3.");
} else {
    document.write("This number is not a multiple of 3.");
}
