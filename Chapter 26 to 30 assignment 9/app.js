
// Question no 1
// var user = +prompt("Enter a postive integer")
// var round = Math.round(user)
//  console.log(round);
// document.write(round +"<br>")
//  var inputuser =Math.floor(user)
//  console.log(inputuser);
//  document.write(inputuser+"<br>")
//  var less =Math.ceil(user)
//  console.log(less);
//  document.write(less+"<br>")

// // Question no 2
// var user = +prompt("Enter a negative integer")
// var round = Math.round(user)
//  console.log(round);
// document.write(round +"<br>")
//  var inputuser =Math.floor(user)
//  console.log(inputuser);
//  document.write(inputuser+"<br>")
//  var less =Math.ceil(user)
//  console.log(less);
//  document.write(less+"<br>")
// Question no 3
var num = -4
var numabs =Math.abs(num)
 document.write("The absolute value of " + num + " "+numabs +"<br>")

 // Question no 4
 var dice = +prompt("Enter a number")
 var dicenum = Math.random(dice)*2
 var numdice =Math.ceil( Math.random(dice)*7)
 document.write("Random dice value is " +numdice)

//Question no 5

var toss =Math.floor( Math.random()*2)+1;
document.write(toss +"<br>")
if(toss ===2){
document.write("random coin value: Heads");
}
 else {
    document.write("random coin value: Tails" + "<br>");
  }

// Question no 6
var num =Math.floor(Math.random()*100)+1
document.write("Random number between 1 - 100 : "+num +"<br>" )

// Question no 7
var userweight =+prompt("Enter your weight in kilograms")
var wweightpara = parseInt(userweight)
var newweight = parseFloat(userweight)
if(userweight==wweightpara){
    document.write("The weight of the user is " + wweightpara +" Kilogram")
}else{
    document.write("The weight of the user is " +newweight+" Kilograms" +"<br>")
}

//Question no 8
var user =+prompt("Enter a number between 1-10");
var secretNumber = Math.floor(Math.random() * 10) + 1;
if(user===secretNumber){
    alert("Congratulations!")
}else{
    alert("Try again")
}