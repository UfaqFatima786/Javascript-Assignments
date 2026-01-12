//Declare and initialize an empty multidimensional array(Array of arrays)
var arr = [[[]]]

//Declare and initialize a multidimensional array representing the following matrix:
var num = [
    [1, 2, 3, 4],
    [4, 5, 6, 7],
    [0, 1, 0, 2]
]
console.log(num)
document.write("<h2>Matrix</h2>");
for (i = 0; i < num.length; i++) {
    document.write(num[i].join(" ") + "<br>");
    console.log(num[i].join(" "));
}


// Question no 3
document.write("<h2>F.W.C</h2>");
for (var i = 1; i < 10; i++) {
    document.write(i + "<br>")
}

//Question no 4
var userNum =+prompt("Enter a number which table you want")|| 5;
var userLen =+prompt("Enter a length of a table")|| 10;

for(i=1; i<=userLen;i++){
    document.write(userNum+ "x" + i +"=  "+(userNum * i)+"<br>" )
}document.write("<h2>Table</h2>");
//Question no 5
var vegetable = ["patato", "onion", "chill", "peas", "tomato", "lady-finger", "cauliflower", "brianjal", "cabbage"];
document.write("<h2>Vegetsbles Name</h2>");
for (i = 0; i < vegetable.length; i++) {
    document.write(
        i + 1 + ") " + vegetable[i] + "<br>"
    )
}

//Question no 6
var num = [1, 3, 2, 5, 4, 6, 8, 7, 9, 11, 10, 13, 12, 15, 14]
document.write("<h2>Counting</h2>");
document.write(
    num.sort(
        function (a, b) { return (a - b) }

    ) + "<br>"
)
document.write("<h2>Reverse</h2>");
document.write(
    num.reverse() + "<br>"
)
document.write("<h2>Even Numbers</h2>");
for (var i = 0; i <= 20; i += 2) {
    document.write(
        i + "<br>"
    )
}
document.write("<h2>Odd Numbers</h2>");
for (var i = 1; i < 20; i += 2) {
    document.write(
        i + "<br>"
    )
}
document.write("<h2>Series</h2>");
for (var i = 2; i < 20; i += 2) {
    document.write(
        i + "k" 
    )
}


//Question no 7
var juice = ["mango", "orange", "kiwi", "pineapple", "apple", "carrort"]
var userjui = prompt("Hello!Which fruits juice you want please enter ")
for (var i = 0; i <= juice.length; i++) {
    if (userjui == juice[i]) {
        alert("Your order is conform");
    }
}

//Question no 8

var number = [25, 35, 55, 65, 45];
var largest = number[0];

for (var i = 0; i < number.length; i++) {
    if (number[i] > largest) {
        largest = number[i];
    }
}

console.log(largest);
//Question no 9
var number =[12,15,18,22,20,65]
var smaller =number[0];
for (var i = 0; i < number.length; i++) {
    if (number[i] < smaller) {
        smaller = number[i];
    }
}
console.log(smaller);
//Question no 10
for(var i=5; i<=100; i+=5){
    document.write(i)
}