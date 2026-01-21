// Question no 1
var firstname =prompt("Enter your first name")
var lastname =prompt("Enter your last name")
var firstChar=firstname.slice(0,1)
var remainingChar= firstname.slice(1)
var titleCase = firstChar .toUpperCase() + remainingChar.toLowerCase()+ " "+lastname

document.write("WelCome " + titleCase);

//Question no 2
var favMob = prompt("Enter your favourite mobilephone with model");
document.write("My favourit mobilephone is " + favMob +"<br>" )
document.write("length of string " +favMob.length)

// Question no 3
var word ="Pakistani"
var firstword= word.indexOf("n")
console.log(firstword);
document.write("String :" + word + "<br>" + "Index of 'n' " + firstword +"<br>" )
 // Question no 4
 var fword = "Hello World"
 var newword = fword.lastIndexOf("l")
 console.log(newword);
 document.write("String :"+ fword +"<br>" + "Index of 'l' " +newword +"<br>")

 //Question no 5
 var word ="Pakistani"
 var midword =word.charAt(3)
 console.log(midword);
 document.write("String :" +word + "<br>" +"Character at index 3 = "+ midword +"<br>")

//Question no 6
var firstname =prompt("Enter your first name");
var lastname =prompt("Enter your last name");
var fullName = firstname.concat(" " , lastname)
document.write("<h2>Welcome "+ fullName +"<br>")

//Question no 7
var sentence ="Hyderabad is the city of Pakistan";
document.write("<h1>Hyderabad</h1> ")
document.write("<h4>"+sentence+"</h4>"+"<br>")
document.write("<h1>Replace sentence</h1>")
var newsent =  sentence.replace("Hyder","Islam")
document.write("<h4>"+newsent+"</h4>"+"<br>")
// Question no 8
var text ="Animals are kind and helpful living beings andt hey make our world beautiful. Some animals live in homes and are called pets, and others live in forests and oceans. We should love animals and care for them and protect them from harm"
document.write("<h1>Animals</h1>")
document.write("<p>"+text+"</p>"+"<br>")
document.write("<h1>Replace sentence</h1>")
var newtext =text.replaceAll("and" ,"&")
document.write("<p>"+newtext+"</p>"+"<br>")
 // Question no 9
var str = "472";
document.write("Value: " + str + "<br>");
document.write("Type: " + typeof str + "<br>");

var num = Number(str);
document.write("Value: " + num + "<br>");
document.write("Type: " + typeof num +"<br>");

//Question no 10
var user =prompt("Enter a word which you like")
var newuser = user.toUpperCase()
document.write(newuser+"<br>")
//Question no 11
var fruitname =prompt("Enter a fruit")
var newfruit =fruitname.slice(0,1)
var remainingChar=fruitname.slice(0)
var titleCase = newfruit.toUpperCase() + remainingChar.toLowerCase()
document.write("My favourite fruit is " +titleCase +"<br>")
// Question no 12
var num = 35.36;

// Convert number to string
var numString = num.toString();

// Remove the dot
var result = numString.replace(".", "");

// Display result
document.write("Number: " + num + "<br>");
document.write("Result: " + result);