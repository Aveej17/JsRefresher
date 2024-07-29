const http = require('http');


const server = http.createServer((req, res) =>{
    // console.log(req);
    res.write("<html>");
    res.write("<head><title>My Page</title><head>");
    res.write("<body>Welcome<body>");
    res.write("</html>");
    res.end();
    
});
server.listen(4000);