str = "Username : Admin";
// applying split() method
arr = str.split(" ");
console.log(arr[2]); // Output: Admin

str = "JavaScript Concepts";
console.log(str.length); // Output: 19
console.log(str[0]); // Output: J   where 0 is the index of the character

str[0] = "Y"; // This will not change the string as strings are immutable
console.log(str); // Output: JavaScript Concepts

str1 = "    Hello World    ".trim(); // Removes both the white spaces
console.log(str1 + " " + str1.length)

str2 = "    Hello World    ".trimStart(); // Removes white space at starting
console.log(str2)

str3 = "    Hello World    ".trimEnd(); // Removes white space at ending
console.log(str3)

str4 = "Hello World".toUpperCase()
console.log(str4)

str5 = "HELLO WORLD".toLowerCase()
console.log(str5)

str6 = "python"
str6[0]
console.log(str6.charAt(0))

str7 = "hello this is javascript course"
console.log(str7.includes("is")) //true

// "A", "a" Javascript is case sensitive

// /n - new line

str8 = "*Automation Tester\n*Manual Tester\n*Api Testing"
console.log(str8)

//Partial string:
str9 = "This is a simple sentence"
st1 = str9.substring(5,8) // (Start index - included, End index - NOT included)
// That meas takes characters from index 5 up to 7.
// 5,6,7 and the entered character 8 is not included in the output.
console.log(st1) // Output = "is "

let str10 = "JavaScript";
console.log(str.substring(0,4)); // if the start is less than end, then it swaps the numbers.

str11 = "This is a simple sentence"
st2 = str11.slice(0,4)
console.log(st2)

console.log(str11.slice(-6));
// Negative indexes count from the end.

str12 = "This is a simple sentence"
str3 = str12.substr(0,4)
console.log(str12)
//Start at index 0 & take 4 characters.

// Replace Method
str13 = "**Automation Engineer**".replace("**", "^^")
console.log(str13)

//Replace Method using regular expression with global flag '/ /g'
str15 = "**Automation Engineer**".replace(/\*\*/g, "^^")
console.log(str15)

//ReplaceAll Method
str14 = "**Automation Engineer**".replaceAll("**", "^^")
console.log(str14)