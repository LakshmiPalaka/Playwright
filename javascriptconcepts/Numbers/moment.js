const moment = require ('moment')

// Format Dates

console.log("....................................." + "Format Dates")

x = moment(). format('MMMM Do YYYY, h:mm:ss a')
console.log(x)

x = moment().format('dddd'); 
console.log(x)

x = moment().format("MMM Do YY"); 
console.log(x)

x = moment().format('YYYY [escaped] YYYY'); 
console.log(x)

x = moment().format();  
console.log(x)

// Relative Time

console.log("....................................." + "Relative Time")


x = moment("20111031", "YYYYMMDD").fromNow();
console.log(x)

x = moment("20120620", "YYYYMMDD").fromNow();
console.log(x)

x = moment().startOf('day').fromNow(); 
console.log(x)

x = moment().endOf('day').fromNow();
console.log(x)

x = moment().startOf('hour').fromNow(); 
console.log(x)

// Calender Time

console.log("....................................." + "Calender Time")

x = moment().subtract(10, 'days').calendar(); 
console.log(x)

x = moment().subtract(6, 'days').calendar();  
console.log(x)

x = moment().subtract(3, 'days').calendar();  
console.log(x)

x = moment().subtract(1, 'days').calendar();  
console.log(x)

x = moment().calendar();                      
console.log(x)

x = moment().add(1, 'days').calendar();  
console.log(x)

x = moment().add(3, 'days').calendar();  
console.log(x)

x = moment().add(10, 'days').calendar(); 
console.log(x)

// Multiple Locale Support

console.log("....................................." + "Multiple Locale Support")

x = moment.locale();         
console.log(x)

x = moment().format('LT');   
console.log(x)

x = moment().format('LTS');  
console.log(x)

x = moment().format('L');    
console.log(x)

x = moment().format('l');    
console.log(x)

x = moment().format('LL');   
console.log(x)

x = moment().format('ll');   
console.log(x)

x = moment().format('LLL');  
console.log(x)

x = moment().format('lll');  
console.log(x)

x = moment().format('LLLL'); 
console.log(x)

x = moment().format('llll');
console.log(x)

const date = moment().format('YYYY/MM/DD');
console.log(date);