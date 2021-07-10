const express = require('express');
const cors = require('cors');
const app = express();

//conexion a base de datos
require('./db/config');

app.use(express.json());
app.use(cors());
//la ruta

app.use('/api/heroe', require('./routes/web'));

app.listen(3000, ()=>{
    console.log('el servidor esta corriendo en el puerto 3000')
})