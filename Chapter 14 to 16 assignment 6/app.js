// . Declare an empty array using JS literal notation to store student names in future. 
var studentNames = [];

// . Declare an empty array using JS object notation to store student names in future.
var studentNames = new Array();

// . Declare and initialize a strings array. 
var fruits = ["Apple", "Banana", "Mango"];

// .  Declare and initialize a numbers array. 
var numbers = [10, 20, 30, 40];

// .  Declare and initialize a boolean array. 
var flags = [true, false, true];

// . Declare and initialize a mixed array. 
var mixedArray = ["Ali", 25, true, null];

// 7. Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser like: 
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h3>Qualifications:</h3>");
for (var i = 0; i < qualifications.length; i++) {
  document.write((i + 1) + ") " + qualifications[i] + "<br><br><br>");
}


// 8. Write a program to store 3 student names in an array.Take 
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like:  
var students = ["Ali", "Sara", "Ahmed"];
var scores = [420, 380, 450];
var totalMarks = 500;

for (var i = 0; i < students.length; i++) {
  var percentage = (scores[i] / totalMarks) * 100;
  document.write(
    "Score of " + students[i] + " is " + scores[i] +
    ". Percentage: " + percentage + "%<br>"
  );
}

// 9. Initialize an array with color names. Display the array elements in your browser. 
var colors = ["Red", "Green", "Blue"];
document.write("Initial Colors: " + colors + "<br><br>");

// a) Add color to beginning
var colorStart = prompt("Which color do you want to add at the beginning?");
colors.unshift(colorStart);
document.write("After adding at beginning: " + colors + "<br><br>");

// b) Add color to end
var colorEnd = prompt("Which color do you want to add at the end?");
colors.push(colorEnd);
document.write("After adding at end: " + colors + "<br><br>");

// c) Add two more colors to beginning
colors.unshift("Purple", "Orange");
document.write("After adding two more colors at beginning: " + colors + "<br><br>");

// d) Delete first color
colors.shift();
document.write("After deleting first color: " + colors + "<br><br>");

// e) Delete last color
colors.pop();
document.write("After deleting last color: " + colors + "<br><br>");

// f) Add color at desired index
var addIndex = +prompt("At which index do you want to add a color?");
var addColor = prompt("Enter color name:");
colors.splice(addIndex, 0, addColor);
document.write("After adding color at index " + addIndex + ": " + colors + "<br><br>");

// g) Delete colors from desired index
var delIndex = +prompt("At which index do you want to delete color(s)?");
var delCount = +prompt("How many colors do you want to delete?");
colors.splice(delIndex, delCount);
document.write("After deleting colors: " + colors + "<br><br>");


// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort  method.
var scores = [320, 230, 480, 120];
scores.sort(function(a, b) {
  return a - b;
});
document.write("Sorted Student Scores (Ascending): " + scores);

// 11. write a program to initialize an array with city names Copy 3 array elements from cities array to selectedCities array. 
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(0, 3);
document.write("Cities: " + cities + "<br><br>");
document.write("Selected Cities: " + selectedCities);




//  15. Write a program to store phone manufacturers (Apple,  Samsung, Motorola, Nokia, Sony & Haier) in an array.  Display the following dropdown/select menu in your browser using document.write() method: 

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for (var i = 0; i < manufacturers.length; i++) {
  document.write("<option>" + manufacturers[i] + "</option>");
}

document.write("</select>");
















