//chapter no 1...

//task no 1:
alert("Welcome to my website");
//task no 2:
alert("Error! Please enter a valid password.");
//task no 3:
alert("Welcome to JS Land...\nHappy Coding!");
//task no 5:
var a = "Hello...I can run JS through my web browser's console "
console.log(a)
//chapter no 2...

//task no 1:
var username;
//task no 2:
var myName = "Full Name";
//task no 3:
var message = "Hello World";
alert(message);
//task no 4:
var Name = "Jhone Doe";
var age = "15 years old";
var Message = "Certified Mobile Application Development";
alert(Name);
alert(age);
alert(Message);
//task no 5:
alert("PIZZA\nPIZZ\nPIZ\nPI\nP");
//task no 6:
var email = "iqraquyyumiqra@gmail.com";
alert("My email address is iqraquyyumiqra@gmail.com");
//task no 7:
var Book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book A smarter\nway to learn JavaScript");
//task no 8:
var a = "Yah! I can write HTML content through JavaScript";
document.write(a);
//task no 9:
var a = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(a);
//chapter no 3...

//task no 1:
var age = "I am 20 years old";
alert(age);
//task no 2:
var a = "14 times";
alert("You have visited this site 14 times");
//task no 3:
var birthYear = "2000";
document.write("My birth year is 2000 <br> Data type of my declared variable is number");
//task no 4:
var visitorName = "John Doe";
var Producttitle = "T-shirt";
var Quantity = 5;
document.write("<b>John Doe</b> ordered <b>5 T-shirt</b>(s) on XYZ clothing store");

//chapter no 4...

//task no 1:
var a = 2;
var b = 2;
var c = 3;
document.write(a,b,c);
//task no 2:
//legal:
var aliMughal;
var iqraQuyyum;
var $;
var iqra_12;
var iqra$_Quyyum;
//illegal:
var Iqraquuyum;
var productcost;
var Nameofband;
var SuperHighway;
var Super23;
//task no 3:
document.write("<h1>Rules for naming JS variables</h1>"+"<br"+"<br>"+"<br>");
document.write("Variable names can only contain , numbers,$ and _ . For example:$my_1st variable"+"<br>");
document.write("Variable must begin with a letter, $ or_ . For example : $name, _name or name"+"<br>");
document.write("Variable name are case sensitive"+"<br>");
document.write("Variable names should not be JS keywords");
//chapter no 5:

//task no 1:
var a = 8; 
var b = 5;
var c = a+b;
document.write("Sum of 8 and 5 is 13");
//task no:2
//for subtraction:
var a = 8; 
var b = 5;
var c = a-b;
document.write("Difference of 8 and 5 is 3");
//for multipication:
var a = 8; 
var b = 5;
var c = a*b;
document.write("Product of 8 and 5 is 40");
//for division:
var a = 8;
var b = 5;
var c = a/b;
document.write("Division of 8 and 5 is 1.6");
//for modulus:
var a = 8;
var b = 5;
var c = a%b;
document.write("Modulus of 8 and 5 is 3");
//task no 3:
var a = "Value after variable declaration is:??";
document.write("Value after variable declaration is undefined"+"<br>");
var a = 4;
document.write("Initial value:5"+"<br>");
var a = a++;
document.write("Value after increment is:5"+"<br>");
var a = a+7;
document.write("Value after addition is:11"+"<br>");
var a = a--;
document.write("Value after decrement is:3"+"<br>");
var a = a/3;
document.write("The remainder is:1");
//task no 4:
var priceofticket = 600;
var Total = 600*5;
document.write("Total cost to buy 5 tickets to a movie is 3000PKR");
//task no 5:
document.write("<h1>Table of 5</h1>");
for( var i=1 ; i<=10 ; i++){
    document.write("5"+"x"+ i+"="+5*i+"<br>");
}
//task no 6:
var celsius = "25&#8451";
var ConvertFehrenheit = ("&#8457"-32)*5/9;
document.write("25&#8451 is 77&#8457"+"<br>");
var fehrenheit = "77&#8457";
var ConvertCelsius = ("&#8451*9/5")+32;
document.write("70&#8457 is 21.11111111111111&#8451");
//task no 7:
document.write("<h1>Shopping Cart</h1>"+"<br>"+"<br>");
var p1 = 650;
document.write("Price of item 1 is 650"+"<br>");
var q1 = 3;
document.write("Quantity of item 1 is 3"+"<br>");
var p2 = 100;
document.write("Price of item 2 is 100"+"<br>");
var q2 =7;
document.write("Quantity of item 2 is 7"+"<br>");
var shp = 100;
document.write("Shipping charges 100"+"<br>"+"<br>");
var Total = (p1*q1+p2*q2)+shp;
document.write("Total cost of your order is 2750");
//task no 8:
document.write("<h1>Marks Sheet</h1>"+"<br>"+"<br>")
var Totalmarks = 500;
document.write("Total marks: 500"+"<br>");
var marksobtained = 430;
document.write("Marks obtained: 430"+"<br>");
var percentage = 430/500*100;
document.write("percentage: 86%");
//task no 9:
document.write("<h1>Currency in PKR</h1>"+"<br>"+"<br>");
var usDollar1 = 104.80;
var usDollar10 = 10*104.80;
var a = 1048;
var saudiriyal1 = 28;
var saudiriyal25 = 25*28;
var b = 700;
var Totalcurrency = a+b;
document.write("Total Currency in PKR: 1748");
//task no 10:
var a = 4;
var b = a+5;
var c = a*10;
var d = a/2;
document.write(a,b,c,d);
//task no 11:
document.write("<h1>Age Calculator</h1>"+"<br>"+"<br>");
var currentYear = 2020;
document.write("Current Year: 2020"+"<br>");
var birthYear = 2000;
document.write("Birth Year: 2000"+"<br>");
var age = currentYear - birthYear;
document.write("Your Age is: 20");
//task no 12:
document.write("<h1>The Geometrizer</h1>"+"<br>"+"<br>");
var radius = 24;
document.write("Radius of a circle: 24"+"<br>");
var circumference = 2*3.142*24;
document.write("The circumference is: 150.816"+"<br>");
var area = 3.142*24^2;
document.write("The area is: 1809.792");
//task no 13:
document.write("<h1>The Lifetime Supply Calculator</h1>"+"<br>"+"<br>");
var FavouriteSnack = "Lays";
document.write("Favourite Snack: Lays"+"<br>");
var Currentage = 20;
document.write("Current age: 20"+"<br>");
var EstimatedMaximum = 65;
document.write("Estimated Maximum age: 65"+"<br>");
var Amount = 5;
document.write("Amount of snack per day: 5"+"<br>");
var Total = 70 - 20 * 5;
document.write("You will need 225 Lays to last you until the ripe old age of 65");
//chapter no 6-9;

//task no 1:
document.write("Results:"+"<br>");
var a = 4;
document.write("The value of a is: 4"+"<br>");
document.write("......................................"+"<br>"+"<br>");
var a = ++a;
document.write("The value of ++a is: 5"+"<br>");
document.write("Now the value of a is: 5"+"<br>"+"<br>"+"<br>");
var a = a++;
document.write("The value of a++ is: 4"+"<br>");
document.write("Now the value of a is: 5"+"<br>"+"<br>"+"<br>");
var a = --a;
document.write("The value of --a is: 4"+"<br>");
document.write("Now the value of a is: 3"+"<br>"+"<br>"+"<br>");
var a = a--;
document.write("The value of a-- is: 4"+"<br>");
document.write("Now the value of a is: 4");
//task no 2:
var a = 2 ,b = 1;
document.write("a is ??"+"<br>");
document.write("b is ??"+"<br>");
var result = --a - --b + ++b + b--;
document.write("result is ??");
//part a:
var a = 2;
var s = --a;
//output is 1.
//part b:
var a = 2;
var b = 3;
var t = --a - --b;
//output is -1.
//part c:
var a = 2;
var b = 3;
var u = --a - --b + ++b;
//output is 2.
//part d:
var a = 2;
var b = 3;
var v = --a - --b + ++b + b--;
//output is 5.
//task no 3:
var a = prompt("Enter your name");
alert("welcome")
//chapter no 9-11...

//task no 1:
var a = prompt("Enter your city name");
if(a == "Karachi"){
    alert("Welcome to city of lights");
}
//task no 2:
var gender = prompt("Enter your gender")
if(gender === "male"){
    alert("Good Morning Sir")
}
else if(gender === "female"){
    alert("Good Morning Ma'am")
}
//task no 3:
var signals = prompt("Enter the traffic signal colour");
if(signals == "Red"){
    alert("Must Stop")
}
else if(signals == "Yellow"){
   alert("Ready to move")
}
else{
    alert("Move now")
}
//task no 4:
var fuel = prompt("Enter your remaining fuel");
if(fuel<"0.25litres"){
    alert("Please refill the fuel in your car")
}
//task no 5:
//part a:
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
//part b:
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
//output is given condition for variable a is true
//part c:
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
//output is condition 2 is true
//output is condition 4 is true
//part d:
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
//output is The cost equals
//part e:
if (true){
alert("True");
}
if (false){
alert("False");
}
//output is True
//part f:
if("car" < "cat"){
alert("car is smaller than cat");
}
//output is car is smaller than cat
//task no 6:
var marksobtained = prompt("Enter your obtained marks");
var Totalmarks = prompt("Enter your total marks");
var percentage = prompt("Enter your percentage");
if(percentage>=80 && percentage<=100){
    alert("A+")
}
else if(percentage>=70 && percentage<=80){
   alert("A")
}
else if
(percentage>=60 && percentage<=70){
    alert("B")
}
else if
(percentage>=50 && percentage<=80){
    alert("C")
}
else if
(percentage>=40 && percentage<=80){
    alert("D")
}
else if
(percentage>=33 && percentage<=40){
    alert("E")
}
else if
(percentage>=0 && percentage<=33){
    alert("F")
}
else{
    alert("You didn't write correct percentage");
}
document.write("<h1>Marks Sheet</h1>"+"<br>"+"<br>");
document.write("Total marks: 300"+"<br>");
document.write("Marks obtained: 219"+"<br>");
document.write("Percentage: 73%"+"<br>");
document.write("Grade: B"+"<br>");
document.write("Remarks: You need to improve");
//task no 7:
var a = 10;
var c = 9; 
var b = prompt("Guess the secret number");
if(b==a){
    alert("Bingo! Correct answer");
}
else if(b==c){
    alert("Close enough to the correct answer")
}
//task no 9:
var x = prompt("Enter a number");
for( x =2; x<=100; x=x+2){
    alert("This number is even");
}
for (x=1; x<=100; x=x+2){
    alert("This number is odd");
}
//task no 10:
var T = prompt("Enter the temperature");
if(T>40){
    alert("It is too hot outside.")
}
else if(T>30){
    alert("The Weather today is Normal.")
}
else if(T>20){
    alert("Today's Weather is cool.")
}
else if(T>10){
    alert("OMG!Today's Weather is soo cool.")
}
//task no 11:
var a = +prompt("Enter your first number");
var b = prompt("Enter your operator");
var c = +prompt("Enter your second number");
if(b == '+'){
    document.write(a+c);
}
else if(b == '-'){
    document.write(a-c);
}
else if(b == '*'){
    document.write(a*c);
}
else if(b == "/"){
    document.write(a/c);
}
//chapter no 12-13...

//task no 3:
var a = +prompt("Enter a number");
if("a == +"){
    alert("The number is positive");
}
else if("a == -"){
    alert("The number is negative");
}
else if("a == 0"){
    alert("The number is zero");
}
//task no 2:
var a = prompt("Enter your first integer");
var b = prompt("Enter your second integer");
if(a>b){
    alert("The first integer is larger than second integer")
}
else if (a==b){
    alert("Two integers are equal")
}
//task no 4:
var vowels = "aeiou";
var a = prompt("Enter a character");
if(a==vowels){
    alert("True")
}
else{
    alert("False")
}
//task no 5:
var password = "@iqra";
var a = prompt("Enter your password");
if(a==password){
    alert("Correct!")
}
else{
    alert("Incorrect password")
}
//task no 6:
var greeting;
var a = prompt("Enter the greeting");
var hour = 20;
if (hour < 20){
    alert = ("Good day");
} 
else{
    alert("Good evening");
}
//chapter no 14-16...

//task no 1:
var arr=[]
//task no 2:
var arr=new Arr =[]
//task no 3:
var strings = ["Ali","Maham","Iqra","Ibad","Fabiha"]
//task no 4:
var numbers = [43 , 76 , 87 , 765 , 772 , 45]
//task no 5:
var boolean = ["True","Flase"]
//task no 6:
var mixed = ["Maham", 6565 , "Ali" , 34 , "Iqra" , "pakistan"]
//task no 7:
var education = ["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil.", "PhD"]
document.write("Qualifications:"+"<br>"+"<br>");
document.write("1)SSC"+"<br>");
document.write("2)HSC"+"<br>");
document.write("3)BCS"+"<br>");
document.write("4)BS"+"<br>");
document.write("5)BCOM"+"<br>");
document.write("6)MS"+"<br>");
document.write("7)M.phil."+"<br>");
document.write("8)phD");
//task no 8:
var studentsName = ["Ali","Shayan","Ibad"]
var obtainedmarks = [340,430,230];
var TotalMarks = 500;
var percentage = obtainedmarks / Totalmarks*100;
document.write("Score of Ali is 340.Percentage:64%"+"<br>");
document.write("Score of Shayan is 430.Percentage:86%"+"<br>");
document.write("Score of Ibad is 230.Percentage:46%");
//task no 10:
var scores = [320,543,433,120]
document.write("Scores of Students: 320,543,433,120"+"<br>");
var orderedscore = [120,320,433,543]
document.write("Ordered Scores of Students: 120,320,433,543");
//task no 11:
var cities = ["Karachi","Lahore","Islamabad","Peshawar"]
document.write("cities list:"+"<br>");
document.write("Karachi,Lahore,Islamabad,Peshawar"+"<br>"+"<br>");
document.write("Selected cities list:"+"<br>")
var copystudents = cities.slice(1,4)
document.write(copystudents); 
//task no 12:
var arr = ["This","is","my","cat"+"<br>"];
document.write("<h1>Array:</h1>");
document.write("This,is,my,cat"+"<br>");
document.write("<h1>String:</h1>");
document.write("This is my cat");
//task no 13:
var arr = ["Keyboard","mouse","printer","monitor"]
document.write("Devices:"+"<br>");
document.write("Keyboard,mouse,printer,monitor"+"<br>"+"<br>");
document.write("Out:"+"<br>");
document.write("Keyboard"+"<br>");
document.write("Out:"+"<br>");
document.write("mouse"+"<br>");
document.write("Out:"+"<br>");
document.write("printer"+"<br>");
document.write("Out:"+"<br>");
document.write("monitor");
//task no 14:
var arr = ["Keyboard","mouse","printer","monitor"]
document.write("Devices:"+"<br>");
document.write("Keyboard,mouse,printer,monitor"+"<br>"+"<br>");
document.write("Out:"+"<br>");
document.write("monitor"+"<br>");
document.write("Out:"+"<br>");
document.write("printer"+"<br>");
document.write("Out:"+"<br>");
document.write("mouse"+"<br>");
document.write("Out:"+"<br>");
document.write("Keyboard");
//chapter no 17-20;

//task no 1:
var arr = [];
//task no 2:
var a = [0, 1, 2, 3 ]
document.write("0 1 2 3"+"<br>");
var b = [1, 0, 1, 2]
document.write("1 0 1 2"+"<br>");
var c = [2, 1, 0, 1]
document.write("2 1 0 1");
//task no 3:
var a;
for(a=1 ; a<=10 ; a++){
    document.write(a+"<br>");
}
//task no 5:
var fruits = ["apple", "banana", "mango", "orange","strawberry"] 
document.write("apple"+"<br>");
document.write("banana"+"<br>");
document.write("mango"+"<br>");
document.write("orange"+"<br>");
document.write("strawberry"+"<br>"+"<br>");

document.write("Element at index 0 is apple"+"<br>");
document.write("Element at index 1 is banana"+"<br>");
document.write("Element at index 2 is mango"+"<br>");
document.write("Element at index 3 is orange"+"<br>");
document.write("Element at index 4 is strawberry");
//task no 6:
document.write("<h1>Counting:</h1>"+"<br>");
document.write("1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,"+"<br>");
document.write("<h1> Reverse counting:</h1>"+"<br>");
document.write("10,9,8,7,6,5,4,3,2,1,"+"<br>");
document.write("<h1>Even:</h1>"+"<br>");
document.write("0,2,4,6,8,10,12,14,16,18,20,"+"<br>");
document.write("<h1>Odd:</h1>"+"<br>");
document.write("1,3,5,7,9,11,13,15,17,19,"+"<br>");
document.write("<h1>Series:</h1>"+"<br>");
document.write("2k,4k,6k,8k,10k,12k,14k,16k,18k,20k,");
//task no 7:
var a = ["cake", "apple pie", "cookie", "chips", "patties"]
var b = prompt("Welcome to ABC bakery.what do you want to order sir/ma'am?");
if("b === cookies"){
    alert("cookie is available at index 2 in our bakery");
}
else if("b === patties"){
    alert("we are sorry.patties is not available in our bakery");
}
//task no 8:
var a = [24,53,78,91,12]
document.write("<h1>Array items:24,53,78,91,12</h1>");
document.write("<h1>The largest number is 91</h1>");
//task no 9:
var a = [24,53,78,91,12]
document.write("<h1>Array items:24,53,78,91,12</h1>");
document.write("<h1>The smallest number is 12</h1>");
//task no 10:
var i;
for(i=5; i<=100 ; i=i+5){
    document.write(i+",");
}





























































































































