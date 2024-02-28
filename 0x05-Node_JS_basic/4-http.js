const http = require('http');

const app = http.createServer()
app.on('request', (req, res) => {
  const text = 'Hello Holberton School!'
  res.setHeader('content-Type', 'text/plain')
  res.setHaeder('content-Length', text.length)
  res.write(Buffer, from(text))
});


app.listen(1245);
module.exports = app;
