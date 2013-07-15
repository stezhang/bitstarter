var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = requires ('fs');
  var content;
  fs.readFileSync('./index.html', function(err, data) {
       if (err) {
           throw err;
       }  
       content = data;
  });  
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
