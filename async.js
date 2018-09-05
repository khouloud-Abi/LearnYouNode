var fs= require('fs');
var filePath = process.argv[2];
var buff = fs.readFile(filePath, (err, data)=>
{
	if(err)
		console.log('error')
	else
		console.log(data.toString().split('\n').length-1);
}
)