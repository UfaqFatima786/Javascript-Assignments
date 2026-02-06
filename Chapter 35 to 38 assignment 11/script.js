//Question no 1
function date() {
    var newDate = new Date()
    console.log(newDate)
}
date()
//Question no 2
// var userName =prompt("Enter your name here") || "user";
// var lName = prompt("Enter your last name")
// var fullName=userName+lName
// function greet(fullName){

// console.log("Welcome " +fullName) ;

// }
// greet(userName,lName)

//Question no 3
function sum(a, b) {
    console.log(a + b)
}
sum(10, 5)
// Question no 4
function calculator(num1, num2, operator) {
    if (operator === "+") return num1 + num2;
    if (operator === "-") return num1 - num2;
    if (operator === "*") return num1 * num2;
    if (operator === "/") return num1 / num2;
}

alert(calculator(10, 5, "+"));
//Question no 5
function squares(num) {
    console.log(num * num);

}
squares(4);
// Question no 6
function factorial(n) {
    result = 1
    for (var i = 1; i <= n; i++) {
        result = result * i
    }
    return result;
}
console.log(factorial(10));

// Question no 7
function counting(start, end) {
    var showcount = ""
    for (var i = start; i <= end; i++) {
        showcount += i + "";
    }
    return showcount;
}
document.write(counting(1, 0))
//Question no 8

function calculateHyp(base, perp) {
    function calculateSquare(x) {
        return x ** 2;
    }
    var hypSquare = calculateSquare(base) + calculateSquare(perp)
    return hypSquare
}
console.log(calculateHyp(2, 3));
//Question no 9
function rectangleArea(height, weight) {
    return height * weight;
}
console.log(rectangleArea(2, 2))
