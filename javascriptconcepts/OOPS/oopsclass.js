function add() {

}
function sub() {

}
function div() {

}

class classname {
    add() {

    }
    sub() {

    }
    div() {

    }
}

class calculator {
    x = "Rama"
    y = "Srii rama"
    add(num1, num2) {
        console.log(num1 + num2)
    }
    sub(num1, num2) {
        console.log(num1 - num2)
    }
    div(num1, num2) {
        console.log(num1 / num2)
    }

}

const call = new calculator()

call.add(4, 9)

call.div(4, 12)

console.log(call.x)
console.log(call.y)
console.log("----------------------------------------------------------")

//----------------------------------------------------------

// Constructor

class newcalculator {

    //     printMessage() {
    //     console.log("This is javascript message")
    //   }

    constructor() {
        console.log("This is javascript message")
        console.log("----------------------------------------------------------")
    }
    add(num1, num2) {
        console.log(num1 + num2)
    }
    sub(num1, num2) {
        console.log(num1 - num2)
    }
    div(num1, num2) {
        console.log(num1 / num2)
    }

}

const cal2 = new newcalculator()

//cal2.printMessage()

//--------------------------------------------------------------

// Constructor is a method which will be automatically invoked.


class brandnewcal {

    x = "Constructor"
    y = "Message"

    printMessage() {
        console.log("This is a constructor message")
    }
    constructor(num1, num2) {
        console.log(num1 + num2)
    }
    sub(num1, num2) {
        console.log(num1 + num2)
    }
    div(num1, num2) {
        console.log(num1 + num2)
    }
}

const bnc = new brandnewcal(15, 15)
const bnc1 = new brandnewcal(20, 20)
const bnc2 = new brandnewcal(30, 30)
console.log("----------------------------------------------------------")

//------------------------------------------------------

// this keyword

class student {
    x = "Lakshmi"
    y = "Bharani"

    m1() {
        console.log("This is a m1 method")
    }
    m2() {
        console.log("This is a m2 method")
    } 
    m3() {
        console.log("This is a m3 method")
    } 
    m4() {
        console.log("This is a m4 method")
    } 
    m5() {
        console.log("This is a m5 method")
        this.m1()
        this.m3()
        

        console.log(this.y)
    }

}

const stu1 = new student()

stu1.m5()
console.log("----------------------------------------------------------")

//---------------------------------------------------

// static keyword

class studentstaticc {
    x = "Lakshmi"
   static y = "Bharani"

    m1() {
        console.log("This is a m1 method")
    }
    static m2() {
        console.log("This is a m2 method")
    } 
    m3() {
        console.log("This is a m3 method")
    } 
    static m4() {
        console.log("This is a m4 method")
    } 
    m5() {
        console.log("This is a m5 method")
    }
}

console.log(studentstaticc.y)
console.log("----------------------------------------------------------")

studentstaticc.m2()
studentstaticc.m4()

class studentstatic {
    x = "Lakshmi"
   static y = "Bharani"

    m1() {
        console.log("This is a m1 method")
        this.m2()
    }
    static m2() {
        console.log("This is a m2 method")
    } 
    m3() {
        console.log("This is a m3 method")
    } 
    static m4() {
        console.log("This is a m4 method")
        this.m1()
    } 
    m5() {
        console.log("This is a m5 method")
        this.m4()
    }
}

console.log(studentstatic.y)
console.log("----------------------------------------------------------")

studentstatic.m2()