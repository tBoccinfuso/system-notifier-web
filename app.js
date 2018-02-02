const express = require('express')
const app = express()
var nrc = require('node-run-cmd');
var opn = require('opn');

function load() {
  nrc.run('node alert.js');
}

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: __dirname }),
    load() // Once page is loaded, fire the load() function that will call our alert.js script.
});

app.listen(3000, () => opn('http://localhost:3000'))