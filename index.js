import http from 'http';
import fs from 'fs';
import { URL } from 'url';

const server = http.createServer((req, res) => {
    const log = `${Date.now()} : ${req.url} ${req.method} new request received\n`;

    const baseURL = `http://${req.headers.host}`;
    const myUrl = URL.parse(req.url, baseURL);
    let filename = '.' + myUrl.pathname;
    if (myUrl.pathname === '/') {
        filename += 'index.html';
    } else {
        filename += ".html";
    }
    fs.readFile(filename, (err, data) => {
        if (err) {

            fs.readFile('./404.html', 'utf8', (err404, data404) => {
                if (err404) {
                    res.writeHead(404, {'Content-Type': 'text/html'});
                    return res.end('Error');
                }
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.write(data404);
                return res.end();
            });
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        }
    })
})

server.listen(8080, () => console.log("Server started!"));