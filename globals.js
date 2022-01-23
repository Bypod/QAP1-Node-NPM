//globals!!!
//Two different kinds of global functions being used here, console.log which we know outputs the return of whatever function we call. 
//Secondly the function being called outputs the the path up to and including the the file we are eworking with.
console.log(__filename)
// this global function returns the path leading to the directory we are working in / the parent folder
console.log(__dirname) 

//using setTimeout and clearTimeout
var prof = 'Peter' //set simple variable of a name

function printName() { //this function outputs the string of prof to the terminal using the global object of console.log
    console.log(prof)
}

function print() { //this function now has set a timeout on the function printName for 3 seconds after it is called when code is run
    i = setTimeout(printName, 3000)
}

function stop() { // when this function is run it will check the variable of prof and if it is not 'Peter' than it will clear the timeout and not run the function attached to the timeout
    if(prof != 'Peter') { // in this case it will run bc var prof does = peter but feel free to change it to seee the clearTimeout fucntion work
        clearTimeout(i)
    }
}

console.log('Hello...') // outputing hello into the terminal using console.log
//calling my functions
print()
stop()