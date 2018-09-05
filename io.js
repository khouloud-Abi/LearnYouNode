var fs= require('fs');
var filePath = process.argv[2];
var buf = fs.readFileSync(filePath);
var str = buf.toString();
var arr = str.split('\n');
var l = arr.length-1;
console.log(l);