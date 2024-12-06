const fs = require('fs');

// let fileContent = fs.readFileSync('f1.txt')

// console.log('data of f1 --> ' + fileContent);

// //writing inside a file

// fs.writeFileSync('f2.txt', 'this is the update')

// console.log('data has been updated in f2');

// //append file

// fs.appendFileSync('f3.txt',' my surname is gahlot')

// console.log('data has been appended in f3');

//deleting a file

// fs.unlinkSync('f2.txt')
// console.log('file has been Deleted');


//Directories

//creating a directory

// fs.mkdirSync('myDir')

//checking the content of the directory

// let folderPath= 'C:\\Users\\Asus\\Desktop\\Node\\node modules\\myDir'
// let folderContent =
// fs.readdirSync(folderPath)

// console.log('folder content ', folderContent );


//checking directory exist 

let doexist = fs.existsSync('demo.txt')

console.log(doexist);


//remove directory

fs.rmdirSync('myDir')
console.log('File Deleted');
