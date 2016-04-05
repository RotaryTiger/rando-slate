var express = require('express');
var app = express();

app.listen(5000, function() {
	console.log('we in');
});

app.get('/', function(req, res) {
	res.sendfile('./rando.html');
});

app.get('/rando', function(req, res) {
	var note = Math.round(Math.random() * 7379);
	res.redirect(302, 'http://blankslate.io/?note=' + note);
});
