// Scope using "Var" keyword, can be used with in a block and outside of the block of code.

var x = "var is 'Global Scope'"

if(2>1) {
console.log(x)
}

console.log(x)

if(2==2) {
console.log(x)

if(5<7) {
console.log(x)
}

}

var y = "........................................"
console.log(y)


if(2>1) {
var x = "var is 'Global Scope'"
console.log(x)
}
console.log(x)
if(2==2) {
console.log(x)
if(5<7) {
console.log(x)
}
}
