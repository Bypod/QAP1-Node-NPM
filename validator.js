//npm install 2.
const val = require('validator')
// this package is a built in library for different types of strings that are commonly found

console.log(val.isEmail('john.byrne@keyin.com')) // validating if the string perameter is an email or not, will return boolean value
console.log(val.isEmpty('')) // this is validated to see if it is ann empty string which it is
console.log(val.isURL('1234-me')) // validated to see if the string is a url in this case it is not
console.log(val.isHexColor('04f5e1')) //checks to validate if this is a hex colour

//some sanitizers in validator js
console.log(val.blacklist('J*ohn', '*')) //blacklist removes whatever characters are in the second parameter from the first
console.log(val.escape('Byrne & Co.')) // replaces <, >, &, ', "" and / with the HTML equivilent

