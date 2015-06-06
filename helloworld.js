var http = require('http'),
    fs = require('fs');

function serverStaticFile(res, path, contentType, responseCode){
  if(!responseCode) responseCode = 200;
  fs.readFile(__dirname + path, function(err, data){
    if(err){
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 - Internal Error');
    }else{
      res.writeHead(responseCode, { 'Content-Type': contentType });
      res.end(data);
    }
  });

}

http.createServer(function(req, res){
  var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
  switch (path) {
    case '':
      serverStaticFile(res, '/public/home.html', 'text/plain');
      break;
    case '/about':
      serverStaticFile(res, '/public/about.html', 'text/plain');
      break;
    case '/images/logorci.svg':
      serverStaticFile(res, '/public/images/logorci.svg', 'image/svg+xml');
      break;
    default:
      serverStaticFile(res, '/public/notfound.html', 'text/html', 404);
      break;

  }
}).listen(3000);


console.log('Server started on localhost:3000');
