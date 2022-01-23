//OS!!!
//information based off of the operating system and specs of computer
const os = require('os') //using require which is a global object built in to be able to import other node modules
console.log(os.cpus()) // This gives information on the cores in the cpu of the computer the code is run on
console.log(os.cpus()[0].model) //model of the cpu chip
console.log(os.hostname()) // given name of the computer being used
console.log(os.platform()) //the operating system thats running on the computer
console.log(os.release()) // operating systems version release
console.log(os.uptime()) // uptime of system in seconds