let path = require('path')

//gives the extention 
let ext = path.extname('C:\\Users\\HP\\Desktop\\coding\\WEB-DEV\\Node\\file3.txt')
console.log(ext)

// gives the base file
let basename = path.basename('C:\\Users\\HP\\Desktop\\coding\\WEB-DEV\\Node\\file1.txt')
console.log(basename)

console.log(__dirname) // current folder path
console.log(__filename) // current file path