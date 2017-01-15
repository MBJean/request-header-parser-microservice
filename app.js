// Express
var express = require('express');

var app = express();

// Set port
app.set('port', process.env.PORT || 8080);

app.get('/', function(req, res) {
    res.json({ ipaddress: req.headers["host"], language: req.headers["accept-language"], software: req.headers["user-agent"] });
});

app.listen(app.get('port'), function() {
 console.log('Server started on localhost:' + app.get('port') + '; Press Ctrl-C to terminate.');
});