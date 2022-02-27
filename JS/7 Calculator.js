//throughout, used Number(variable) as otherwise it is saved as a string. "Number(x)" turns x into a number rather than a string, allowing it to be mathematically manipulated.
//have tried to retrieve values using .valueasnumber instead of .value but no success so far. Will look further into it

//use variable "x" to bring up steps? set on button press and go from there

//do I need to clear buffers (e.g. manA1_1)? No issues found so far



//provides navbar with functionality, rather than using hyperlinks
//navbar links
welcome.onclick = function() {
  document.location = 'index.html';
}

whatisamatrix.onclick = function() {
  document.location = '1 Introduction to matrices.html';
}

addsubtractmatrices.onclick = function() {
  document.location = '2 Adding and Subtracting Matrices.html';
}

multiplymatrices.onclick = function() {
  document.location = '3 Multiplying Matrices.html';
}

determinant.onclick = function() {
  document.location = '4 The Determinant and Inverse.html';
}

cramersrule.onclick = function() {
  document.location = '5 Cramers Rule.html';
}

engineering.onclick = function() {
  document.location = '6 Applying Matrices to Engineering.html';
}

calculator3x3.onclick = function () {
  document.location ='10 3x3 Calculator.html';
}

quiz.onclick = function() {
  document.location = '8 Quiz section.html';
}
//end of navbar hyperlink replacements




//function to create random matrix A. When button is clicked, uses random number generator to create numbers from -15 to 15.
//   Math.round(Math.random()) produces a number that is either 0 or 1. Multiplying by 2 gives either 0 or 2. Subtract 1 gives either -1 or 1.
//math.round used
// Other possibilities exist, such as

// cos(0) = 1
// cos(PI) = -1
// random_sign = cos( PI x ( 0 or 1 ) );
//random_sign = Math.cos( Math.PI * Math.round( Math.random() ) );
//Found at https://stackoverflow.com/questions/8611830/javascript-random-positive-or-negative-number
//I have edited this to use math floor and incremented the number by one (i.e. 15 to 16). This enables each number to have a full range that creates it - 0-0.999, instead of 0-0.499 at
//the extremes of +/15. This should give a more even distribution of numbers.

//$ is from jQuery library, searches for ids or titles etc
//
randomA.onclick = function() {

  rndmNum1 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  a1_1.value = rndmNum1;

  rndmNum2 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  a1_2.value = rndmNum2;

  rndmNum3 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  a2_1.value = rndmNum3;

  rndmNum4 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  a2_2.value = rndmNum4;

}

randomB.onclick = function() { //function to create random matrix B.

  rndmNum1 = Math.round(((Math.random()) * 2 - 1) * 15.1); //creates random integer up to +/-15
  b1_1.value = rndmNum1;

  rndmNum2 = Math.round(((Math.random()) * 2 - 1) * 15.1); //creates random integer up to +/-15
  b1_2.value = rndmNum2;

  rndmNum3 = Math.round(((Math.random()) * 2 - 1) * 15.1); //creates random integer up to +/-15
  b2_1.value = rndmNum3;

  rndmNum4 = Math.round(((Math.random()) * 2 - 1) * 15.1); //creates random integer up to +/-15
  b2_2.value = rndmNum4;

}

inverseA.onclick = function() {
  var manA1_1 = a1_1.value;
  var manA1_2 = a1_2.value;
  var manA2_1 = a2_1.value;
  var manA2_2 = a2_2.value;

  determinantA2x2 = (Number(manA1_1) * Number(manA2_2)) - (Number(manA1_2) * Number(manA2_1));

  inverseA2x2multiplier = 1 / determinantA2x2;

  ans1_1.value = manA2_2 * inverseA2x2multiplier;
  ans1_2.value = -(manA2_1 * inverseA2x2multiplier);
  ans2_1.value = -(manA1_2 * inverseA2x2multiplier);
  ans2_2.value = manA1_1 * inverseA2x2multiplier;
}

inverseB.onclick = function() {
  var manB1_1 = b1_1.value;
  var manB1_2 = b1_2.value;
  var manB2_1 = b2_1.value;
  var manB2_2 = b2_2.value;

  determinantB2x2 = (Number(manB1_1) * Number(manB2_2)) - (Number(manB1_2) * Number(manB2_1));

  inverseB2x2multiplier = 1 / determinantB2x2;

  ans1_1.value = manB2_2 * inverseB2x2multiplier;
  ans1_2.value = -(manB2_1 * inverseB2x2multiplier);
  ans2_1.value = -(manB1_2 * inverseB2x2multiplier);
  ans2_2.value = manB1_1 * inverseB2x2multiplier;
}



transposeA2x2.onclick = function() {
  //could make each constant but shouldn't need to, works ok as is - not broke don't fix
  var manA1_1 = a1_1.value;
  var manA1_2 = a1_2.value;
  var manA2_1 = a2_1.value;
  var manA2_2 = a2_2.value;


  ans1_1.value = manA1_1;
  ans1_2.value = manA2_1;
  ans2_1.value = manA1_2;
  ans2_2.value = manA2_2;

}

transposeB2x2.onclick = function() {
  //could make each constant but shouldn't need to, works ok as is - not broke don't fix
  var manB1_1 = b1_1.value;
  var manB1_2 = b1_2.value;
  var manB2_1 = b2_1.value;
  var manB2_2 = b2_2.value;


  ans1_1.value = manB1_1;
  ans1_2.value = manB2_1;
  ans2_1.value = manB1_2;
  ans2_2.value = manB2_2;


}

determinantA2x2.onclick = function() {
  var manA1_1 = a1_1.value;
  var manA1_2 = a1_2.value;
  var manA2_1 = a2_1.value;
  var manA2_2 = a2_2.value;

  determinantA2x2 = (Number(manA1_1) * Number(manA2_2)) - (Number(manA1_2) * Number(manA2_1));
determinantAns.innerHTML = "The determinant of Matrix A is " + determinantA2x2 + "."  + " <br> Click below to see how it's done.";

}
//jQuery
//$("determinantAns").text("The determinant of Matrix A is " + determinantA2x2);
//$("determinantAns").html("The determinant of Matrix A is " + determinantA2x2);

determinantB2x2.onclick = function() {
  var manB1_1 = b1_1.value;
  var manB1_2 = b1_2.value;
  var manB2_1 = b2_1.value;
  var manB2_2 = b2_2.value;

  determinantB2x2 = (Number(manB1_1) * Number(manB2_2)) - (Number(manB1_2) * Number(manB2_1));
  determinantAns.innerHTML = "The determinant of Matrix B is " + determinantB2x2 + "."  + " <br> Click below to see how it's done.";
}

addition2x2.onclick = function() {
  var manA1_1 = a1_1.value;
  var manA1_2 = a1_2.value;
  var manA2_1 = a2_1.value;
  var manA2_2 = a2_2.value;

  var manB1_1 = b1_1.value;
  var manB1_2 = b1_2.value;
  var manB2_1 = b2_1.value;
  var manB2_2 = b2_2.value;

  ans1_1.value = Number(manA1_1) + Number(manB1_1);
  ans1_2.value = Number(manA1_2) + Number(manB1_2);
  ans2_1.value = Number(manA2_1) + Number(manB2_1);
  ans2_2.value = Number(manA2_2) + Number(manB2_2);
}

subtraction2x2AminusB.onclick = function() {
  var manA1_1 = a1_1.value;
  var manA1_2 = a1_2.value;
  var manA2_1 = a2_1.value;
  var manA2_2 = a2_2.value;

  var manB1_1 = b1_1.value;
  var manB1_2 = b1_2.value;
  var manB2_1 = b2_1.value;
  var manB2_2 = b2_2.value;

  ans1_1.value = Number(manA1_1) - Number(manB1_1);
  ans1_2.value = Number(manA1_2) - Number(manB1_2);
  ans2_1.value = Number(manA2_1) - Number(manB2_1);
  ans2_2.value = Number(manA2_2) - Number(manB2_2);
}


subtraction2x2BminusA.onclick = function() {
  var manA1_1 = a1_1.value;
  var manA1_2 = a1_2.value;
  var manA2_1 = a2_1.value;
  var manA2_2 = a2_2.value;

  var manB1_1 = b1_1.value;
  var manB1_2 = b1_2.value;
  var manB2_1 = b2_1.value;
  var manB2_2 = b2_2.value;

  ans1_1.value = Number(manB1_1) - Number(manA1_1);
  ans1_2.value = Number(manB1_2) - Number(manA1_2);
  ans2_1.value = Number(manB2_1) - Number(manA2_1);
  ans2_2.value = Number(manB2_2) - Number(manA2_2);

}

multiplyAB2x2.onclick = function() {
  var manA1_1 = a1_1.value;
  var manA1_2 = a1_2.value;
  var manA2_1 = a2_1.value;
  var manA2_2 = a2_2.value;

  var manB1_1 = b1_1.value;
  var manB1_2 = b1_2.value;
  var manB2_1 = b2_1.value;
  var manB2_2 = b2_2.value;

  ans1_1.value = ((Number(manA1_1) * Number(manB1_1)) + ((Number(manA1_2) * Number(manB2_1))));

  ans1_2.value = ((Number(manA1_1) * Number(manB1_2)) + ((Number(manA1_2) * Number(manB2_2))));

  ans2_1.value = ((Number(manA2_1) * Number(manB1_1)) + ((Number(manA2_2) * Number(manB2_1))));

  ans2_2.value = ((Number(manA2_1) * Number(manB1_2)) + ((Number(manA2_2) * Number(manB2_2))));
}

multiplyBA2x2.onclick = function() {
  var manA1_1 = a1_1.value;
  var manA1_2 = a1_2.value;
  var manA2_1 = a2_1.value;
  var manA2_2 = a2_2.value;

  var manB1_1 = b1_1.value;
  var manB1_2 = b1_2.value;
  var manB2_1 = b2_1.value;
  var manB2_2 = b2_2.value;

  ans1_1.value = ((Number(manB1_1) * Number(manA1_1)) + ((Number(manB1_2) * Number(manA2_1))));

  ans1_2.value = ((Number(manB1_1) * Number(manA1_2)) + ((Number(manB1_2) * Number(manA2_2))));

  ans2_1.value = ((Number(manB2_1) * Number(manA1_1)) + ((Number(manB2_2) * Number(manA2_1))));

  ans2_2.value = ((Number(manB2_1) * Number(manA1_2)) + ((Number(manB2_2) * Number(manA2_2))));
}


scalarA.onclick = function() {
  scalarA = scalarA2x2.value;
  manA1_1 = a1_1.value;
  manA1_2 = a1_2.value;
  manA2_1 = a2_1.value;
  manA2_2 = a2_2.value;

  ans1_1.value = Number(manA1_1) * Number(scalarA);
  ans1_2.value = Number(manA1_2) * Number(scalarA);
  ans2_1.value = Number(manA2_1) * Number(scalarA);
  ans2_2.value = Number(manA2_2) * Number(scalarA);
}


scalarB.onclick = function() {
  scalarB = scalarB2x2.value;
  manB1_1 = b1_1.value;
  manB1_2 = b1_2.value;
  manB2_1 = b2_1.value;
  manB2_2 = b2_2.value;

  ans1_1.value = Number(manB1_1) * Number(scalarB);
  ans1_2.value = Number(manB1_2) * Number(scalarB);
  ans2_1.value = Number(manB2_1) * Number(scalarB);
  ans2_2.value = Number(manB2_2) * Number(scalarB);
}
//
// //takes in data from table - beware, will need to ensure new data not put in
// //i.e. enter data then press button then replace values in Matrix
// //so will need to consider moving this assignmeant of variable values within a calculating function
//
// // function takevalues()
// // randomB.onclick = function(){
// //
// //   var a1_1 = document.getElementByID("a1_1");
// // alert(a1_1);//help to check
// // }
// //
// //
// // function AplusB2x2() {
// //
// //   var a1_1 = document.getElementByID("a1_1");
// //
// // }
// //
// //
// //
// ////Original version of random matrix
// // //creates a random matrix. Should create a random matrix each time as all variables included within the function
// // // //as random numbers each time, have just copied this function and changed name for each matrix
// // randomA.onclick = function() {
// //
// //   var randa1_1 = math.random();
// //   randa1_1 = math.floor((randa1_1 * 10) + 1);
// // alert("works");
// //   //use object literal to update
// //
// //   var randa1_2 = math.random();
// //   randa1_2 = math.floor(randa1_2 * 10) + 1;
// //
// //   var randa1_3 = math.random();
// //   randa1_3 = math.floor(randa1_3 * 10) + 1;
// //
// //   var randa2_1 = math.random();
// //   randa2_1 = math.floor(randa2_1 * 10) + 1;
// //
// //   var randa2_2 = math.random();
// //   randa2_2 = math.floor(randa2_2 * 10) + 1;
// //
// //   var randa2_3 = math.random();
// //   randa2_3 = math.floor(randa2_3 * 10) + 1;
// //
// //   var randa3_1 = math.random();
// //   randa3_1 = math.floor(randa3_1 * 10) + 1;
// //
// //   var randa3_2 = math.random();
// //   randa3_2 = math.floor(randa3_2 * 10) + 1;
// //
// //   var randa3_3 = math.random();
// //   randa3_3 = math.floor(randa3_3 * 10) + 1;
// // }
