/* // Input
var num1 = parseInt(document.getElementById("num1").value);
var num2 = parseInt(document.getElementById("num2").value);
// Output
var answer = parseInt(document.getElementById("result").value);
 */
/*===================
        Addition
=====================*/
function add(){
    // Input
var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
// Output
var answer = document.getElementById("result").value;

    if (answer != num1 + num2){
        return false;
    }else {return true;
}
}

/*========================
        Subtraction

========================*/
function subtract(){
          // Input
var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
// Output
var answer = document.getElementById("result").value;

    
    if (answer != num1 - num2){
        return false;
    }else {return true;
}
}

/*========================
        Multiplication
========================*/
function multiply(){
     // Input
var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
// Output
var answer = document.getElementById("result").value;

    if (answer != num1 * num2){
        return false;
    }else {return true;
}
}
/*========================
        Division
========================*/
function divide(){
    // Input
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    // Output
    var answer = document.getElementById("result").value;
    
    if (answer != num1 / num2){
        return false;
    }else {return true;
}
}

/*==========================
        Integration
==========================*/
function checkSymbol(symbol){
    var boolOutput;
    switch (symbol){
        case '+':
            boolOutput = add();
            break;
        case '-':
            boolOutput = subtract();
            break;
        case '*':
            boolOutput = multiply();
            break;
        case '/':
            boolOutput = divide();
            break;
    } return boolOutput;
}

function checkResult(symbol){
    if (checkSymbol(symbol)){
        document.getElementById("answer").innerHTML = "You are correct!";
    }else {document.getElementById("answer").innerHTML = "You are wrong.";}
}

var getSymbol = document.getElementById("sym");
var insertSymbol = getSymbol.options[getSymbol.selectedIndex].value;