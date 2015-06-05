var http = require('http');

http.createServer(function(req, res){
  res.writeHead(200, { 'Content-type': 'text/plain' });
  res.end('Hello Word');
}).listen(3000);

console.log('Server started on localhost:3000; press Ctrl-C to terminate....');
