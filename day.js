// npm insatll 1.
const dayjs = require('dayjs')
let now = dayjs() // setting the current date and time to a variable that will always u[pdate

// console.log(dayjs()) // this outputs the current time and date locally and by jsut outputting like this you see it as an object and can see all the informationn seperate
let day1 = dayjs('2002-12-16') //eaxamples of three diffrerent ways to set dates. This is simple just normal formattinf
let day2 = dayjs.unix(1040023800) // using unix time stamp in seconds
let day3 = dayjs(new Date(2002, 12, 16)); //by using a javascript date object

console.log(day1.format()) //by adding .format it gets rid of the extra information inn the object and just displays the date and time simply
console.log(day2.format())
console.log(day3.format())

// different types of formatting that it can return
console.log("ISO") // iso date time format
console.log(now.format())

console.log("\nTime") // different time formats
console.log(now.format("HH:mm:ss"))
console.log(now.format("h:mm:ss a"))

console.log("\nDate") //different kinds of date formatting
console.log(now.format("dddd, MMMM D YYYY"))
console.log(now.format("YYYY-MM-DD"))