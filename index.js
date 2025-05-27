import express from 'express';
const app = express();
import 'dotenv/config';

const PORT = 8080;

const currentDir = import.meta.dirname;
console.log(`Hello ${process.env.HELLO}`);

app.get('/', (req, res) => {
    async function handleReq() {
        try {
            await res.sendFile('index.html', { root: currentDir });

        } catch (err) {
            res.sendFile('404.html', {root: currentDir});
        }
    }
    handleReq();
})

app.get('/about', (req, res) => {
    async function handleReq() {
        try {
            await res.sendFile('about.html', { root: currentDir });

        } catch (err) {
            res.sendFile('404.html', {root: currentDir});
        }
    }
    handleReq();
})
app.get('/contact-me', (req, res) => {
    async function handleReq() {
        try {
            await res.sendFile('contact-me.html', { root: currentDir });

        } catch (err) {
            res.sendFile('404.html', {root: currentDir});
        }
    }
    handleReq();
})

/* const server = http.createServer((req, res) => {
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
}) */

app.listen(PORT, () => console.log("Server started!"));
