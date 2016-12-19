var fs = require("fs");
module.exports = {
stat: (path) =>{
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if(err !== null) return reject(err);
      resolve(stats);
    })
  })
},
readdir: (path) =>{
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if(err !== null) return reject(err);
      resolve(files);
    })
  })
},
rmdir: (path) =>{
  return new Promise((resolve, reject) => {
    fs.rmdir(path, (err) => {
      if(err !== null) return reject(err);
      resolve();
    })
  })
},
unlink: (path) =>{
  return new Promise((resolve, reject) => {
    fs.unlink(path, (err) => {
      if(err !== null) return reject(err);
      resolve();
    })
  })
},
mkdir: (path) =>{
  return new Promise((resolve, reject) => {
    fs.mkdir(path, (err) => {
      if(err !== null) return reject(err);
      resolve();
    })
  })
}
}