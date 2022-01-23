//PROCESS!!!
//deals with the order in whcih things are run and when you want functions to run in order of the program running
const process = require('process')//using require which is a global object built in to be able to import other node modules
process.on('exit', () => {
    console.log('Peter ✌') //this will be output as the last thing when the program exits / on exit
})
process.on('beforeExit', () => {
    console.log('Again...') // this wil output as the last thing to run right before the programs exits
})
let before = () => {console.log('Hello...')} //using the global object of setwtimeout to show that even when rearranging the code when written and adding a delay to code running the exit and before exit will not change order
setTimeout(before, 3000)

console.log(process.cwd()) //current working directory (cwd) ... this displays the current working directory path same as using global object of '__dirname'