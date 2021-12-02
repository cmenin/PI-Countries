const { Router } = require('express');
const router = Router();

//se importa los models

const {Activity, Country} = require('../db')

// get y post

router.post('/', async( req,res)=>{
    const {name, difficulty, duration, season, countries} = req.body;
console.log(countries,"soy countries")
    try {
        const createActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season
        });
    countries.forEach(async c=>{
        let busqueda = await Country.findByPk(c)
        if(busqueda){

        await createActivity.addCountries(busqueda) //countries es el id de pais
        }

    })
       
res.send("se creó actividad!")
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;