var http = require("http");
var mime = "";
switch (process.argv[2]) {
	case "plain" :
	mime = "text/plain";
	break;
	case "html" :
	mime = "text/html";
	break;
	case "json" :
	mime = "application/json";
	break;
	default:
	console.log("Pleas provide an apropriate mime type");
	process.exit();
}

if(mime.length > 0) {
	makeRequest(mime);
}

function readStreamAsString(stream) {
  var data = "";
  return new Promise((resolve, reject) => {
  	stream.on("data", function(chunk) {
    data += chunk.toString();
  });
  stream.on("end", function() {
  	resolve(data);
  });
  stream.on("error", function(error) {
  	reject(error);
  });
  }) 
}

function makeRequest (mimeType) {
  var request = http.request({
  hostname: "eloquentjavascript.net",
  path: "/author",
  method: "GET",
  headers: {Accept: mimeType}
}, function(response) {
	var res = "";
  console.log("Server responded with status code",
              response.statusCode);

  readStreamAsString(response).then(data =>{
  	console.log(data);
  },
  error => {
  	console.log(error);
  });
});
request.end();
}