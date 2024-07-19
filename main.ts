/**************************************************************************
 *                           IF-ELSE STATEMENTS                           *
 **************************************************************************/

// In TypeScript, `if-else statements` allow you to execute certain blocks of code based on a condition.
// If the condition evaluates to true, the code within the `if` block runs; otherwise, the code within the
// `else` block executes.

let weatherCondition: string = "raining";

if (weatherCondition === "raining") {
  console.log("Wear a raincoat"); // Executed if weatherCondition is "raining"
} else {
  console.log("Wear sunglasses"); // Executed if weatherCondition is not "raining"
}
// OUTPUT: "Wear a raincoat" if weatherCondition is "raining"

let pizzaStatus: string = "In process";

if (pizzaStatus === "baked") {
  console.log("Pizza is baked"); // Executed if pizzaStatus is "baked"
} else {
  console.log("Pizza is not baked yet!"); // Executed if pizzaStatus is not "baked"
}
// OUTPUT: "Pizza is not baked yet!" if pizzaStatus is "In process"

/**************************************************************************
 *                           ELSE IF STATEMENTS                           *
 **************************************************************************/

// In TypeScript, `else if` statements allow you to specify additional conditions to test if the initial
// `if` condition is false. They provide a way to check multiple conditions sequentially and execute
// corresponding code blocks.

let temperature = 25; // Example temperature in degrees Celsius

if (temperature < 0) {
  console.log("It's freezing cold."); // Executed if temperature is below 0
} else if (temperature < 10) {
  console.log("It's cold."); // Executed if temperature is between 0 and 9
} else if (temperature < 20) {
  console.log("It's cool."); // Executed if temperature is between 10 and 19
} else if (temperature < 30) {
  console.log("It's warm."); // Executed if temperature is between 20 and 29
} else {
  console.log("It's hot."); // Executed if temperature is 30 or above
}
// OUTPUT: "It's warm." if temperature is 25

// ---------------------------------------------- EXAMPLES ------------------------------------------------------------ //

// EXAMPLE 1: DAY OF THE WEEK

console.log("\nExample 1:");

let dayOfWeek = "Wednesday"; // Example day of the week

if (dayOfWeek === "Monday") {
  console.log("Start of the work week."); // Executed if dayOfWeek is "Monday"
} else if (dayOfWeek === "Wednesday") {
  console.log("Midweek day."); // Executed if dayOfWeek is "Wednesday"
} else if (dayOfWeek === "Friday") {
  console.log("Almost weekend!"); // Executed if dayOfWeek is "Friday"
} else if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
  console.log("It's the weekend!"); // Executed if dayOfWeek is "Saturday" or "Sunday"
} else {
  console.log("Just another weekday."); // Executed if dayOfWeek is none of the specified days
}
// OUTPUT: "Midweek day." if dayOfWeek is "Wednesday"

// **************************************************************************************************************** //

// EXAMPLE 2: AGE CATEGORIES

console.log("\nExample 2:");

let age = 14; // Example age

if (age >= 65) {
  console.log("Senior Citizen"); // Executed if age is 65 or older
} else if (age >= 18) {
  console.log("Adult"); // Executed if age is between 18 and 64
} else if (age >= 13) {
  console.log("Teenager"); // Executed if age is between 13 and 17
} else if (age >= 0) {
  console.log("Child"); // Executed if age is between 0 and 12
} else {
  console.log("Invalid age"); // Executed if age is negative
}
// OUTPUT: "Teenager" if age is 14

// **************************************************************************************************************** //

// EXAMPLE 3: MAKING A MARKSHEET USING IF-ELSE STATEMENTS

console.log("\nExample 3:");

let examScore = 88; // Example exam score

if (examScore >= 90) {
  console.log("Grade: A+");
  console.log("Remarks: Outstanding"); // Executed if examScore is 90 or above
} else if (examScore >= 80) {
  console.log("Grade: A");
  console.log("Remarks: Excellent"); // Executed if examScore is between 80 and 89
} else if (examScore >= 70) {
  console.log("Grade: B");
  console.log("Remarks: Good"); // Executed if examScore is between 70 and 79
} else if (examScore >= 60) {
  console.log("Grade: C");
  console.log("Remarks: Pass"); // Executed if examScore is between 60 and 69
} else if (examScore >= 50) {
  console.log("Grade: D");
  console.log("Remarks: Needs Improvement"); // Executed if examScore is between 50 and 59
} else {
  console.log("Remarks: You are Fail"); // Executed if examScore is below 50
}
// OUTPUT: "Grade: A" and "Remarks: Excellent" if examScore is 88

/**************************************************************************
 *                           TERNARY OPERATORS                            *
 **************************************************************************/

// In TypeScript, the ternary operator is a shorthand for if-else statements, using the syntax condition ? expression1 : expression2.
// It evaluates the condition and returns expression1 if true, or expression2 if false.

console.log("\nTernary Operator Examples:");

// Example 1: Basic Ternary Operation
let isLoggedIn: boolean = false;
let loginMessage = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(loginMessage); // OUTPUT: "Please log in."

// Example 2: Checking Eligibility
let ageForVoting: number = 20;
let votingEligibility = ageForVoting >= 18 ? "Eligible to vote" : "Not eligible to vote";
console.log(votingEligibility); // OUTPUT: "Eligible to vote"

// Example 3: Determining Discount
let purchaseAmount: number = 150;
let discount = purchaseAmount > 100 ? "10% Discount" : "No Discount";
console.log(discount); // OUTPUT: "10% Discount"
