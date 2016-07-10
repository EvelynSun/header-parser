var server = require('express');
var app = server();
var useragent = require('useragent');

var port = process.env.PORT || 3500;

app.listen(port, function(){
  console.log("Listening on port: " + port);
});

app.get('/', function(req, res) {
  var agent = useragent.parse(req.headers['user-agent']);
  console.log('user-agent'+agent);
  var ipAddr = req.headers["x-forwarded-for"];
  
  console.log("ipAdd"+ipAddr);
  

  res.json({
    ip: ipAddr,
    "language": req.headers['accept-language'].split(',')[0],
    OS: agent.os.family
  });
});