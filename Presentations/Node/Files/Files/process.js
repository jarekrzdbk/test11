"use strict"
console.log(`process pid ${process.pid}`);
console.log(`version ${process.version}`);
console.log(`platform ${process.platform}`);
console.log("arguments");
for(let a of process.argv) {
  console.log(a);
}
console.log("\n");
process.stdout.write("Hello World \n");
console.log(`current directory: ${process.cwd()}`);
console.log(`memory usage:`);
console.log(process.memoryUsage());
