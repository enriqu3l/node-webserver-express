//Using Express!!!!
//Express usa el paquete Http y hace que sea mucho mas facil su uso

const express = require('express')
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

//Crear un middleware
app.use(express.static(__dirname + '/public'));

//Express HBS engine --> Para usar handlebars {{}}
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


//Comentamos todo esto para que ahora se lance lo que hay en public
// app.get('/', function(req, res) {
//     //res.send('Hola Mundo')

//     let salida = {
//         nombre: 'enrique',
//         edad: '30',
//         url: req.url
//     }

//     res.send(salida); //Detecta que es un un json y automaticamente setea la salida como json
// })


app.get('/', (req, res) => {

    res.render('home.hbs', {
        nombre: 'enrique lopez'
    });

});

app.get('/about', (req, res) => {

    res.render('about.hbs');

});

app.get('/data', function(req, res) {
    res.send('Hola Data')

    res.send(salida); //Detecta que es un un json y automaticamente setea la salida como json
})


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});