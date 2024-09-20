// child process module in node js

// child process is a node module used to create sub process within a script
// you can perform different tasks with your script by just using some methods.

const cp = require('child_process')

// cp.execSync('calc')

// cp.execSync('start firefox')

// cp.execSync('start firefox https://www.leetcode.com/')

console.log('output ' + cp.execSync('node "C:/Users/NANDAN KUMAR/Desktop/Studying Node/1.Node Module System/demo.js"').toString());
