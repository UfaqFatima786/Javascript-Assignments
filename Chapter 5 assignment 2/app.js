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


// 5. Write a script to display multiplication table of any number in your browser. E.g 
var table=5;
var only = table * 10;
document.write( "table of 5 <br>");
document.write( "5 x 1 = 5<br>");
document.write( "5 x 2 = 10<br>");
document.write( "5 x 3 = 15<br>");
document.write( "5 x 4 = 20<br>");
document.write( "5 x 5 = 25<br>");
document.write( "5 x 6 = 30<br>");
document.write( "5 x 7 = 35<br>");
document.write( "5 x 8 = 40<br>");
document.write( "5 x 9 = 45<br>");
document.write( "5 x 10 = 50<br>");




// 7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1 
// b. Price of item 2 
// c. Ordered quantity of item 1 
// d. Ordered Quantity of item 2 
// e. Shipping charges 
// Compute the total cost & show the receipt in your browser.

var item1price = 650;
var item2price = 200;
var quantityitem1 = 3;
var quantityitem2 = 4;
var shippingcharges = 100;
var totalcost = (item1price * quantityitem1) + (item2price * quantityitem2) + shippingcharges;

document.write("<h1>Shopping Cart</h1>");
document.write("Price of 1 item is " + item1price + "<br>");
document.write("Quantity of item 1 is " + quantityitem1 + "<br>");
document.write("Price of 2 item is " + item2price + "<br>");
document.write("Quantity of item 2 is " + quantityitem2 + "<br>");

document.write("Total cost of your order is " + totalcost + "<br><br><br>");



// 8. Store total marks & marks obtained by a student in 2  variables. Compute the percentage & show the result in your browser .
var totalmarks = 1000;
var marks = 900;
var percentage = (marks / totalmarks) * 100;

document.write("<h1>Percentage</h1>");
document.write("Marks obtained = " + marks + "<br>");
document.write("Total marks = " + totalmarks + "<br>");
document.write("Percentage = " + percentage + "<br><br><br>");



// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression. 
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee)

var usd = 10;
var riyal = 25;
var pkr = (usd * 104.80) + (riyal * 28);

document.write("<h1>PKR Currency</h1>");
document.write("Total currency in PKR: " + pkr + "<br><br><br>");


// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
// a. Add 5 
// b. Multiply by 10 
// c. Divide the result by 2 
// Perform all calculations in a single expression 

var num = 5;
var result = (num + 5 * 10) / 2;
document.write("<h1>Simple Result</h1>");
document.write("The result is " + result + "<br><br><br>");



// 11. The Age Calculator:
// Write a script to calculate your age based on your birth year.
// Store your birth year in a variable & 
// show the result in your browser.


var currentyear = 2026;
var birthyear = 2004;
var age = currentyear - birthyear;
document.write("<h1>Age Calculator</h1>");
document.write("Your birth year is " + birthyear + "<br>");
document.write("Your current year is " + currentyear + "<br>");
document.write("Your age is " + age + " .  <br><br><br>");



// 12. The Geometrizer:
// Write a script to calculate the properties of a circle.
// Store the radius in a variable.
// Calculate the circumference & area of circle
// & show the result in your browser.

var radius = 5;
var circumference = 2 * Math.PI * radius;
var area = Math.PI * radius * radius;

document.write("<h1>Geometrizer</h1>");
document.write("Radius of circle is " + radius + "<br>");
document.write("Circumference of circle is " + circumference + "<br>");
document.write("Area of circle is " + area + "<br><br><br>");


