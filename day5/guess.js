console.log("linked");
var randomNumber = Math.floor(Math.random()*101);
var counter = 0;
console.log(randomNumber);
//my event listner

var event1 = document.getElementById("btn2").addEventListener('click', resultguess);


//my guess number funstion taht will read the user input and alert  them if they are close to gusing

function resultguess(){
    console.log("function strart");
    var guess = document.getElementById("guess").value;
    console.log(guess);
    if(guess ===  randomNumber){
        document.getElementById("result").innerHTML= "correct guess!";
        counter = counter +1;
        document.getElementById("counterresult").innerHTML = "you had" + conuter + "attempts!"
    }else if(guess > randomNumber){
        document.getElementById("compareresult").innerHTML = "your guess is too small";
        conuter = counter + 1;
    }else {
        document.getElementById("compareresult").innerHTML = "your guess is to small";
        conuter = conuter + 1;
    }
}
