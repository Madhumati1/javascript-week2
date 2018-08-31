//var cars = 0;
//console.log("before the start of the loop");
//while ( cars < 10){
//    console.log("during the loop");
//    console.log("number of cars" + cars);
//    cars++;
//}
//console.log("the loop has ended");


 //-----------syntax for the do while loop------------

//var boats = 0;
//do{
//
//    console.log("the amount of boats that we own" +boats);
//    boats++;
//}while(boats == 2);


//------------while loop----------------
//var cars=0;
//while(cars < 10){
//    cars++;
//    document.getElementById("display").innerHTML+= cars + "<br>";
//}
//
//
////----------do while loop--------------
//var i=0
//do{
//    i++;
//    document.getElementById("display").innerHTML+= i +"<br>";
//}
//while(i<10);


//-------------Nested loop-----------------
//var i = 1;
//var j = 1;
//
//var counters = 0;
//var counters1 = 0;
//
//for(i; i<=10; i++){
//
//    for(j; j<=10; j++){
//
//        // runs the nested loop first
//
//        counters = counters + j + ", ";
//        console.log(counters) //test the varibles
//    }
//
//
////runs this loop next
//counters1 = counters1 + i + ",";
//}
//
//document.getElementById("display"). innerHTML = counters + " "
//+ counters1;
//


//-----------------------------ARRAY----------------------------

//var test = 0;
//// easiest way to declare array
//var newArray =[ "ferrari", "lambo" ,"antoher car", "test"];
//
////alternative
////var cars = new Array("ferrari", "lambo");
//
//console.log(newArray);
////console.log(cars);
//
////an array is a collection of anything
//var testArray = [1, "String",true, null, undefined];
//console.log(testArray[1]);


//new array function
//var test = 0;
//var colors = ["red","green","yellow"];
//for(var i=0; i<colors.length; i++)
//    {
//        var testArray = ["red", "green","yellow"];
//        console.log(colors[i]);
//    }


var items = ["apples", "grapes", "bananas", "oranges"];

//inbuilt methods
// shift removes the frist element and returns it
console.log(items.shift());
console.log(items);

//unshift adds an element to the bignning of arry
console.log(items.unshift("Mango"));
console.log(items);

//push adds an element to the end of the array
console.log(items.push("cherry", "strawberry","Gooseberries"));
console.log(items);

var a = "test1";
var b = "test2";
var c = "test3";

items.push(a,b,c)
console.log(items);
//Makes submit button action when clicked
var event1 = document.getElementById("button1").addEventListener('click', task1);
//creare function for what happens after button is clicked
//function task1(){
//    //test button works
//    console.log("task1 is working");
//
//// create the array
//    var testArray = [];
////captures first input
//    var userInput1 = document.getElementById("input1").value;
//    //test that input is captured
//    console.log(userInput1);
//    //captures second input
//    var userInput2 = document.getElementById("input2").value;
//    //captures third input
//    var userInput3 = document.getElementById("input3").value;
//    //tests that all inputs are collected
//    console.log(userInput1, userInput2, userInput3);
//    //adds inputs to an array
//    testArray.push(userInput1,userInput2, userInput3);
//    console.log(testArray);
//
////prints input to the webpage
//
//document.getElementById("display").innerHTML = testArray;
//}

//// display the array and the lenght of the array using array.lenght on webpage
//var arr = ('1', '2', '3')
//console.log("array");
//arr.length = 3;
//var event = document.getElementById("button1").addEventListener('click', num);
//function num()
//{
//    var length = arr.length;
//    for( var i=0; i<length; i++)
//    console.log(arr[i]);
//}
//var testArray = [];
//var userinput1 = document.getElementById("input1").value;
//var userinput2 = document.getElementById("input2").value;
//var userinput = document.getElementById("input3").value;
//document.getElementById("display").innerHTML = testArray;
//
//
/////  add and remove frist and last element  on and off an array using shift, unshift,pop,push
//var cloths = ["shoes", "socks", "shirts"];
//console.log(cloths.shift());
//console.log(cloths);
//
//console.log(cloths.unshift("Tishirt"));
//console.log(cloths);
//
//console.log(cloths.push("jacket","blezar"));
//console.log(cloths);
//
//console.log(cloths.pop());// output blezar
//console.log(cloths); //shoes socks shirts tishirt
//console.log();
//console.log(cloths);

//var result = cloth


//// add to an array at aspecific index point in the array
//
//var array = [];
//array[0]="a";
//array[1]="b";
//array[2]="c";
//console.log(array.join());
//array.splice(2, 0, "D");
//console.log(array.join());
//
////array varible with 10 element and using for loop display on webpage
//
//var i=0;
//for(var i=0; i<10; i++){
//
//    document.getElementById("display").innerHTML += i + "<br>";
//}
//
//
function task1(){
var countryArray = ["England", "France", "Italy"
,"Mexico", "Poland", "Russia", "China", "Greece", "Egypt", "India"];


//create user input varble

var userInput1 = document.getElementById("input1").value;

var searchResult = countryArray.indexOf(userInput1, 0);
console.log(searchResult);

if( searchResult == -1){
    document.getElementById("display").innerHTML = "country is not present in our list";
}
 else{
     document.getElementById("display").innerHTML = "country is not present in our list" +searchResult + "<br>";
 }



   }






