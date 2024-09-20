// file system module with directories


const fs = require('fs')

// creating a directory

// fs.mkdirSync('myDirectory')


// check the content inside of a directory

let folderPath = "C:\\Users\\NANDAN KUMAR\\Desktop\\Studying Node\\myDirectory"
let folderContent = fs.readdirSync(folderPath)
console.log(folderContent)

// to check whether directories exist or not

let doesExist = fs.existsSync('1_cp.js')
console.log(doesExist)


// remove directory

fs.rmdirSync('myDirectory')
console.log('File has been deleted')