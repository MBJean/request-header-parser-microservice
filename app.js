// Express
var express = require('express');

var app = express();

// Set port
app.set('port', process.env.PORT || 8080);

app.get('/', function(req, res) {
	var ip = req.headers['x-forwarded-for'] || 
	     req.connection.remoteAddress || 
	     req.socket.remoteAddress ||
	     req.connection.socket.remoteAddress;
	console.log(req.headers);
    res.json({ ipaddress: ip, language: req.headers["accept-language"], software: req.headers["user-agent"] });
});

app.listen(app.get('port'), function() {
 console.log('Server started on localhost:' + app.get('port') + '; Press Ctrl-C to terminate.');
});