import http from 'http';

const PORT = 5000;

const app = http.createServer((request, response) => {
    response.send("Hello Node");
})

app.listen(PORT, () => {
    console.log(`The port was running in ${PORT}`);
})
