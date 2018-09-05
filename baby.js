/*const args= process.argv;
console.log(args)*/

var l = process.argv.length;
var sum=0;
 for(var i=2; i<l; i++){
	 var str = process.argv[i];
	 var Num= Number(str);
	 sum = Num + sum
 }
 console.log(sum);