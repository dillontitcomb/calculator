var first = null;
var second = null;
var bufferFirst = "";
var bufferSecond = "";
var selector = null;
var result = null;

//This function is used to check if either first or second variables are empty
  var checkMe = function(check){
    if(first === null & second === null){
    append(check, bufferFirst);
      console.log(1);
    } else if(first !=null & second ===null){
      append(check, bufferSecond);
      console.log(2);
    } else if(first === null & second != null){
      append(check, bufferFirst);
      console.log(3);
    } else {
      console.log(4);
    }
  }
  //appends to a var
  var append = function(input, variable) {
    variable =+input;
  }

$(function(){
    $("#one").click(function() {
      checkMe("1");
    });
    $("#two").click(function() {
      checkMe("2");
    });
    $("#three").click(function() {
      checkMe("3");
    });
    $("#four").click(function() {
      checkMe("4");
    });
    $("#five").click(function() {
      checkMe("5");
    });
    $("#six").click(function() {
      checkMe("6");
    });
    $("#seven").click(function() {
      checkMe("7");
    });
    $("#eight").click(function() {
      checkMe("8");
    });
    $("#nine").click(function() {
      checkMe("9");
    });
    $("#zero").click(function() {
      checkMe("0");
    });
    $("#left-paran").click(function() {
      checkMe("(");
    });
    $("#right-paran").click(function() {
      checkMe(")");
    });
    $("#equal").click(function() {
      second=bufferSecond;
      selector(select, first, second);
    });
    $("#headerdisplay").click(function(){
      $("#headerdisplay").append(first);
    });
});









// var promptFunction = function(){
//   var returnThisOne = prompt("Enter a number");
//   return returnThisOne;
// }
// var promptFunction2 = function(){
//   var returnThisToo= prompt("Enter another number");
//   return returnThisToo;

// var number1 = promptFunction();
// var number2 = promptFunction2();
// alert("Your two numbers add = " + add(parseFloat(number1), parseFloat(number2)));
// alert("Your two numbers add = " + subtract(parseFloat(number1), parseFloat(number2)));
// alert("Your two numbers add = " + multiply(parseFloat(number1), parseFloat(number2)));
// alert("Your two numbers add = " + divide(parseFloat(number1), parseFloat(number2)));
