var http = require('http');

http.createServer(function( req, res ){
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();

    switch (path) {
      case '':
        res.writeHead( 200, { 'Content-type': 'text/plain' } );
        res.end('Home Page');
        break;
      case '/about':
        res.writeHead( 200, { 'Content-type': 'text/plain' } );
        res.end('about');
        break;
      default:
        res.writeHead( 400, { 'Content-type': 'text/plain' } );
        res.end( 'Not found' );
        break;
    }
}).listen(3000);

console.log("Server started on localhost:3000 ");
