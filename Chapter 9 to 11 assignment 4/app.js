// Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
var city = prompt("Enter city name:");
if (city === "Karachi") {
    console.log("Welcome to city of lights");
}
document.write("<h2>Welcome to city of lights</h2> <br><br>");

// //Write a program to take "gender" as input from user. If the user is male, display "Good Morning Sir".if the user is female, give the message :"Good Morning Ma'am"
var gender = prompt("Enter your gender:");
if (gender === "male") {
    document.write("<h2><center>Good Morning Sir</center></h2> <br><br>");
} else if (gender === "female") {
    document.write("<h2><center>Good Morning Ma'am</center></h2> <br><br>");
}

// //Write a program to take input color of road traffic signal from the user & show the message according to this table:
var signalColor = prompt("Enter traffic signal color (red, yellow, green):");
if (signalColor === "red") {
    document.write("<h2><center>Must Stop</center></h2> <br><br>");
} else if (signalColor === "yellow") {
    document.write("<h2><center>Ready to Move</center></h2> <br><br>");
} else if (signalColor === "green") {
    document.write("<h2><center>Move Now</center></h2> <br><br>");
}

//Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message "Please refill the fuel in your car"
var fuel = prompt("Enter remaining fuel in car (in litres):");
if (fuel < 0.25) {
    document.write("<h2><center>Please refill the fuel in your car</center></h2><br><br>");

}
// //Run this script, & check whether alert message would be displayed or not. Record the outputs.a.
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
//b.
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
//c.
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
//d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
//e.
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
//f.
if ("car" < "cat") {
    alert("car is smaller than cat");
}
//Write a program to take input the marks obtained in three subjects & total marks.Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:
var subject1 = prompt("Enter marks obtained in Subject 1:");
var subject2 = prompt("Enter marks obtained in Subject 2:");
var subject3 = prompt("Enter marks obtained in Subject 3:");
var totalMarks = prompt("Enter total marks:");

var obtainedMarks = (subject1) + (subject2) + (subject3);
var percentage = (obtainedMarks / totalMarks) * 100;
var remarks = "";
document.write("<h2><center>Percentage: " + percentage.toFixed(2) + "%</center></h2><br><br>");

if (percentage >= 80) {
    document.write("<h2><center>Grade: A-one</center></h2><br><br>");
} else if (percentage >= 70) {
    document.write("<h2><center>Grade: A</center></h2><br><br>");
} else if (percentage >= 60) {
    document.write("<h2><center>Grade: B</center></h2><br><br>");
} else if (percentage <= 60) {
    document.write("<h2><center>Fail</center></h2><br><br>");
} if (percentage >= 80) {
    remarks = "Excellent";
} else if (percentage >= 70) {
    remarks = "Good";
} else if (percentage >= 60) {
    remarks = "You need to improve";
} else if (percentage < 60) {
    remarks = "Sorry";
}
document.write("<h2><center>Remarks: " + remarks + "</center></h2><br><br>");

//Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
// a. If user guesses the same number, show "Bingo! Correct answer".
// b. If the guessed number +1 is the secret number, show "Close enough to the correct answer".
var secretNumber = 7;
var userGuess = prompt("Guess the secret number (between 1 and 10):");
if (userGuess === secretNumber) {
    document.write("<h2><center>Bingo! Correct answer</center></h2><br><br>");
}
else if (userGuess == secretNumber + 1 || userGuess == secretNumber - 1) {
    document.write("<h2><center>Close enough to the correct answer</center></h2><br><br>");
}
// Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
var number = prompt("Enter a number to check divisibility by 3:");
if (number % 3 === 0) {
    document.write("<h2><center>The number " + number + " is divisible by 3</center></h2><br><br>");
} else {
    document.write("<h2><center>The number " + number + " is not divisible by 3</center></h2><br><br>");
}

//Write a program that checks whether the given input is an even number or an odd number.
var num = prompt("Enter a number to check if it is even or odd:");
if (num % 2 === 0) {
    document.write("<h2><center>The number " + num + " is an even number</center></h2><br><br>");
}
else {
    document.write("<h2><center>The number " + num + " is an odd number</center></h2><br><br>");
}

//Write a program to take temperature as input and show message based on following criteria:
//a. T > 40 then "It is too hot outside."
//b. T > 30 then "The Weather today is Normal."
//c. T > 20 then "Today’s Weather is cool."
//d. T > 10 then "OMG! Today’s weather is so Cool."
var temperature = prompt("Enter the temperature:");
if (temperature > 40) {
    document.write("<h2><center>It is too hot outside.</center></h2><br><br>");
} else if (temperature > 30) {
    document.write("<h2><center>The Weather today is Normal.</center></h2><br><br>");
} else if (temperature > 20) {
    document.write("<h2><center>Today’s Weather is cool.</center></h2><br><br>");
} else if (temperature > 10) {
    document.write("<h2><center>OMG! Today’s weather is so Cool.</center></h2><br><br>");
}
//Write a program to create a calculator for +, -, *, / & % using if statements. Take the following input: a. First number b. Second number c. Operation (+, -, *, /, %)
//Compute & show the calculated result to user.
var firstNum = prompt("Enter the first number:");
var secondNum = prompt("Enter the second number:");
var operation = prompt("Enter the operation (+, -, *, /, %):");
var result;
if (operation === "+") {
    result = firstNum + secondNum;
    document.write("<h2><center>Result: " + result + "</center></h2><br><br>");
} else if (operation === "-") {
    result = firstNum - secondNum;
    document.write("<h2><center>Result: " + result + "</center></h2><br><br>");
} else if (operation === "*") {
    result = firstNum * secondNum;
    document.write("<h2><center>Result: " + result + "</center></h2><br><br>");
} else if (operation === "/") {
    result = firstNum / secondNum;
    document.write("<h2><center>Result: " + result + "</center></h2><br><br>");
} else if (operation === "%") {
    result = firstNum % secondNum;
    document.write("<h2><center>Result: " + result + "</center></h2><br><br>");
}

