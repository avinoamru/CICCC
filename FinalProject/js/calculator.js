
var number1;
var number2;
var result;
var symbol;
var value;

/*===================
        Addition
=====================*/
function add(number1, number2, result){
    if (result != number1 +number2){
        return false;
    }else {return true;
}
}

/*========================
        Subtraction
========================*/
function subtract(number1,number2, result){
    if (result != number1 -number2){
        return false;
    }else {return true;
}
}

/*========================
        Multiplication
========================*/
function multiply(number1,number2, result){
    if (result != number1 *number2){
        return false;
    }else {return true;
}
}
/*========================
        Division
========================*/
function divide(number1, number2, result){
    if (result != number1 /number2){
        return false;
    }else {return true;
}
}

/*==========================
        Integration
==========================*/
function checkSymbol(value){
    var boolOutput;
    switch (value){
        case 0:
            boolOutput = add(number1, number2, result);
            break;
        case 1:
            boolOutput = subtract(number1, number2, result);
            break;
        case 2:
            boolOutput = multiply(number1, number2, result);
            break;
        case 3:
            boolOutput = divide(number1, number2, result);
            break;
        default:
            break;
    } return boolOutput;
}



function getValues(){
    number1 = parseInt(document.getElementById("num1").value);
    number2 = parseInt(document.getElementById("num2").value);
    result = parseInt(document.getElementById("res").value);
    symbol = document.getElementById("sym");
    valueSymbol = parseInt(symbol.options[symbol.selectedIndex].value);
    checkSymbol(valueSymbol);
    checkRes();
}

function checkRes(){
    if (checkSymbol(valueSymbol)){
        document.getElementById("result").innerHTML = "You are correct!";
    }else {document.getElementById("result").innerHTML = "You are wrong.";}
}