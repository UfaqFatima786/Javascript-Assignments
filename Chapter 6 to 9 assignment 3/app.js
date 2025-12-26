alert("ufaq");

// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
document.write("Result:<br>");

var num = 10;
document.write("The value of num is: " + num + "<br>");
document.write("...................................<br>");

document.write("The value of ++num is: " + ++num + "<br>");
document.write("Now the value of num is: " + num + "<br><br>");

document.write("The value of num++ is: " + num++ + "<br>");
document.write("Now the value of num is: " + num + "<br><br>");

document.write("The value of --num is: " + --num + "<br>");
document.write("Now the value of num is: " + num + "<br><br>");

document.write("The value of num-- is: " + num-- + "<br>");
document.write("Now the value of num is: " + num + "<br><br><br>");

// 2. What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1; 
// var result = --a - --b + ++b + b--; 
// Explain the output at each stage: 
// --a; 
// --a - --b; 
// --a - --b + ++b; 
// --a - --b + ++b + b--; 



// Step-by-step explanation:
// --a: a is decremented first, then used. a becomes 1.
// --b: b is decremented first, then used. b becomes 0.
// ++b: b is incremented first, then used. b becomes 1.
// b--: b is used first (value 1), then decremented. b becomes 0.
// So the expression evaluates to: 1 - 0 + 1 + 0 = 2


// var numa = 10
// var numb = 20
// var realnum = (numa + numb)
// document.write("the num1 of numa is "  + numa + "<br>" )
// document.write("the num2 of numb is " + numb + "<br>" )
// document.write("Now the real num of numa and numb is " + realnum + "<br>" )


var a = 2
var b = 1
var num = --a
var nnum = --b
var bnum = ++b
var abnum = b--
document.write("the value of num is " + num + "<br>");
document.write("the value of .num is " + nnum + "<br>");
document.write("the value of bnum is " + bnum + "<br>");
document.write("the value of abnum is " + abnum + "<br>");





