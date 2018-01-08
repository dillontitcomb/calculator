var first;
var second;
var result;

var add = function(number1, number2){
  $("plus").click(function() {
    if (lastNumber != null) {
      return lastNumber + nextNumber;
    } else {

    }
  return ;
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
//This function is used to check if either first or second variables are empty
  var checker = function(checkMe){
    if(first === null & second === null){
      addToFirst(checkMe);
    } else if(first != & second ===null){
      addToSecond(checkMe);
    } else if(first === null & second != null){
      addToFirst(checkMe);
    } else {
    }
  }
  var addToFirst = function(input) {
    return first + input;
  }

  var addToSecond = function(input){
    return second + input;
  }

$(function(){
    $("1").click(function() {
      checkMe("1");
    });
    $("2").click(function() {
      checkMe("2");
    });
    $("3").click(function() {
      checkMe("3");
    });
    $("4").click(function() {
      checkMe("4");
    });
    $("5").click(function() {
      checkMe("5");
    });
    $("6").click(function() {
      checkMe("6");
    });
    $("7").click(function() {
      checkMe("7");
    });
    $("8").click(function() {
      checkMe("8");
    });
    $("9").click(function() {
      checkMe("9");
    });
    $("0").click(function() {
      checkMe("0");
    });
    $("left-paran").click(function() {
      checkMe("(");
    });
    $("right-paran").click(function() {
      checkMe(")");
    });
    $("=").onclick(function() {
      alert("TESTING");
    });


});


// var number1 = promptFunction();
// var number2 = promptFunction2();
// alert("Your two numbers add = " + add(parseFloat(number1), parseFloat(number2)));
// alert("Your two numbers add = " + subtract(parseFloat(number1), parseFloat(number2)));
// alert("Your two numbers add = " + multiply(parseFloat(number1), parseFloat(number2)));
// alert("Your two numbers add = " + divide(parseFloat(number1), parseFloat(number2)));
