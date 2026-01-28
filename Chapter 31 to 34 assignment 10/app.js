// Question no 1
var date = new Date ()
document.write(date +"<br>")

//Question no 2
var date = new Date()
var newdate =date.toString()
var month =newdate.slice(4,7)
console.log(month);

if(month==="Jan"){
    document.write(month+"uray" +"<br>")
}else(
    console.log
    (month)
)
// Question no 3
var date = new Date()
var day = date.toString()
var sun = day.slice(0,3)
document.write("Today is " + sun +"day"+"<br>");
// Question no 4
var date = new Date()
var day = date.toString();
var newday = day.slice(0,3)
console.log(newday);

if(newday == "Sun"){
    alert("It's Fun Day")
}else if (day == "Sat"){
      alert("It's Fun Day")
}else(
    document.write("Its Working day"+"<br>")
)
// Question no 5
var date = new Date()
if(date <= 15){
    alert("First Fifteen days of the month")
}else(
    alert("Last Fifteen days of the month ")
)
//Question no 6
var date = new Date ()
document.write(date +"<br>")
var militime = date.getTime()
var newdate = date.getDate()
console.log(newdate);

document.write(newdate+militime+"<br>")
//Question no 7 
var date = new Date ()
var hour = date.getHours()
if(hour=="a.m"){
    alert("Its a.m")
}else(
    alert("Its p.m")
)
//Question no 8
var date = new Date ("12-31-25")
console.log(date)
// Question no 9
var date = new Date()
var today=date.getTime()
var ramadan = new Date("2 18 26")
var firstRamadan =ramadan.getTime()
var milli=firstRamadan-today
var thisramadan =Math.round(milli/(1000*60*60*24))
console.log(thisramadan);

document.write(thisramadan+"days have passed since 1st Ramadan ,2026"+"<br>")
//Question no 12
var currentDate = new Date();
document.write("Current date: " + currentDate + "<br>");

var hours = currentDate.getHours();

// subtract 1 hour
currentDate.setHours(hours - 1);

document.write("1 hour ago, it was: " + currentDate);
// Question no 13
var currentDate = new Date();
alert("Current date: " + currentDate);

currentDate.setFullYear(currentDate.getFullYear() - 100);

alert("100 years back, it was: " + currentDate);
//Question no 14
var age = prompt("Enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;

document.write("Your age is " + age + "<br>");
document.write("Your birth year is " + birthYear);

//Question no 15
var customerName = "Iqra Fareed";
var units = 410;
var chargesPerUnit = 16;
var latePaymentSurcharge = 350;

var now = new Date();
var monthNames = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

var netAmount = units * chargesPerUnit;
var grossAmount = netAmount + latePaymentSurcharge;

document.write("<h2>K-Electric Bill</h2>");
document.write("Customer Name: " + customerName + "<br>");
document.write("Current Month: " + monthNames[now.getMonth()] + "<br>");
document.write("Number of Units: " + units + "<br>");
document.write("Charges per Unit: " + chargesPerUnit.toFixed(2) + "<br><br>");

document.write("Net Amount Payable (within Due Date): " + netAmount.toFixed(2) + "<br>");
document.write("Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "<br>");
document.write("Gross Amount Payable (after Due Date): " + grossAmount.toFixed(2));