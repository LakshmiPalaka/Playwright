// Scope using "let" keyword, can not be used outside of the block of code.

if(2>1) {
let x = "for x variable let is 'Block Scope'"
console.log(x)
}
let x = "for x variable let is 'Block Scope'"
console.log(x)
if(2==2) {
let x = "for x variable let is 'Block Scope'"
console.log(x)
if(5<7) {
//let x = "for x variable let is 'Block Scope'"
console.log(x)
}
}

var z = ".........................................."
console.log(z)

let y = "for y variable let is 'Block Scope'"

if(2>1) {
console.log(y)
}
console.log(y)
if(2==2) {
console.log(y)
if(5<7) {
console.log(y)
}
}