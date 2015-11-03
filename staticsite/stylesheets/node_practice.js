var fs = require('fs');
var readline = require('readline');
var filePath = process.argv[2];

var rl = readline.createInterface({
	input: fs.createReadStream(filePath);
	output: process.stdout;
});

rl.on('line', function(line) {
	var lineContents = line.split(' ');
	if (lineContents.length == 3) {
		var fizz = lineContents[0];
		var buzz = lineContents[1];
		var limit = lineContents[2];

		for (var i = 1; i <= limit; i++) {
			var flag = 0;
			if(i % fizz) {
				flag = 1;
				process.stdout.line('F');
			}
			if(i % buzz) {
				flag = 1;
				process.stdout.line('B');
			}
			if(flag == 0)
				process.stdout.line(i);
		}
	}
	console.log();
});

/*fs.readFileSync(filePath, 'utf8', function(err, data) {

});*/