/*======================================
            Input/Birth date        
======================================*/

var inputName = prompt("What is your name?");
var inputDay = parseInt(prompt("What day did you born on?"));
var inputMonth = parseInt(prompt("What month is your birthday on?"));
var inputYear = parseInt(prompt("What year did you born on?"));

/*======================================
        Getting the current date
======================================*/
var today = new Date();
var todayDay = today.getDate();
var currentMonth = today.getMonth() + 1;
var currentYear = today.getFullYear();

/*======================================
         Check for Leap year
======================================*/
         
         function isItLeapYear(input){
             if ((input % 400) === 0){
                 return true;
                }
                else if ((input % 100) === 0){
                    return false;
                }
                else if ((input % 4) === 0){
                    return true;
                }
                else return false;
            }

/*======================================
Number of Days in each month
======================================*/
function NumDaysBetweenMonths(month1, month2){
    var localOuput = 0;
    var reverse = false;
    var swap;
/*=========================================================
    swap the months value incase the inputed month
     is greater then current month to count backwards
 ========================================================*/
     if (month1 > month2){
        reverse = true;
        swap = month1;
        month1 = month2;
        month2 = swap;
    }

    for (var i=month1; i < month2; i++){

        switch (i){
            case 1:
                localOuput += 31;
                break;
            case 2:
                localOuput += 28;
                break;
            case 3:
                localOuput += 31;
                break;
            case 4:
                localOuput += 30;
                break;
            case 5:
                localOuput += 31;
                break;
            case 6:
                localOuput += 30;
                break;
            case 7:
                localOuput += 31;
                break;
            case 8:
                localOuput += 31;
                break;
            case 9:
                localOuput += 30;
                break;
            case 10:
                localOuput += 31;
                break;
            case 11:
                localOuput += 30;
                break;
            case 12:
                localOuput += 31;
                break;
        }
    }
        if(reverse){
            return -localOuput;
        }
        else{
            return localOuput;
        }
}

/*======================================
       Number of days in year/leap year
======================================*/
function CalculateYearToDays (year1, year2){
    var localOutput = 0;
    
    for (i = year1; i < year2; i++){
        if (isItLeapYear(i)){
            localOutput += 366;
        }
        else{
            localOutput += 365;
        }
    }
    
    return localOutput;
}
    /*============================================
      Calculating the difference between the days
    ============================================*/
      function CalculateDaysDiff(day1, day2){
          
          var localOutput = day1 - day2;
          
          return localOutput;
        }
        

 document.getElementById("output").innerHTML = "Hi " + inputName + " You born in: " + inputDay + "/" + inputMonth + "/" + inputYear + " which was " +  CalculateYearToDays(inputYear, currentYear) + NumDaysBetweenMonths(inputMonth, currentMonth) + CalculateDaysDiff(inputDay, todayDay) + " days ago.";
