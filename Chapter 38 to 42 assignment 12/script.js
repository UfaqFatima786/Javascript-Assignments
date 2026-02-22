//write a custom function power (a,b),to calculate the value of a raised to b.
function power(a,b){
    console.log(a**b);
    return a**b;
}
power(2,3)

//any year is entered through the keyboard, write a function to determine whether the year is a leap year or not.
function leapYear(year){
    if((year%4==0 && year%100!=0) || (year%400==0)){
        console.log(year+" is a leap year");
    }
    else{
        console.log(year+" is not a leap year");
    }
}
leapYear(2020)
leapYear(2021)


//if the lengths of the sides of a triangle are denoted by a,b,c, then area of triangle is given by the formula area = S(S-a)(S-b)(S-c) where S = (a+b+c)/2. Write a function to calculate area of triangle using the formula given above.
function triangleArea(a,b,c){
    var S = (a+b+c)/2;
    var area = Math.sqrt(S*(S-a)*(S-b)*(S-c));
    console.log("Area of triangle is: "+area);
    return area;
}
triangleArea(3,4,5)

//write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction and other are for average and percentage.call thos functions from mainFunction and display result in mainFunction.
function mainFunction(marks1, marks2, marks3){
    var average = calculateAverage(marks1, marks2, marks3);
    var percentage = calculatePercentage(marks1, marks2, marks3);
    console.log("Average: "+average);
    console.log("Percentage: "+percentage+"%");
}
function calculateAverage(marks1, marks2, marks3){
    return (marks1+marks2+marks3)/3;
}
function calculatePercentage(marks1, marks2, marks3){
    return ((marks1+marks2+marks3)/300)*100;
}
mainFunction(85,90,95);

//write a function to remove all vowels from a sentence. Assume that the sentence is not more than 25 characters long.
function removeVowels(sentence){
    var result = sentence.replace(/[aeiouAEIOU]/g, '');
    console.log("Sentence without vowels: "+result);
    return result;
}
removeVowels("kanzul emaan");

//write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. For example, in the sentence “Pleases read this application and give me gratuity” such occurrences are ea, ea, ui.
function countVowelPairs(text){
    var count = 0;
    for(var i=0; i<text.length-1; i++){
        var pair = text[i].toLowerCase() + text[i+1].toLowerCase();
        switch(pair){
            case 'aa':
            case 'ae':
            case 'ai':
            case 'ao':
            case 'au':
            case 'ea':
            case 'ee':
            case 'ei':
            case 'eo':
            case 'eu':
            case 'ia':
            case 'ie':
            case 'ii':
            case 'io':
            case 'iu':
            case 'oa':
            case 'oe':
            case 'oi':
            case 'oo':
            case 'ou':
            case 'ua':
            case 'ue':
            case 'ui':
            case 'uo':
            case 'uu':
                count++;
                break;
        }
    }
    console.log("Number of vowel pairs: "+count);
    return count;
}
countVowelPairs("Pleases read this application and give me gratuity");

//the distance between two cities (in km) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters.
function convertDistance(km){
    console.log("Distance in meters: "+km*1000+" m");
    console.log("Distance in feet: "+km*3280.84+" ft");
    console.log("Distance in inches: "+km*39370.1+" in");
    console.log("Distance in centimeters: "+km*100000+" cm");
}
convertDistance(5);

//write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour.
function calculateOvertimePay(hoursWorked){
    var overtimePay = 0;
    if(hoursWorked > 40){
        var overtimeHours = hoursWorked - 40;
        overtimePay = overtimeHours * 12.00;
    }
    console.log("Overtime Pay: Rs. "+overtimePay);
}
calculateOvertimePay(48);

///a cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.
function calculateCurrencyNotes(amount){
    var hundreds = Math.floor(amount / 100);
    var remaining = amount % 100;
    var fifties = Math.floor(remaining / 50);
    remaining = remaining % 50;
    var tens = Math.floor(remaining / 10);
    console.log("Number of 100 notes: "+hundreds);
    console.log("Number of 50 notes: "+fifties);
    console.log("Number of 10 notes: "+tens);
}
calculateCurrencyNotes(2);

