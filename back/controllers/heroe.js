const Heroe = require('../models/heroe');


exports.listaHeroes = async(req, res) => {

    try {
        const heroeDB = await Heroe.find();

        res.json({
            msg:'peticion correcta',
            heroeDB
        });

    } catch (error) {
        console.log(error);
        res.json(error);
    }
}

exports.crearHeroe = async(req, res) => {

    try {
        let heroeDB ;
        heroeDB = new Heroe(req.body);

        await heroeDB.save();

        res.json(heroeDB);

    } catch (error) {
        console.log(error);
        res.json(error);
    }
}

exports.modificarHEroe = async(req, res) => {
    try {
    
    const {nombre, heroe, poder, debilidad, edad, foto, descripcion} = req.body

    let heroeDB = await Heroe.findById(req.params.id);

    if (!heroeDB) {
        res.json({
            msg:'Heroe no existe'
        })
    }

    heroeDB.nombre = nombre;
    heroeDB.heroe = heroe;
    heroeDB.poder = poder;
    heroeDB.debilidad = debilidad;
    heroeDB.edad = edad;
    heroeDB.foto = foto;
    heroeDB.descripcion = descripcion;

    heroeDB = await Heroe.findByIdAndUpdate({_id: req.params.id}, heroeDB, {new:true});

    res.json(heroeDB);

    } catch (error) {
        console.log(error);
        res.json(error);
    }
}


exports.eliminarHeroe = async(req, res) => {
    try {
    
           
        let heroeDB = await Heroe.findById(req.params.id);
    
        if (!heroeDB) {
            res.json({
                msg:'Heroe no existe'
            })
        }
    
       
    
       await Heroe.findByIdAndRemove({_id: req.params.id});
    
        res.json({
            msg:'Heroe Eliminado'
        });
    
        } catch (error) {
            console.log(error);
            res.json(error);
        }
}