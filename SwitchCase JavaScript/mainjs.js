//console.log("linked");

//Area where all my  GLOBAL varibles go
function todayTime(){

var gettingDate = new Date();
//console.log(gettingDate);
var day = gettingDate.getDay();

//console.log(day);
//returns hours
var hours = gettingDate.getHours();

//returns the minutes
var minutes = gettingDate.getMinutes();

if(minutes < 10){
    minutes = '10' + minutes;
}


//returns the seconds
var seconds = gettingDate.getSeconds();
var clock = "Current Time: " +hours + ":" +minutes + ":" +seconds;
console.log(clock);

var dayOfTheWeek;

switch(day){
    case 0: dayOfTheWeek = "Sunday";
    break;

    case 1: dayOfTheWeek = "Monday";
    break;

    case 2: dayOfTheWeek = "Tuesday";
    break;

    case 3: dayOfTheWeek = "wednesday"
    break;

    case 4: dayOfTheWeek = "Thursday"
    break;

    case 5: dayOfTheWeek = "Friday"
    break;

    case 6: dayOfTheWeek = "Satursday"
    break;

    default: "There has been an error and we are not able to display the day ";


 }

document.getElementById("display").innerHTML = dayOfTheWeek + "" +clock;
}

setInterval(todaysTime, 1000);
