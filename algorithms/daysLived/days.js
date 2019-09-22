/*======================================
            Input/Birth date        
======================================*/

var inputName = prompt("What is your name?");
var inputDay = parseInt(prompt("What day did you born on?"));
var inputMonth = parseInt(prompt("What month is your birthday on?"));
var inputYear = parseInt(prompt("What year did you born on?"));
//alert(inputYear + "  " + inputMonth + "  " + inputDay);
/*======================================
        Getting the current date
======================================*/
var today = new Date();
var todayDay = today.getDate();
var currentMonth = today.getMonth() + 1;
var currentYear = today.getFullYear();
//alert(currentYear + "  " + currentMonth + "  " + todayDay);
var calcAnswer;

/*======================================
         Check for Leap year
======================================*/
         
function IsItLeapYear(input){
    
    if ((input % 400) == 0){
        return true;
    }
    else if ((input % 100) == 0){
        return false;
    }
    else if ((input % 4) == 0){
        return true;
    }
    else return false;
console.log("is it leap year t/f?" + IsItLeapYear);
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
        // alert (localOuput);
        console.log("running month: " +i+". months so far: " + localOuput +", reverse :" + reverse);
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
        console.log("is it a leap year? " + i +"  "+ localOutput);
        if (IsItLeapYear(i)){
            localOutput += 366;
    ``  }
        else{
            localOutput += 365;
        }
        console.log("running year: "+i+". Dyas so far: " + localOutput);
    }
    
    return localOutput;
}
    /*============================================
      Calculating the difference between the days
    ============================================*/
      function CalculateDaysDiff(day1, day2){
          
          var localOutput = day2 - day1;

          console.log("running days: " + localOutput);
          return localOutput;
      }
   /*=============================================
                      Output 
   ==============================================*/
   if (IsItLeapYear()){
       calcAnswer = (CalculateYearToDays(inputYear, currentYear) + NumDaysBetweenMonths(inputMonth, currentMonth) + CalculateDaysDiff(inputDay, todayDay) - 1);
       
    } else{
        calcAnswer = (CalculateYearToDays(inputYear, currentYear) + NumDaysBetweenMonths(inputMonth, currentMonth) + CalculateDaysDiff(inputDay, todayDay));
    }
    
document.getElementById("output").innerHTML = "Hi " + inputName + " You born in: " + inputDay + "/" + inputMonth + "/" + inputYear + " which was " + calcAnswer + " days ago.";
