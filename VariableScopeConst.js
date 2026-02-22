// Scope using "const" keyword, can not be used outside of the block of code.

if(2>1) {
const x = "for x variable const is 'Block Scope'"
console.log(x)
}
const x = "for x variable const is 'Block Scope'"
console.log(x)
if(2==2) {
const x = "for x variable const is 'Block Scope'"
console.log(x)
if(5<7) {
//const x = "for x variable const is 'Block Scope'"
console.log(x)
}
}

var z = ".........................................."
console.log(z)

const y = "for y variable const is 'Block Scope'"

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