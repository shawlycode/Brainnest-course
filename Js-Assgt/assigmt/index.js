/*Write a JavaScript program to find the area of a triangle where lengths of the three of its
sides are 5, 6 and 7.*/

function Area() {
  var side1 = parseInt(document.getElementById("side1").value);

  var side2 = parseInt(document.getElementById("side2").value);

  var side3 = parseInt(document.getElementById("side3").value);

  var s = (side1 + side2 + side3) / 2;

  var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));

  document.getElementById("display").innerHTML = area;
}

/*Write a JavaScript program to find the diagonal of a square where the length of each
side is 9.*/
// function findDiagonal(s) {
//   return Math.sqrt(2) * s;
// }
// var S = 9;

// document.write(findDiagonal(S).toFixed(6));

/*Write a JavaScript program that accepts two integers and displays the larger of the two.*/
// const integer1 = parseInt(prompt("Enter first number:"));
// const integer2 = parseInt(prompt("Enter second number:"));
// if (integer1 == integer2) {
//   console.log(integer1 + " is equal to " + integer2);
// } else if (integer1 > integer2) {
//   console.log(integer1 + " is larger than " + integer2);
// } else {
//   console.log(integer1 + " is lesser than " + integer2);
// }

// /*Write a JavaScript program that checks whether an integer is an even or an odd number.*/
// const number = prompt("Enter a number: ");
// if (number % 2 == 0) {
//   console.log("The number is even.");
// } else {
//   console.log("The number is odd.");
// }
