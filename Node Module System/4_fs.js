// file system module in node js

const fs = require('fs')


// reading a file

let fileContent = fs.readFileSync('C:\\Users\\NANDAN KUMAR\\Desktop\\Studying Node\\Node Module System\\f1.txt')

console.log('data of file 1 in Buffer format -> ' , fileContent)

console.log('data of file 1 -> ' + fileContent)

// writing inside a file

fs.writeFileSync('C:\\Users\\NANDAN KUMAR\\Desktop\\Studying Node\\Node Module System\\f1.txt', 'we are writing something inside the file with the help of fs module in node js')

console.log('data of file 1 -> ' + fs.readFileSync('C:\\Users\\NANDAN KUMAR\\Desktop\\Studying Node\\Node Module System\\f1.txt'))


// Update inside a file

fs.appendFileSync('C:\\Users\\NANDAN KUMAR\\Desktop\\Studying Node\\Node Module System\\f1.txt', ' This is updated data')
console.log('data of file 1 -> ' + fs.readFileSync('C:\\Users\\NANDAN KUMAR\\Desktop\\Studying Node\\Node Module System\\f1.txt'))

fs.unlinkSync('C:\\Users\\NANDAN KUMAR\\Desktop\\Studying Node\\Node Module System\\f2.txt')

console.log('File has been deleted')



