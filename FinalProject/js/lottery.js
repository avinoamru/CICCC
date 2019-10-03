function CheckHowManyInPosition(target, input,length){
    var output = 0;
    for(var i=0; i<length; i++){
        if(target[i]==input[i]){
            output++;
        }    
    }
    return output;
}

function CheckHowManyOutOfOrder(target, input, length){ //bug here, overcounting when repeated numbers happen
    var output = 0;
    var flagFound = false;
    for(var i=0; i<length; i++){
        for (var j=0; j<length; j++){
            if(target[j]==input[i]){
                output++;
            }
        }           
    }
    return output;
}

function CheckBestSequence(target,input,length){
    var output = 0;
    //check for every input number if there's any match
    for(var i=0; i<length; i++){
        //check for every target number if input is a match
        for(var j=0; j<length-i; j++){
            //if it is a match, start a check run
            if(target[j] == input[i])
            {
                if(output < GetMatchSequenceLength(target,input,j,i,(length-i)))
                    output = GetMatchSequenceLength(target,input,j,i,(length-i));
            }
        }
    }
    return output;
}

function GetMatchSequenceLength(target,input,targetIndex,inputIndex,length){
    let output = 0;
    for(let i=0; i<length; i++){
        if(target[i+targetIndex] == input[i+inputIndex])
        {
            output++;
        }else{
            return output;
        }
    }
    return output;
}

function RandomNumberGenerator(min, max,length,repeat){
    var output = [];
    var localOutput;
    for (i=0 ; i<length; i++){
        localOutput=Math.floor(Math.random()*((max+1)-min)+min);
        output.push(localOutput);
        if(repeat == false){
            while(output.indexOf(localOutput) != i){
                localOutput=Math.floor(Math.random()*((max+1)-min)+min);
                output[i]=(localOutput);
            }
        }
    }
    return output;
}

function BreakdownSequence(input){
    let localInput = input;
    var output = [];
    var i = 0;
    while(localInput>0){
        output[i] = localInput %10;
        localInput = Math.floor(localInput /10);
        i++;
    }
    output = output.reverse();
    return output;
}

function JoinSequence(input){
    var output = 0;
    var localInput = input.reverse();
    for(var i=0; i<input.length;i++){
        output += localInput[i]*(Math.pow(10,i));
    }
    return output;
}

const minValue = 1;
const maxValue = 5;
const length = 3;
var targetArray = [];
var inputArray = [];
var outputInPosition, outputOutOfOrder, outputBestSequence = 0;

function onClickLottery(){
    targetArray = RandomNumberGenerator(minValue,maxValue,length,false);
    inputArray = [
        parseInt(document.getElementById("num1").value),
        parseInt(document.getElementById("num2").value),
        parseInt(document.getElementById("num3").value),
    ];
    outputInPosition =  CheckHowManyInPosition(targetArray, inputArray,length);
    outputOutOfOrder = CheckHowManyOutOfOrder(targetArray,inputArray,length);
    outputBestSequence = CheckBestSequence(targetArray,inputArray,length);
    
    document.getElementById("result").innerHTML = 
        ("Lottery number: "+targetArray) + "<br>" + "<br>" + 
        ("In the same place: "+outputInPosition) + "<br>" +
        ("Anywhere: "+outputOutOfOrder) + "<br>" +
        ("Your best sequence was "+outputBestSequence+" long");
}