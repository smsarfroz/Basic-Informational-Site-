import http from 'http';
import fs from 'fs';
import { URL } from 'url';

const server = http.createServer((req, res) => {
    const log = `${Date.now()} : ${req.url} ${req.method} new request received\n`;

    const baseURL = `http://${req.headers.host}`;
    const myUrl = URL.parse(req.url, baseURL);
    console.log(myUrl);
    const filename = '.' + myUrl.pathname; 
    console.log(filename);
    fs.readFile(filename, (err, data) => {
        console.log(filename);
        console.log(data);
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
})

server.listen(8080, () => console.log("Server started!"));