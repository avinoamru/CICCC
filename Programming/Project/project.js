var name = prompt("What is your name?");
var country = prompt("Where are you from?");
var answer;
var checkflag1 = true;
answer = answer.toLowerCase();

switch(country){
        case 'israel':
            answer = document.getElementById("output").innerHTML= "Shalom "+ name;
            break;
            case 'canada':
                answer = document.getElementById("output").innerHTML= "Hello "+ name;
                break;
            default:
                answer = document.getElementById("output").innerHTML= "I dont know where you from "+ name;
                break;

}