var http=require('http');
var URL=require('url');

var server=http.createServer(function (req,res){
    var myURL="https://www.postman.com/downloads/?utm_source=postman-home";
    var myURLObj=URL.parse(myURL,true);

    var myHostName=myURLObj.host;
    var myPathName=myURLObj.pathname;
    var mySearchName=myURLObj.search;

    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(mySearchName);
    res.end();
    // if(req.url=="/"){
    //     res.writeHead(200,{'Content-Type':'text/html'})
    //     res.write('<h1> This is Home page</h1>')
    //     res.end();
    //
    // }
    // else if(req.url=="/about"){
    //     res.writeHead(200,{'Content-Type':'text/html'})
    //     res.write('<h1> This is Abou page</h1>')
    //     res.end();
    //
    // }
    // else if(req.url=="/contact"){
    //     res.writeHead(200,{'Content-Type':'text/html'})
    //     res.write('<h1> This is Contact page</h1>')
    //     res.end();
    //
    // }




});

server.listen(5050);
console.log("Server Run Success");