student = {
    name: "Lakshmi",
    age: 25,
    city: "Bangalore",
    hobbies: ["Reading", "Cooking", "Traveling"],
    details: { father: "Srinu", mother: "Latha" }
}
console.log("Student Name: " + student.name) // this will print the name of the student
console.log("Student Age: " + student.age) // this will print the age of the student
console.log("Student City: " + student.city) // this will print the city of the student
console.log("Student Hobbies: " + student.hobbies[0]) // this will print the first hobby of the student
console.log("Student Father: " + student.details.father) // this will print the name of the father of the student
console.log("Student Mother: " + student.details.mother) // this will print the name of the mother of the student
console.log(student) // this will print the entire student object
console.log("Student Hobbies: " + student.hobbies) // this will print the hobbies of the student
console.log(student.details) // this will print the details of the student     

student['qualification'] = "B-tech" // this will add a new property called qualification to the student object with the value "B-tech"
student['department'] = "CSE" // this will add a new property called department to the student object with the value "CSE"

console.log(student) // this will print the entire student object with the new properties

delete student.age // this will delete the age property from the student object
console.log(student) // this will print the entire student object without the age property
