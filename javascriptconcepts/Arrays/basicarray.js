arrayname = []

arr = [] // empty array

arr1 = [1, 2, 3, 4, 5, 6] // array with data

arr2 = ["Lakshmi", "Bharani", "Palaka"]

arr3 = [1, "Bharani".true, { firstname: "Lakshmi", lastname: "P" }]

arr4: number = [1, 2, 3, 4, 5] // valid [1, 2, 3, 4, "Bharani"] //Invalid

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

// Reversed string
str3 = "HelloWorld"
reversedStr = str3.split("").reverse().join("") // Reverses the string
console.log(reversedStr) // Output: "dlroWolleH"

// adding the elements at the end of the array using push method - opp is pop method which is used to remove the last element of the array
arrpush = ["eatwell", "livewell"]

arrpush.push("staywell") // Adds "staywell" to the end of the array

arrpush.push("be well") // Adds "be well" to the end of the array

console.log(arrpush) // Output: ["eatwell", "livewell", "staywell", "be well"]

//Unshift method is used to add the elements at the beginning of the array - opp is shift method which is used to remove the first element of the array
arrunshift = ["eatwell", "livewell"]

arrunshift.unshift("staywell") // Adds "staywell" to the beginning of the array     

arrunshift.unshift("be well") // Adds "be well" to the beginning of the array

console.log(arrunshift) // Output: ["be well", "staywell", "eatwell", "livewell"]   

//pop method is used to remove the last element of the array
arrpop = ["eatwell", "livewell", "staywell", "be well"]

arrpop.pop() // Removes the last element "be well" from the array       

console.log(arrpop) // Output: ["eatwell", "livewell", "staywell"]

//shift method is used to remove the first element of the array

arrshift = ["be well", "staywell", "eatwell", "livewell"]

arrshift.shift() // Removes the first element "be well" from the array

console.log(arrshift) // Output: ["staywell", "eatwell", "livewell"]

//includes method is used to check if an element exists in the array or not. It returns true if the element exists, otherwise it returns false.
arrincludes = ["eatwell", "livewell", "staywell", "be well"]

console.log(arrincludes.includes("livewell")) // Output: true

console.log(arrincludes.includes("healthy")) // Output: false

//Slice method is used to extract a portion of an array and returns a new array. It does not modify the original array.
arrslice = ["eatwell", "livewell", "staywell", "be well"]

slicedArr = arrslice.slice(1, 3) // Extracts elements from index 1 to index 2 (3 is not included)

console.log(arrslice) // Output: ["eatwell", "livewell", "staywell", "be well"] - Original array remains unchanged
console.log(slicedArr) // Output: ["livewell", "staywell"]

//splice method is used to add or remove elements from an array. It modifies the original array.
arrsplice = ["eatwell", "livewell", "staywell", "be well"]

arrsplice.splice(2, 1) // Removes 1 element at index 2 ("staywell")

console.log(arrsplice) // Output: ["eatwell", "livewell", "be well"] - Original array is modified

//indexof method is used to find the index of the first occurrence of an element in the array. It returns -1 if the element is not found.
arrindexof = ["eatwell", "livewell", "staywell", "be well"]

console.log(arrindexof.indexOf("staywell")) // Output: 2
console.log(arrindexof.indexOf("healthy")) // Output: -1

//map method is used to create a new array by applying a function to each element of the original array. It does not modify the original array.
arrmap = [1, 2, 3, 4, 5]

mappedArr = arrmap.map(x => x * 2) // Multiplies each element by 2

console.log(arrmap) // Output: [1, 2, 3, 4, 5] - Original array remains unchanged
console.log(mappedArr) // Output: [2, 4, 6, 8, 10]

//filter method is used to create a new array with all elements that pass the test implemented by the provided function. It does not modify the original array.
arrfilter = [1, 2, 3, 4, 5]

filteredArr = arrfilter.filter(x => x % 2 === 0) // Filters out even numbers

console.log(arrfilter) // Output: [1, 2, 3, 4, 5] - Original array remains unchanged
console.log(filteredArr) // Output: [2, 4]

//reduce method is used to apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. It does not modify the original array.
arrreduce = [1, 2, 3, 4, 5] 

reducedValue = arrreduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0) // Sums all elements in the array

console.log(arrreduce) // Output: [1, 2, 3, 4, 5] - Original array remains unchanged
console.log(reducedValue) // Output: 15

//find method is used to return the value of the first element in the array that satisfies the provided testing function. It returns undefined if no elements satisfy the condition.
arrfind = [1, 2, 3, 4, 5]

foundValue = arrfind.find(x => x > 3) // Finds the first element greater than 3

console.log(arrfind) // Output: [1, 2, 3, 4, 5] - Original array remains unchanged
console.log(foundValue) // Output: 4

//findindex method is used to return the index of the first element in the array that satisfies the provided testing function. It returns -1 if no elements satisfy the condition.
arrfindindex = [1, 2, 3, 4, 5]

foundIndex = arrfindindex.findIndex(x => x > 3) // Finds the index of the first element greater than 3

console.log(arrfindindex) // Output: [1, 2, 3, 4, 5] - Original array remains unchanged 

console.log(foundIndex) // Output: 3

//forEach method is used to execute a provided function once for each array element. It does not modify the original array.
arrforeach = [1, 2, 3, 4, 5]

arrforeach.forEach(x => console.log(x * 2)) // Logs each element multiplied by 2

console.log(arrforeach) // Output: [1, 2, 3, 4, 5] - Original array remains unchanged

//forof method is used to iterate over the elements of an array. It does not modify the original array.
arrforof = [1, 2, 3, 4, 5]

for (const element of arrforof) {

    console.log(element * 2) // Logs each element multiplied by 2

}

console.log(arrforof) // Output: [1, 2, 3, 4, 5] - Original array remains unchanged

//every method is used to test whether all elements in the array pass the test implemented by the provided function. It returns true if all elements pass the test, otherwise it returns false.
arrevery = [1, 2, 3, 4, 5]

console.log(arrevery.every(x => x > 0)) // Output: true - All elements are greater than 0
console.log(arrevery.every(x => x > 3)) // Output: false - Not all elements are greater than 3

//some method is used to test whether at least one element in the array passes the test implemented by the provided function. It returns true if at least one element passes the test, otherwise it returns false.
arrsome = [1, 2, 3, 4, 5]

console.log(arrsome.some(x => x > 4)) // Output: true - At least one element is greater than 4
console.log(arrsome.some(x => x > 5)) // Output: false - No elements are greater than 5

