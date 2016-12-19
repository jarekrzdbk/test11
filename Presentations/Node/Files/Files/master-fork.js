//master-fork.js
const child_process = require('child_process');
 
for(var i=0; i<3; i++) {
   var worker_process = child_process.fork("support.js", [i]);	

   worker_process.on('close', (code) => {
      console.log(`child process ${i} exited with code ${code} `);
   });
}
console.log(`parent pid: ${process.pid}`);