// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

document.write("sum of 3 and 5 is 8<br>");

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

document.write("subtraction of 3 and 5 is -2<br>");
document.write("multiplication of 3 and 5 is 15<br>");
document.write("division of 3 and 5 is 0.6<br>");
document.write("modulus of 3 and 5 is 3<br><br><br>");


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
var num;


// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
var num = ("2");
document.write("Value after variable declaration is " + num + "<br>");


// c. Initialize the variable with some number.
var num = 4;

// d. Show the value of variable in your browser like “Initial value: 5”.
var num = 5;
document.write("Initial value is: " + num +"<br>");
// e. Increment the variable.

var num = 5;
num++;
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
document.write("Value after increment is: " + num + "<br>");

// g. Add 7 to the variable.
num = num + 7;
// h. Show the value of variable in your browser like “Value after addition is: 13”.
document.write("Value after addition is: " + num + "<br>");
// i. Decrement the variable.
num--;

// j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.write("Value after decrement is: " + num + "<br>");

// k. Show the remainder after dividing the variable’s value by 3. i.e: l/ Output : “The remainder is : 0”..
document.write("The remainder is : " + (num % 3) + "<br><br><br>");



// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output
var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR.<br><br><br>");