//Http ya es parte de Node por eso nunca lo agregamos al package.json
const http = require('http');

http.createServer((req, resp) => {

        resp.writeHead(200, { 'Content-type': 'application/json' });

        let salida = {
            nombre: 'enrique',
            edad: '30',
            url: req.url
        }

        resp.write(JSON.stringify(salida))
            // resp.write('Hola Mundo');
        resp.end();
    })
    .listen(8080);


console.log('Escuchando el puerto 8080');