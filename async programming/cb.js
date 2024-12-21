const fs = require('fs');


console.log('First line');

// let data1 = fs.readFileSync('f1.txt')

// console.log('File data-->'+data1);
// let data2 = fs.readFileSync('f2.txt')

// console.log('File data-->'+data2);

fs.readFile('f1.txt',cb1)
function cb1(err,data) {
    if (err) {
        console.log('error');
    }
    console.log('F1 data is -->>'+ data);
    fs.readFile('f2.txt',cb2)
}

function cb2(err,data) {
    if (err) {
        console.log('error');
    }
    console.log('F2 data is -->>'+ data);
    fs.readFile('f3.txt',cb3)
}

function cb3(err,data) {
    if (err) {
        console.log('error');
    }
    console.log('F2 data is -->>'+ data);
}


console.log('Second line'); 