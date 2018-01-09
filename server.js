// server.js
const express = require('express');
var compression = require('compression');
const app = express();
app.use(compression());
var request = require('request');
app.engine('html', require('ejs').renderFile);
// Run the app by serving the static files
// in the dist directory
// app.get('*', express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/dist'));
// app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port

app.get('*', function(req, res){
  res.render(__dirname + '/dist/index.html');
});

setInterval(()=>{
	request('https://dashboardversatil.herokuapp.com/', function (error, response, body) {
  console.log('Pingando em ' + new Date());
});
},15 * 60 * 1000);

app.listen(process.env.PORT || 80);
console.log(`Server rodando em ${process.env.PORT || 80}`);