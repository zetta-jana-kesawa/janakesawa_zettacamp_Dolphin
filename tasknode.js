var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('Least Favorite Book Most Favorite Book');
}).listen(8080);

let leastBook = "Voice of the Violin";
const faveBook = "Excursion to Tindari";