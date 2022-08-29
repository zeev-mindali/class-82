//npm install http
let http = require("http");

//create http server
http.createServer((req, res) => {
    //we need to tell which content we are going to get....
    res.writeHead(200, { 'Content-type': 'text/html' });
    //we will use res.write as document.write
    res.write("<center><h1>Take me maya</h1></center><hr/>");
    res.write("Groom list:");
    res.write("<ul><li>Matan</li><li>Haroon</li><li>Daniel</li><li>Dudi</li><li>Dolev</li></ul>")
    //response to use to see
    console.log(new Date().toLocaleTimeString());
    console.log
    console.log(req.url);
    if (req.url == "/or") {
        res.write("<h1>Oh no, it's Or again</h1>");
    } else if (req.url == "/noa") {
        res.write("<h1>It's a dog , not a bunny/rabbit/same shit</h1>");
    } else {
        res.write("");
    }
    res.end();
    //we will listen on port 8080
}).listen(8080);


const banner = `
██╗      ██████╗  ██████╗ █████╗ ██╗     ██╗  ██╗ ██████╗ ███████╗████████╗    █████╗  ██████╗  █████╗  ██████╗ 
██║     ██╔═══██╗██╔════╝██╔══██╗██║     ██║  ██║██╔═══██╗██╔════╝╚══██╔══╝██╗██╔══██╗██╔═████╗██╔══██╗██╔═████╗
██║     ██║   ██║██║     ███████║██║     ███████║██║   ██║███████╗   ██║   ╚═╝╚█████╔╝██║██╔██║╚█████╔╝██║██╔██║
██║     ██║   ██║██║     ██╔══██║██║     ██╔══██║██║   ██║╚════██║   ██║   ██╗██╔══██╗████╔╝██║██╔══██╗████╔╝██║
███████╗╚██████╔╝╚██████╗██║  ██║███████╗██║  ██║╚██████╔╝███████║   ██║   ╚═╝╚█████╔╝╚██████╔╝╚█████╔╝╚██████╔╝
╚══════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝   ╚═╝       ╚════╝  ╚═════╝  ╚════╝  ╚═════╝                                                                                                           
`;

console.log(banner);