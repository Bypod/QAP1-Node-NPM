//URL!!!
//deals with getting, editing and crewating urls, and selecting certain information from urls
let myUrl = new URL('https://nodejs.org/John/#hello/world'); // setting a variable for my sample url
console.log(myUrl.hash) //returns part of the url after and including the hash
myUrl.hash = 'goodbye' //changes the link for what is after the hash to whatever is now set
console.log(myUrl.hash) //loggin the hash of the url to show the change
console.log(myUrl.href) //logging the full usrl link to the terminal
// and fun fact which im sure you knew lol but if you ctrl and left click the outputed link it will acctually open it in your browser