


// alert pops up with a message on screen//
alert("javascript is linked");



// console display ouput to the developer console//
 console.log("javascript is linked");


//String="whatever is between the speech marks"//
// declaring varibles

var name="Alexei";
var salary;
salary = 45000;

//console.log(name);
//console.log(salary);


/* naming convention for varbles
1. use camelcase
2. varbles should not start with numbers
3. varibles are case sensitive
4. Dont use keywords/reserved words */

//function nameOfFunction(){
  //  var salary = 67000;
   // console.log(name);
//}

//console.log(nameOfFunction);

//AN EXAMPLE OF RETRIEVE

var dom = document.getElementsByClassName("testClass");
var dom1= document.getElementsByClassName("test");
console.log(dom);
console.log(dom1);

//function update() {
  //  dom1
//}
// AN EXAMPLE  of CREATE

var newHeading = document.createElement("h1");
newHeading.innerHTML = "Created in JS";
document.body.appendChild(newHeading);

//An Example of Update
dom1.innerHTML = "Changed";

//return the title to our console
console.log(document.title);

//change title

document.title = "Completed";

var event1 = document.getElementById("mainimage").addEventListener('Click',nameOfFunction);

function nameOfFunction(){
    console.log("tests that the function is running ");
    alert("you clicked on the image");
}



var event2=
    document.getElementById("button1").addEventListener('click',buttonClick);

function buttonClick(){
   // alert("button has been  clicked");

    var userInput = document.getElementById("input1").value;
    console.log(userInput);
    document.getElementById("test").innerHTML = userInput;
}



var event4 =
    document.getElementById("button1").addEventListener('click',addNumbers);

function addNumbers() {
    var userInput1 = document.getElementById("input1").value;
    var userInput2 = document.getElementById("input2").value;
    //parseint covert into a  string into a number
    var sum = parseInt(userInput1) + parseInt(userInput2);
    console.log(sum);
    document.getElementById("test").innerHTML = sum;
}


//Syntax for an IF statement

/*if (statement that we will evaluate){

    if statement is true run this code
}

else{
    run this code
}*/

var temperature = 10;
if(temperature == 10 ){
    console.log("statement was true");

}
else{
    console.log("statement was false");
}


//syntax for an  else if statement


/*if(statement that will evaluate){
    run the code here
}
else if(statement to evaluet){
    run code here
}

else if (statement to evaluate){
    in none of the above do this
}*/









/*var event5=
    document.getElementById("button1").addEventListener('click',addNumbers);


function addNumbers(){
    var userInput1 = document.getElementById("input1").value;
    var userInput2 = document.getElementById("input2").value;
    var userInput3 = document.getElementById("input3").value;
    var sum = parseInt(userInput1) + parseInt(useInput2) < parseInt(userInput3);
    console.log("sum");
}

    if(input1 > input2){
        document.getElementById("test").innerHTML=sum;


    }
else
{
    document.getElementById("test").innerHTML=sum;
}*/




//var event1=
  //  document.getElementById("button1").addEventListener('click',theCondotion);
//function theCondition(){
  //  var numberFromUser=
      //  parseInt(document.getElementById("input1").value);

   // if(numberFromUser < 0){
     //   document.getElementById("test").innerHTML = "number is negative";
 //   }

   // else if(numberFromUser > 10){
     //   document.getElementById("test").innerHTML = "number is greater than 10";
   // }

  //  else if ( numberFromUser === 10){
   //     document.getElementById("test").innerHTML = "number is equal to 10";
  //  }
 //   else{
    //    document.getElementById("test").innerHTML = "number is less than 10";
   // }

//}


//Syntax Switch

switch(expression){
    case condition1: code to run/statement
    break;
    case condition2: code to run/statement
    break;
    case condition3: code to run/statement
    break;
    case condition4: code to run/statement
    break;

    default:code to run/statement





}



