
const fs = require('fs');
const path = require('path');

module.exports = (directory, fileExt, callback) => {
  fileExt = `.${fileExt}`;

  fs.readdir(directory, (err, files) => {
    if (err) return callback(err);

    files = files.filter(file => {
      return path.extname(file) === fileExt;
    });

    callback(null, files);
  });
};


/*
autres sol

var fs = require('fs')
    var path = require('path')

    module.exports = function (dir, filterStr, callback) {
      fs.readdir(dir, function (err, list) {
        if (err) {
          return callback(err)
        }

        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })

        callback(null, list)
      })
    }

*/