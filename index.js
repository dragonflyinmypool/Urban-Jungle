const fs = require('fs');
const http = require('http');

const host = 'localhost';
const port = 3000;

const requestListener = function (req, res) {
  res.writeHead(200);

  //   read all images in folder appartment and display them in the html
  fs.readdir('appartment', (err, files) => {
    files.forEach((file) => {
      console.log(file);
      res.write(`<img src="./appartment/${file}" />`);
    });
    res.end();
  });
  res.write(
    '<html> <body style="background-color:black; color: white;"><h1>hi</h1></body></html>'
  );
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`listening on ${host}:${port}`);
});
