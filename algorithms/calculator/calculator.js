var name = prompt("What is your name?");


function plus(){
    num1 = document.getElementById("firstNum").value;
    num2 = document.getElementById("secondNum").value;
    result = parseInt(+num1 + +num2);
    document.getElementById("result").innerHTML = "Hello " + name + " You added " + num1 + " and " 
    + num2 + ", the answer is: " + result;

}

function minus(){
    num1 = document.getElementById("firstNum").value;
    num2 = document.getElementById("secondNum").value;
    document.getElementById("result").innerHTML = "Hello " + name + " You subtracted " + num2 + " from " 
    + num1 + ", the answer is: " + (num1-num2);
}

function multiply(){
    num1 = document.getElementById("firstNum").value;
    num2 = document.getElementById("secondNum").value;
    document.getElementById("result").innerHTML = "Hello " + name + " You multiplied " + num1 + " by " 
    + num2 + ", the answer is: " + (num1*num2);
}

function divide(){
    num1 = document.getElementById("firstNum").value;
    num2 = document.getElementById("secondNum").value;
    document.getElementById("result").innerHTML = "Hello " + name + " You divided " + num1 + " by " 
    + num2 + ", the answer is: " + (num1/num2);
}
