
// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122). 
var number = prompt("Enter a number")
if (number > 65 && number < 100) {
    console.log("UpperCase");
}
else if (number > 92 && number < 122) {
    console.log("LowerCase")
}
else {
    console.log("Enter a Letter")
}

// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal. 
var num1 = +prompt("enter a first number")
var num2 = +prompt("enter a second number")
if (num1 > num2) {
    document.write("larger num is " + num1 + "<br>")

} else if (num1 < num2) {
    document.write("larger num is " + num2 + "<br>")

}
else (
    document.write("both Number are equal " + "<br>")
)

// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.
var num = +prompt("Enter a Number")
if (num > 0) {
    document.write("The given number is Positive" + "<br>")
}
else if (num < 0) {
    document.write("The given number is negitive" + "<br>")
}
else (

    document.write("The given number is equal to zero " + "<br>"));
//  4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

var character = prompt("Enter a character")
var vowel = "a,e,i,o,u";
if (character == vowel) {
    console.log("True")

}
else {
    console.log("False")
};


// 5. Write a program that 
// a. Store correct password in a JS variable. 
// b.  Asks user to enter his/her password 
// c.  Validate the two passwords: 
// i. 
// Check if user has entered password. If not, then 
// give message “ Please enter your password” 
// ii. 
// Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise.

var password = +prompt("Enter the password")
var correctPassword = "Saylani123"
if (password == correctPassword) {
    alert("Correct Password..!")
}
else if (password != correctPassword) {
    alert("Incorrect Password...!")
}
else (
    alert("Enter a password..")
)

// 6. This if/else statement does not work. Try to fix it: 
// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
// greeting = "Good day"; 
// else 
// greeting = "Good evening"; 
// } 

var clinet = +prompt("Enter a time")
var greeting;
var hour = 13
if (hour < 18) {
    greeting = "Good Morning"
}
else {
    greeting = "Good Evening"
}
console.log(greeting)

// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements

var time = +prompt("Enter a time in 24hour(format (0–23))");
if (time >= 0 && time < 12) {
    alert("Good Morning")
}
else if (time >= 12 && time < 16) {
    alert("Good Afternoon")
}
else if (time >= 4 && time < 19) {
    alert("Good Evening")
}
else if (time >= 7 && time < 24) {
    alert("Good evening")
}
else {
    alert("Invalid Time");
}