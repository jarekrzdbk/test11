const
  fs = require('fs'),
  filename = process.argv[2];
if(!filename) {
  throw Error("A file to watch must be specified!");
}
fs.watch(filename, function() {
  //this is string interpolation feature of ES6
  //just wrap string in ` instead of '
  console.log(`File ${filename} just changed!`);
});
console.log(`Now watching ${filename} for changes...`);
