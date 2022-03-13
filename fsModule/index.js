var fs=require('fs');
var http=require('http');

var server=http.createServer(function (req,res){

    if(req.url=="/"){

        //file exist
        fs.exists('demo.txt',function (result){
        if(result){
            res.end("True");

        }
        else {
            res.end("False");
        }
        });

        // let result=fs.existsSync('demo.tst');
        // if(result){
        //     res.end("True");
        //
        // }
        // else {
        //     res.end("False");
        // }

        // //DELETE
        //
        // let error= fs.unlinkSync('demoSyncnew.txt')
        //     if(error){
        //         res.writeHead(200, {'Content-Type':'text/html'});
        //         res.write("file delete failed");
        //         res.end();
        //
        //
        //     }
        //     else {
        //         res.writeHead(200,{'Content-Type':'text./html'});
        //         res.write("file successfully delete");
        //         res.end();
        //     }

        // fs.unlink('demonew.text', function (error){
        //     if(error){
        //         res.writeHead(200, {'Content-Type':'text/html'});
        //         res.write("file delete failed")
        //         res.end();
        //
        //
        //     }
        //     else {
        //         res.writeHead(200,{'Content-Type':'text./html'});
        //         res.write("file successfully delete");
        //         res.end();
        //     }
        // })

        //Rename

        // let error=fs.renameSync('demoSync.txt','demoSyncnew.txt');
        //     if(error){
        //         res.writeHead(200,{'Content-Type':'text/html'});
        //         res.write("File rename fail");
        //         res.end();
        //
        //     }
        //     else {
        //         res.writeHead(200,{'Content-Type':'text/html'});
        //         res.write("File rename Success");
        //         res.end();
        //
        //     }

        // fs.rename('demo.text', 'demonew.text', function (error){
        //
        //     if(error){
        //         res.writeHead(200,{'Content-Type':'text/html'});
        //         res.write("File rename fail");
        //         res.end();
        //
        //     }
        //     else {
        //         res.writeHead(200,{'Content-Type':'text/html'});
        //         res.write("File rename Success");
        //         res.end();
        //
        //     }
        // })

        //Asy
        // fs.readFile('home.html',function (error,data){
        //     res.writeHead(200, {'Content-Type': 'text/html'});
        //     res.write(data);
        //     res.end();
        // })

        // let myfile= fs.readFileSync('home.html');
        // res.writeHead(200, {'Content-Type': 'text/html'});
        // res.write(myfile);
        // res.end();#
        // let error=fs.writeFileSync('demoSync.txt','Welcome to node js');
        // if(error){
        //     res.writeHead(200,{'Content-Type':'text/html',});
        //     res.write("File write fale");
        //     res.end();
        // }
        // else {
        //     res.writeHead(200,{'Content-Type':'Text/html'});
        //     res.write("File write Success");
        //     res.end();
        // }

    //     fs.writeFile('demo.txt', 'Hello World', function (error){
    //         if(error){
    //             res.writeHead(200,{'Content-Type':'text/html',});
    //             res.write("File write fale");
    //             res.end();
    //         }
    //         else {
    //             res.writeHead(200,{'Content-Type':'Text/html'});
    //             res.write("File write Success");
    //             res.end();
    //         }
    //     });
     }

});

server.listen(5050);
console.log("Server successfully running");
