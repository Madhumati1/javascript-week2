console.log("working");

var event1 = document.getElementById("btn1").addEventListener('click', addTOArray);

var event2 = document.getElementById("btn2").addEventListener('click', generate);
// gloabal var
var myArray = [];

//add to array
function addTOArray() {
    var x = document.getElementById("add").value;
    myArray.push(x);
    console.log(myArray);
    displayArray();

}


//select random number inarray


function generate(){
    //random select a member  of the arry
    var show = myArray[Math.floor(Math.random()*myArray.length)];
    var winner  ="<h1 id = 'thewwinner'>" + show + "!" + "</h1>";
    //alert (show)
    //output onto webpage
    document.getElementById("randomWinner").innerHTML = winner;
    }


function displayArray(){
    var index;
    var text = "<ul>";
    for (index = 0; index < myArray.length; index++){

        if (index === 0){
            text += "<div><span> the entries are:</span></li>" +myArray[index] + "</li></div>";

        }
        else{
            text += "<div><li>" +myArray[index] +"</li></div>;"
        }
    }
        text += "</ul>";
        document.getElementById("listArray").innerHTML = text;
    }


var sumbit = document.getElementById("subBtn").addEventListener('click', addName);
console.log(sumbit);

var gen = document.getElementById("genBtn").addEventListener('click', selectWinner);
console.log(gen);

// gloabal var
var nameList = [];

//add to array
function addName() {
    var a = document.getElementById("namwInput").value;
    myArray.push(a);
    var nameArray = nameList.push(a);

    console.log(nameList);
    document.getElementById("printNames").innerHTML = "List of potential winners :" + " " + nameList;

}


function selctWinner() {
    var winner = nameList[Math.floor(Math.random()  * nameList.length)];
    document.getElementById("printWinner").innerHTML = "The Winner Is:" + " " + winner + " " + "!!!";
    console.log(winner);
}








































