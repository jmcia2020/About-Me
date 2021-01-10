"use strict";
console.log ('And Java is LIVE!!!');

// //prompt our user for input data
var userName = prompt('What is your name?');
console.log(userName);
// 
// Greet the user
alert
('Hello ' + userName + '. Thank you for visitng my site.');

// //Validate user input. 
// var toLowerCase = userName.toLowerCase();
// console.log(toLowerCase);

// //Validate the input using conditional logic using strict equals.

var siblings = 
prompt('Do  you have siblings?').toLowerCase();
console.log(siblings);

if(siblings === 'y' || siblings === 'yes')
{
  alert ("Me too!");
}
else if(siblings === 'n' || siblings === 'no')
{
  alert("Being an only child has it's advantages.");
}
// 
var travel = prompt('Have you ever been to Paris?').toLowerCase();
console.log(travel);

if(travel === 'y' || travel === 'yes')
{
  alert ("Then you understand why Pawnee is the Paris of America");
}
else
{
  alert ("That's ok. You've seen Pawnee: The Paris of America.");
}
// 
var catsDogs = prompt('Are you a cat or a dog person?').toLowerCase();
console.log(catsDogs);

if(catsDogs === 'dog' || catsDogs ==='dogs')
{
  alert ("We have some dogs at the local shelter that could use a home.");
}
else if(catsDogs === 'cat' || catsDogs === 'cats')
{
  alert("I never had a kitty cat.");
}
// 
var sushi = prompt('Do you like sushi?').toLowerCase();
console.log(sushi);


if(sushi === 'y' || sushi === 'yes')
{
  alert ("AAC rolls don't count!");
}
else
{
  alert("Adventure isn't for everyone when it comes to food.");
}


// Q 6
//Guess Leslie's Age 

var age = 34

for (var i = 0; i < 4; i++){
var ageAnswer = prompt('How old was Leslie Knope at the beginning of Parks & Rec?');

if (ageAnswer === age)
{
  // alert
  console.log("Congratulations! While a lady never tells her age, public records do. Leslie's age at the beginning of the show was 34.")
correctanswers++
break;
}

if (ageAnswer > 34) 
{
  //alert
  console.log("Leslie isn't THAT old")
} 
else (ageAnswer < 34) 
{
//alert
console.log("That guess is too low, but thank you!")
}

// Question 7

// // //WILL NOT RUN


// // logical operator example ---------------
// // var myBooleenValueTrue = true;
// // var anotherBooleenValueFalse = false;
// // var thirdBooleenValueTrue = true;
// //else if
// // var myBooleenValueTrue = true;
// // var anotherBooleenValueFalse = false;
// // var thirdBooleenValueTrue = false;
// //next else if
// // var myBooleenValueTrue = false;
// // var anotherBooleenValueFalse = false;
// // var thirdBooleenValueTrue = true;
// //else
// // var myBooleenValueTrue = false;
// // var anotherBooleenValueFalse = false;
// // var thirdBooleenValueTrue = false;

// // if (myBooleenValueTrue && thirdBooleenValueTrue){
// //   alert('The && will run if both are true');
// //   console.log('both values were true');
// // } else if(myBooleenValueTrue || anotherBooleenValueFalse){
// //   alert('The || will run if both are true');
// //   console.log('one of values was true');
// // } else if(thirdBooleenValueTrue){
// //   alert('the 3rd value was tru so this will run');
// //   console.log('thirdBooleenValueTrue was true');
// // } else {
// //   alert('nope we reached the else statement.');
// //   console.log('There were no true values');
// // }




