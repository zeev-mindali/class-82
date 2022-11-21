/*
const http = require('http');
const qs = require ('querystring');
const calculator = require('./calculator.js');

const server = http.createServer(function(request,response){
    console.log(request.param);
    if (request.method == 'POST'){
        console.log("POST");
        var body = '';
        request.on('data',function(data){
            body += data;
        });
        request.on('end', function(){
            const post = qs.parse(body);
            const numbers=post.numbers;
            const result = calculator.add(numbers);
            response.writeHead(200, {'Content-type':'text/html'});
            response.end('result: '+result);
        });
    } else {
        let html = `
            <html>
                <body>
                    <form method="post" action="http://localhost:3000">numbers:
                        <input type="text" name="numbers"/>
                        <input type="submit" value="add"/>
                    </form>
                </body>
            </html>
        `
        response.writeHead(200, {"Content-type":"text/html"});
        response.end(html);
    }
});

const port = 3000;
const host = "127.0.0.1";
server.listen(port,host);
console.log(`listening at http://${host}:${port}`)
*/