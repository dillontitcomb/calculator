var add = function(number1, number2){
  return number1 + number2;
}
var subtract = function(number1, number2){
  return number1 - number2;
}
var multiply = function(number1, number2){
  return number1 * number2;
}
var divide = function(number1, number2){
  return number1 / number2;
}
var promptFunction = function(){
  var returnThisOne = prompt("Enter a number");
  return returnThisOne;
}
var promptFunction2 = function(){
  var returnThisToo= prompt("Enter another number");
  return returnThisToo;
}


$(function(){
  $("h1").click(function() {
    var number1 = promptFunction();
    var number2 = promptFunction2();
    alert("Your two numbers add = " + add(parseFloat(number1), parseFloat(number2)));
    alert("Your two numbers add = " + subtract(parseFloat(number1), parseFloat(number2)));
    alert("Your two numbers add = " + multiply(parseFloat(number1), parseFloat(number2)));
    alert("Your two numbers add = " + divide(parseFloat(number1), parseFloat(number2)));
  });
});
