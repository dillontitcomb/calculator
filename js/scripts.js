var first = 0;
var second = 0;
var buffer = "";
// var bufferSecond = "";
var result = null;
var selector = null;

var firstInProgress = true;

//appending button pressed to buffer
var appendBuffer = function(appendedNum) {
  buffer+=appendedNum;
}
//appending button pressed to bufferSecond
// var appendSecond = function(addMeTo) {
//   bufferSecond+=addMeTo;
// }
//This function is used to check if either first or second variables are empty
var addToBuffer = function(num){
  appendBuffer(num);
}
var switchToSecond = function() {
  if (firstInProgress) {
    firstInProgress = false;
    first = parseFloat(buffer);
    buffer = "";
  }
}
var calculateTwoValueResult = function() {
  second = parseFloat(buffer);
  buffer = "";
  firstInProgress = true;
  return selectorFunction(selector);
  first = 0;
  second = 0;
  buffer = "";
}
//selector input used to determine what mathematical method to use
var selectorFunction = function(input){
  if(input == 1){
    return exponentialFunction(first,second);
  } else if(input == 2){
    return factorialFunction(first,second);
  } else if(input == 3){
    return sin(first,second);
  } else if(input == 4){
    return cos(first,second);
  } else if(input == 5){
    return tan(first,second);
  } else if(input == 6){
    return add(first,second);
  } else if(input == 7){
    return subtract(first,second);
  } else if(input == 8){
    return multiply(first,second);
  } else if(input == 9){
    return divide(first,second);
  } else {
    return 1;
  }
}
$(function(){
    $("#one").click(function() {
      addToBuffer("1");
    });
    $("#two").click(function() {
      addToBuffer("2");
    });
    $("#three").click(function() {
      addToBuffer("3");
    });
    $("#four").click(function() {
      addToBuffer("4");
    });
    $("#five").click(function() {
      addToBuffer("5");
    });
    $("#six").click(function() {
      addToBuffer("6");
    });
    $("#seven").click(function() {
      addToBuffer("7");
    });
    $("#eight").click(function() {
      addToBuffer("8");
    });
    $("#nine").click(function() {
      addToBuffer("9");
    });
    $("#zero").click(function() {
      addToBuffer("0");
    });
    $("#left-paran").click(function() {
      addToBuffer("(");
    });
    $("#right-paran").click(function() {
      addToBuffer(")");
    });
    $("#xy").click(function() {
      selector = 1;
      switchToSecond();
    });
    $("#factorial").click(function() {
      switchToSecond();
      selector = 2;
    });
    $("#sin").click(function() {
      switchToSecond();
      selector = 3;
    });
    $("#cos").click(function() {
      switchToSecond();
      selector = 4;
    });
    $("#tan").click(function() {
      switchToSecond();
      selector = 5;
    });
    $("#plus").click(function() {
      switchToSecond();
      selector = 6;
    });
    $("#minus").click(function() {
      switchToSecond();
      selector = 7;
    });
    $("#multiply").click(function() {
      switchToSecond();
      selector = 8;
    });
    $("#divide").click(function() {
      switchToSecond();
      selector = 9;
    });
    $("#AC").click(function(){
      first = null;
      second = null;
      buffer = "";
    });
    $("#equal").click(function() {
      var result = calculateTwoValueResult();
      $("#resultheader").append("<em>" + result + "</em>");
    });
});
//Finds the factorial of an integer
var factorialFunction = function(aNumber) {
  var output = 1;
  for(var i = 1; i <= aNumber; i++){
    output = output*i;
  }
  return output;
}
//Finds x^y
var exponentialFunction = function(x, y){
  var result = 1;
  for(var i = 1; i <= y; i ++){
    result = result*x;
  }
  return result;
}
//finds sin of a ratio
var sinFunction = function(first,second){
  return Math.sin(first);
}
//Finds cos of a ratio
var cosFunction = function(first,second){
  return Math.cos(first);
}
//Finds tangent of ratio
var tanFunction = function(first,second){
  return Math.tan(first);
}
//Finds percentage of second to first
var percentFunction = function(first, second){
  return (second/first)*100;
}
//Converts degrees to radians
var radFunction = function(first,second){
  return Math.radians(first);
}
var add = function(first,second){
  return first + second;
}
var subtract = function(first,second){
  return first - second;
}
var multiply = function(first,second){
  return first*second;
}
var divide = function(first,second){
  return first/second;
}
