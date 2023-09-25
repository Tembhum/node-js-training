const getNotes = require('./notes.js')

const validator = require('validator')

const msg = getNotes()

// const fs = require('fs')
console.log(msg)

console.log(validator.isEmail('example.com'))
console.log(validator.isURL('https/mead,io'))
