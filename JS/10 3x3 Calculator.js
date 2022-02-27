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

calculator2x2.onclick = function() {
  document.location = '7 2x2 Calculator.html';
}

quiz.onclick = function() {
  document.location = '8 Quiz section.html';
}
//end of navbar hyperlink replacements

randomA.onclick = function() {

  rndmNum1 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  a1_1.value = rndmNum1;

  rndmNum2 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  a1_2.value = rndmNum2;

  rndmNum3 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  a1_3.value = rndmNum3;

  rndmNum4 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  a2_1.value = rndmNum4;

  rndmNum5 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  a2_2.value = rndmNum5;

  rndmNum6 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  a2_3.value = rndmNum6;

  rndmNum7 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  a3_1.value = rndmNum7;

  rndmNum8 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  a3_2.value = rndmNum8;

  rndmNum9 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  a3_3.value = rndmNum9;

}

randomB.onclick = function() { //function to create random matrix B.

  rndmNum1 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  b1_1.value = rndmNum1;

  rndmNum2 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  b1_2.value = rndmNum2;

  rndmNum3 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  b1_3.value = rndmNum3;

  rndmNum4 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  b2_1.value = rndmNum4;

  rndmNum5 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  b2_2.value = rndmNum5;

  rndmNum6 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  b2_3.value = rndmNum6;

  rndmNum7 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  b3_1.value = rndmNum7;

  rndmNum8 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  b3_2.value = rndmNum8;

  rndmNum9 = Math.floor(((Math.random()) * 2 - 1) * 16); //creates random integer up to +/-15
  b3_3.value = rndmNum9;

}

inverseA.onclick = function() {
  var manA1_1 = a1_1.value;
  var manA1_2 = a1_2.value;
  var manA1_3 = a1_3.value;
  var manA2_1 = a2_1.value;
  var manA2_2 = a2_2.value;
  var manA2_3 = a2_3.value;
  var manA3_1 = a3_1.value;
  var manA3_2 = a3_2.value;
  var manA3_3 = a3_3.value;

  determinantA3x3 = (Number(manA1_1) * Number(manA2_2) * Number(manA3_3)) +
    (Number(manA1_2) * Number(manA2_3) * Number(manA3_1)) +
    (Number(manA1_3) * Number(manA2_1) * Number(manA3_2)) -
    (Number(manA3_1) * Number(manA2_2) * Number(manA1_3)) -
    (Number(manA3_2) * Number(manA2_3) * Number(manA1_1)) -
    (Number(manA3_3) * Number(manA2_1) * Number(manA1_2));

    transposed1_1 = manA1_1;
    transposed1_2 = manA2_1;
    transposed1_3 = manA3_1;
    transposed2_1 = manA1_2;
    transposed2_2 = manA2_2;
    transposed2_3 = manA3_2;
    transposed3_1 = manA1_3;
    transposed3_2 = manA2_3;
    transposed3_3 = manA3_3;



  inverseA3x3multiplier = 1 / determinantA3x3;

  ans1_1.value = manA2_2 * inverseA3x3multiplier;
  ans1_2.value = -(manA2_1 * inverseA3x3multiplier);
  ans2_1.value = -(manA1_2 * inverseA3x3multiplier);
  ans2_2.value = manA1_1 * inverseA3x3multiplier;
}

inverseB.onclick = function() {
  var manB1_1 = b1_1.value;
  var manB1_2 = b1_2.value;
  var manB1_3 = b1_3.value;
  var manB2_1 = b2_1.value;
  var manB2_2 = b2_2.value;
  var manB2_3 = b2_3.value;
  var manB3_1 = b3_1.value;
  var manB3_2 = b3_2.value;
  var manB3_3 = b3_3.value;

  determinantB3x3 = (Number(manB1_1) * Number(manB2_2) * Number(manB3_3)) +
    (Number(manB1_2) * Number(manB2_3) * Number(manB3_1)) +
    (Number(manB1_3) * Number(manB2_1) * Number(manB3_2)) -
    (Number(manB3_1) * Number(manB2_2) * Number(manB1_3)) -
    (Number(manB3_2) * Number(manB2_3) * Number(manB1_1)) -
    (Number(manB3_3) * Number(manB2_1) * Number(manB1_2));


  inverseB3x3multiplier = 1 / determinantB3x3;

  ans1_1.value = manB2_2 * inverseB3x3multiplier;
  ans1_2.value = -(manB2_1 * inverseB3x3multiplier);
  ans2_1.value = -(manB1_2 * inverseB3x3multiplier);
  ans2_2.value = manB1_1 * inverseB3x3multiplier;
}

transposeA3x3.onclick = function() {
  //could make each constant but shouldn't need to, works ok as is - not broke don't fix
  var manA1_1 = a1_1.value;
  var manA1_2 = a1_2.value;
  var manA1_3 = a1_3.value;
  var manA2_1 = a2_1.value;
  var manA2_2 = a2_2.value;
  var manA2_3 = a2_3.value;
  var manA3_1 = a3_1.value;
  var manA3_2 = a3_2.value;
  var manA3_3 = a3_3.value;


  ans1_1.value = manA1_1;
  ans1_2.value = manA2_1;
  ans1_3.value = manA3_1;
  ans2_1.value = manA1_2;
  ans2_2.value = manA2_2;
  ans2_3.value = manA3_2;
  ans3_1.value = manA1_3;
  ans3_2.value = manA2_3;
  ans3_3.value = manA3_3;
}

transposeB3x3.onclick = function() {
  var manB1_1 = b1_1.value;
  var manB1_2 = b1_2.value;
  var manB1_3 = b1_3.value;
  var manB2_1 = b2_1.value;
  var manB2_2 = b2_2.value;
  var manB2_3 = b2_3.value;
  var manB3_1 = b3_1.value;
  var manB3_2 = b3_2.value;
  var manB3_3 = b3_3.value;


  ans1_1.value = manB1_1;
  ans1_2.value = manB2_1;
  ans1_3.value = manB3_1;
  ans2_1.value = manB1_2;
  ans2_2.value = manB2_2;
  ans2_3.value = manB3_2;
  ans3_1.value = manB1_3;
  ans3_2.value = manB2_3;
  ans3_3.value = manB3_3;
}

determinantA3x3.onclick = function() {
  var manA1_1 = a1_1.value;
  var manA1_2 = a1_2.value;
  var manA1_3 = a1_3.value;
  var manA2_1 = a2_1.value;
  var manA2_2 = a2_2.value;
  var manA2_3 = a2_3.value;
  var manA3_1 = a3_1.value;
  var manA3_2 = a3_2.value;
  var manA3_3 = a3_3.value;

  determinantA3x3 = (Number(manA1_1) * Number(manA2_2) * Number(manA3_3)) +
    (Number(manA1_2) * Number(manA2_3) * Number(manA3_1)) +
    (Number(manA1_3) * Number(manA2_1) * Number(manA3_2)) -
    (Number(manA3_1) * Number(manA2_2) * Number(manA1_3)) -
    (Number(manA3_2) * Number(manA2_3) * Number(manA1_1)) -
    (Number(manA3_3) * Number(manA2_1) * Number(manA1_2));

  determinantAns.innerHTML = "The determinant of Matrix A is " + determinantA3x3 + "."  + " <br> Click below to see how it's done.";

}
//jQuery
//$("determinantAns").text("The determinant of Matrix A is " + determinantA3x3);
//$("determinantAns").html("The determinant of Matrix A is " + determinantA3x3);

determinantB3x3.onclick = function() {
  var manB1_1 = b1_1.value;
  var manB1_2 = b1_2.value;
  var manB1_3 = b1_3.value;
  var manB2_1 = b2_1.value;
  var manB2_2 = b2_2.value;
  var manB2_3 = b2_3.value;
  var manB3_1 = b3_1.value;
  var manB3_2 = b3_2.value;
  var manB3_3 = b3_3.value;

  determinantB3x3 = (Number(manB1_1) * Number(manB2_2) * Number(manB3_3)) +
    (Number(manB1_2) * Number(manB2_3) * Number(manB3_1)) +
    (Number(manB1_3) * Number(manB2_1) * Number(manB3_2)) -
    (Number(manB3_1) * Number(manB2_2) * Number(manB1_3)) -
    (Number(manB3_2) * Number(manB2_3) * Number(manB1_1)) -
    (Number(manB3_3) * Number(manB2_1) * Number(manB1_2));

  determinantAns.innerHTML = "The determinant of Matrix B is " + determinantB3x3 + "."  + " <br> Click below to see how it's done.";
}

addition3x3.onclick = function() {
  var manA1_1 = a1_1.value;
  var manA1_2 = a1_2.value;
  var manA1_3 = a1_3.value;
  var manA2_1 = a2_1.value;
  var manA2_2 = a2_2.value;
  var manA2_3 = a2_3.value;
  var manA3_1 = a3_1.value;
  var manA3_2 = a3_2.value;
  var manA3_3 = a3_3.value;

  var manB1_1 = b1_1.value;
  var manB1_2 = b1_2.value;
  var manB1_3 = b1_3.value;
  var manB2_1 = b2_1.value;
  var manB2_2 = b2_2.value;
  var manB2_3 = b2_3.value;
  var manB3_1 = b3_1.value;
  var manB3_2 = b3_2.value;
  var manB3_3 = b3_3.value;

  ans1_1.value = Number(manA1_1) + Number(manB1_1);
  ans1_2.value = Number(manA1_2) + Number(manB1_2);
  ans1_3.value = Number(manA1_3) + Number(manB1_3);
  ans2_1.value = Number(manA2_1) + Number(manB2_1);
  ans2_2.value = Number(manA2_2) + Number(manB2_2);
  ans2_3.value = Number(manA2_3) + Number(manB2_3);
  ans3_1.value = Number(manA3_1) + Number(manB3_1);
  ans3_2.value = Number(manA3_2) + Number(manB3_2);
  ans3_3.value = Number(manA3_3) + Number(manB3_3);
}

subtraction3x3AminusB.onclick = function() {
  var manA1_1 = a1_1.value;
  var manA1_2 = a1_2.value;
  var manA1_3 = a1_3.value;
  var manA2_1 = a2_1.value;
  var manA2_2 = a2_2.value;
  var manA2_3 = a2_3.value;
  var manA3_1 = a3_1.value;
  var manA3_2 = a3_2.value;
  var manA3_3 = a3_3.value;

  var manB1_1 = b1_1.value;
  var manB1_2 = b1_2.value;
  var manB1_3 = b1_3.value;
  var manB2_1 = b2_1.value;
  var manB2_2 = b2_2.value;
  var manB2_3 = b2_3.value;
  var manB3_1 = b3_1.value;
  var manB3_2 = b3_2.value;
  var manB3_3 = b3_3.value;

  ans1_1.value = Number(manA1_1) - Number(manB1_1);
  ans1_2.value = Number(manA1_2) - Number(manB1_2);
  ans1_3.value = Number(manA1_3) - Number(manB1_3);
  ans2_1.value = Number(manA2_1) - Number(manB2_1);
  ans2_2.value = Number(manA2_2) - Number(manB2_2);
  ans2_3.value = Number(manA2_3) - Number(manB2_3);
  ans3_1.value = Number(manA3_1) - Number(manB3_1);
  ans3_2.value = Number(manA3_2) - Number(manB3_2);
  ans3_3.value = Number(manA3_3) - Number(manB3_3);
}


subtraction3x3BminusA.onclick = function() {
  var manA1_1 = a1_1.value;
  var manA1_2 = a1_2.value;
  var manA1_3 = a1_3.value;
  var manA2_1 = a2_1.value;
  var manA2_2 = a2_2.value;
  var manA2_3 = a2_3.value;
  var manA3_1 = a3_1.value;
  var manA3_2 = a3_2.value;
  var manA3_3 = a3_3.value;

  var manB1_1 = b1_1.value;
  var manB1_2 = b1_2.value;
  var manB1_3 = b1_3.value;
  var manB2_1 = b2_1.value;
  var manB2_2 = b2_2.value;
  var manB2_3 = b2_3.value;
  var manB3_1 = b3_1.value;
  var manB3_2 = b3_2.value;
  var manB3_3 = b3_3.value;

  ans1_1.value = Number(manB1_1) - Number(manA1_1);
  ans1_2.value = Number(manB1_2) - Number(manA1_2);
  ans1_3.value = Number(manB1_3) - Number(manA1_3);
  ans2_1.value = Number(manB2_1) - Number(manA2_1);
  ans2_2.value = Number(manB2_2) - Number(manA2_2);
  ans2_3.value = Number(manB2_3) - Number(manA2_3);
  ans3_1.value = Number(manB3_1) - Number(manA3_1);
  ans3_2.value = Number(manB3_2) - Number(manA3_2);
  ans3_3.value = Number(manB3_3) - Number(manA3_3);

}

multiplyAB3x3.onclick = function() {
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

multiplyBA3x3.onclick = function() {
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
  scalarA = scalarA3x3.value;
  var manA1_1 = a1_1.value;
  var manA1_2 = a1_2.value;
  var manA1_3 = a1_3.value;
  var manA2_1 = a2_1.value;
  var manA2_2 = a2_2.value;
  var manA2_3 = a2_3.value;
  var manA3_1 = a3_1.value;
  var manA3_2 = a3_2.value;
  var manA3_3 = a3_3.value;


  ans1_1.value = Number(manA1_1) * Number(scalarA);
  ans1_2.value = Number(manA1_2) * Number(scalarA);
  ans1_3.value = Number(manA1_3) * Number(scalarA);
  ans2_1.value = Number(manA2_1) * Number(scalarA);
  ans2_2.value = Number(manA2_2) * Number(scalarA);
  ans2_3.value = Number(manA2_3) * Number(scalarA);
  ans3_1.value = Number(manA3_1) * Number(scalarA);
  ans3_2.value = Number(manA3_2) * Number(scalarA);
  ans3_3.value = Number(manA3_3) * Number(scalarA);
}


scalarB.onclick = function() {
  scalarB = scalarB3x3.value;
  var manB1_1 = b1_1.value;
  var manB1_2 = b1_2.value;
  var manB1_3 = b1_3.value;
  var manB2_1 = b2_1.value;
  var manB2_2 = b2_2.value;
  var manB2_3 = b2_3.value;
  var manB3_1 = b3_1.value;
  var manB3_2 = b3_2.value;
  var manB3_3 = b3_3.value;

  ans1_1.value = Number(manB1_1) * Number(scalarB);
  ans1_2.value = Number(manB1_2) * Number(scalarB);
  ans1_3.value = Number(manB1_3) * Number(scalarB);
  ans2_1.value = Number(manB2_1) * Number(scalarB);
  ans2_2.value = Number(manB2_2) * Number(scalarB);
  ans2_3.value = Number(manB2_3) * Number(scalarB);
  ans3_1.value = Number(manB3_1) * Number(scalarB);
  ans3_2.value = Number(manB3_2) * Number(scalarB);
  ans3_3.value = Number(manB3_3) * Number(scalarB);
}
