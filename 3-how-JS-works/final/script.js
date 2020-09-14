/////////////////////////////////////
// Lecture: Hoisting
/****Refer->https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

hoisting suggests that variable and function declarations are physically moved to the top of your code, but this is not in fact what happens. 
Instead, the variable and function declarations are put into memory during the compile phase, but stay exactly where you typed them in your code.

JavaScript puts function declarations into memory before it executes any code segment is that it allows you to use a function before you declare it in your code.
Hoisting works well with other data types and variables. The variables can be initialized and used before they are declared.
JavaScript only hoists declarations, not initializations.
If a variable is declared and initialized after using it, the value will be undefined
console.log(num); // Returns undefined, as only declaration was hoisted, no initialization has happened at this stage 
var num; // Declaration
num = 6; // Initialization
---------------------another ex.
console.log(num); // Throws ReferenceError exception as the variable wasnt declared.
num = 6; // Initialization
****/
/*
// functions
calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}

// retirement(1956);
var retirement = function(year) {
    console.log(65 - (2016 - year));
}
//hosting doesnt work with fn expressions.


// variables

console.log(age);
var age = 23;

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
*/



/////////////////////////////////////
// Lecture: Scoping

/*
// First scoping example
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}


// Example to show the differece between execution stack and scope chain
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    //console.log(c);
    console.log(a+d);
}
*/



/////////////////////////////////////
// Lecture: The this keyword

/*
//console.log(this);

calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);          //prints window
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);  // prints john
        console.log(2016 - this.yearOfBirth);
        
        function innerFunction() {
            console.log(this); //prints window since this is not method but a function
        }
        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};


mike.calculateAge = john.calculateAge; ///method borrowing.
mike.calculateAge();
*/
