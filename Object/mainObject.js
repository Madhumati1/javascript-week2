//-------------Syntax Object-------------------

//An Object is an unordered collection of properties. An Object is comprised of name, value pairs.

var students =  new Object();

//the [] brackets are an operator that takes the students object and sets the property using a string
students["FristName"] = "MAdhu";
students["surname"] = "NotRealSurname";

console.log(students);
// created a var hold yhe students firstNAme to return is/
var firstNameProperty = "firstName";

console.log(students[firstNameProperty]);
 //this is better practice  howerver, the syntax parser will understand both.

console.log(students.FristName);
console.log(students.surname);

students.address = new Object();

// the dot works from to right creating new name value pairs.
students.address.doorNumber = 150;
students.address.roadNumber = "Minories";
students.address.postcode = "EC1 XYZ";

// check the nested object within memory
console.log(students);

console.log(students.address.doorNumber);

//declaring an Object
// whenever the syntax parser sees the curly brackets will be viewed as a new object
var chocolate = {

    "brand": "Twix",
    "numberOfBars": 2,
    "color": "Gold",


prices: {//
    currency: "£",
    country: "UK",
    shop: "Tesco"

   },
    "ourFunction": function(){
        return chocolate.numberOfBars;
    }
}

console.log(chocolate["brand"], chocolate["color"]);
//console.log(chocolate. prices.currency);

function greetings(){
    console.log("Good Moring");
}


greetings.language= "English";
console.log(greetings.language);

console.log(chocolate.ourFunction());

//aggregation - the ability to have objects within an object

//Encapsulation- the ability to store related information whether data (primitive types),methods together in an object

// polymerphisum - to have one function/methods that works in more than one way]

//inheritance - the ability for classes to reply upon each other for its properties and methods



//1. create an object literal with 3 properties
//return each value from the name/value pair to console

var fruits = ("orange: o","apple: a", "bannana: b");
fruits["Fristname"] = "orange";
fruits["secondname"] = "apple";
fruits["thirdname"] = "bannana"
console.log(fruits);
// created a var hold yhe students firstNAme to return is/
var firstNameProperty = "firstName";

console.log(fruits[firstNameProperty]);
 //this is better practice  howerver, the syntax parser will understand both.

console.log(fruits.Fristname);
console.log(fruits.secondname);
console.log(fruits.thirdname);

// create an object with properties and a methods access the methode(display on screen)

var cloths ={ "shirts": "s", "Tshirt": "t","socks":"s" ,
"ourfunction" : function(){
    return : cloths.numbersdress;

},
    console.log(cloths["brand"], cloths["colors"]);

}




// crearte an object within an object (nested) and dispaly a nested object property an the webpage.











