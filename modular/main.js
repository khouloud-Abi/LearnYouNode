const listFiles = require('./mod.js');
const directory = process.argv[2];
const fileExt = process.argv[3];

listFiles(directory, fileExt, (err, files) => {
  if (err) console.error('There was an error:', err);

  files.forEach(file => {
    console.log(file);
  });
});

/*
autres sol:

var filterFn = require('./solution_filter.js')
    var dir = process.argv[2]
    var filterStr = process.argv[3]

    filterFn(dir, filterStr, function (err, list) {
      if (err) {
        return console.error('There was an error:', err)
      }

      list.forEach(function (file) {
        console.log(file)
      })
    })

*/