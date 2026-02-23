console.log(6+"9") //"69" 6 number was converted into String.

console.log("Lakshmi" + "Palaka") //LakshmiPalaka _ type conversion

console.log(3+4+5+6+"6"+4+5) //18645 untill 6 number, it will get added & from string "6" it will be converted to string and the rest of 4 & 5 were also converted into String.

console.log("3"+4+5+6+"6"+4+5) //3456645 As 3 is only string, the rest of the numbers were converted into String.

console.log(34 -"Lakshmi") // as Lakshmi is a string, it will try to convert, but as there is no concatination "+" here, it will not convert. it will display "NaN _ Not a Number"

//Note: If [+, -, *, /, % ] it is in the form of convertable numbers then it will convert, if not it will display "NaN"