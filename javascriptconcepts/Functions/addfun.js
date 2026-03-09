//Parameterization of function
function add() {
    console.log("This is add function")
    console.log(5)
    console.log(10)
    console.log(5+10)
}

// funtion with parameters
function add(num1, num2) {
    console.log(num1 + num2)
}

add(10, 20)

//Default parameters
function add(num1 = 5, num2 = 10) {
    console.log(num1 + num2)
}

function printName(name) {
    console.log("hello " + name)
}

printName("LakshmiJagadish")

printName() 
// It will print hello undefined because we have not passed 
// Any value to the function and the parameter name is undefined.

function printName(name = "Palaka") {
    console.log("hello " + name)
}

printName()
// it will print hello Palaka because we have assigned a default value to the parameter name.

function printName(name = "Palaka", greeting = "Hello") {
    console.log("hi" + " " + name +  " " + greeting)
}

printName()

// it will print Hello Hi Palaka because we have assigned default values to both parameters name and greeting.

printName("Jagadish", "Welcome")
// it will print Welcome Hi Jagadish because we have passed values to both parameters name and greeting.
// It overrides the default values assigned to the parameters name and greeting.


function add() {
    return 5 + 10
}

add() 
// It will return 15 because the function add is returning the sum of 5 and 10. 

console.log(add())
// It will print 15 because the function add is returning the sum of 5 and 10 and we are printing the return value of the function add.     

function randomNumber() {
    return "369874125074"
}

console.log(randomNumber())
// It will print 369874125074 because the function randomNumber is returning the string "369874125074" 
// We are printing the return value of the function randomNumber.

// Utilities - A generic function, which can be used in multiple places in our code.