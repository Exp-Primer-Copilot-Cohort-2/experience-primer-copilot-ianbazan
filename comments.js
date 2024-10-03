//Create web server
var http = require("http");
var fs = require("fs");

//Create server
http.createServer(function(request, response) {
  //Read the file
  fs.readFile("index.html", function(err, data) {
    //Write the file
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(data);
    return response.end();
  });
}).listen(8080);