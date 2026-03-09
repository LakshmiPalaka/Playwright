arrayname = []

arr = [] // empty array

arr1 = [1,2,3,4,5,6] // array with data

arr2 = ["Lakshmi", "Bharani", "Palaka"]

arr3 = [1, "Bharani". true, {firstname: "Lakshmi", lastname: "P"}]

arr4 : number = [1, 2, 3, 4, 5] // valid [1, 2, 3, 4, "Bharani"] //Invalid

//arr2[Index] // Syntax

console.log(arr2[1]) // Output: "Bharani"

arr2[1] = "Bharani Palaka" // Update the value at index 1
console.log(arr2[1]) // Output: "Bharani Palaka"

const credentials = ["Admin", "admin123"]

credentials[0]

credentials[1]

console.log("Username: " + credentials[0]) // Output: "Username: Admin"
console.log("Password: " + credentials[1]) // Output: "Password: admin123"

// Merging two arrays
arr5 = arr2.concat(arr1) 
console.log(arr5) // Output: ["Lakshmi", "Bharani Palaka", 1, 2, 3, 4, 5, 6] 

//sorting of an array
arr6 = [5, 2, 8, 1, 4]
arr6.sort() // Sorts the array in ascending order
console.log(arr6) // Output: [1, 2, 4, 5, 8]

//reverse an array
arr7 = ["Apple", "Banana", "Cherry"]
arr7.reverse() // Reverses the array
console.log(arr7) // Output: ["Cherry", "Banana", "Apple"]

//ascending order
arr8 = [5, 2, 8, 1, 4]
arr8.sort((a, b) => a - b) // Sorts the array in ascending order
console.log(arr8) // Output: [1, 2, 4, 5, 8]

//descending order
arr9 = [5, 2, 8, 1, 4]
arr9.sort((a, b) => b - a) // Sorts the array in descending order
console.log(arr9) // Output: [8, 5, 4, 2, 1]

//joining of a string
arr10 = ["Hello", "World"]
joinedString = arr10.join(" ") // Joins the array elements into a string with a space separator
console.log(joinedString) // Output: "Hello World"

//converting a string to an array
str = "Hello,World,JavaScript"
arr11 = str.split(",") // Splits the string into an array using a comma as a separator
console.log(arr11) // Output: ["Hello", "World", "JavaScript"]

//split the string into an array of characters
str2 = "HelloWorld"
arr12 = str2.split("o") // Splits the string into an array of characters
//In this case, split("o") is working as a separator.
//It will split the string at every occurrence of the character "o" and create an array of the resulting substrings.
console.log(arr12) // Output: ["Hell", "W", "rld"]

//split the string into an array of characters using a regular expression
str2 = "HelloWorld"
arr12 = str2.split(/(o)/)
console.log(arr12) // Output: ["Hell", "o", "W", "o", "rld"]

// Splits the string into an array of characters
str2 = "HelloWorld"
arr12 = str2.split("") 
console.log(arr12) // Output: ["H", "e", "l", "l", "o", "W", "o", "r", "l", "d"]

