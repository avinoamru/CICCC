
function checkPrime(){
    var inputNumber = document.getElementById("num").value;
    if (isNaN(inputNumber))
    {
        alert("Please input numbers");
        return false;
    }
    else {

        var flag = true;
        if (inputNumber == 0){
            flag = false;
        }
        if (inputNumber == 1){
            flag = true;
        }
        for(var i = 2; i < inputNumber; i++) {
            if(inputNumber % i === 0) {
                flag = false;
            }
            
        }if (flag == true){
            document.getElementById("result").innerHTML ="The number " + inputNumber + " is a prime number.";
        }if (flag == false){
            document.getElementById("result").innerHTML = "The number " + inputNumber + " is not a prime number.";
        }
        // console.log(flag)
        return flag;
    }
}

