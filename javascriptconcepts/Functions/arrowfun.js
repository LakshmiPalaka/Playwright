// Syntax for normal function

function hello() {

    console.log("Hello World")

}
hello()

// -------------------------------------------------------

// Syntax for Arrow function when there is only a single statement. 

hello = () =>  console.log("Hello World with arrow function")

hello()

// -------------------------------------------------------


// Syntax for Arrow function when there is only a multiple statements. 

hello = () =>  {
   
    console.log("Hello World with arrow function and multiple statements")
   
    console.log("This is a multiple statement arrow function")
}

hello()

// -------------------------------------------------------

function printgreeting(name) {

    console.log("Hello " + name)              

}

printgreeting("LakshmiJagadish")

// -------------------------------------------------------

// Multiple parameters in arrow function

function add(num1, num2) {

    console.log(num1 + num2)   

}

add(10, 20)

// -------------------------------------------------------

// Default parameters in arrow function

printgreeting = (name="Lakshmi") => console.log("Hello " + name)

printgreeting()

// Callback , higher order, closure functions.