const { Router } = require('express');
const router = Router();
const axios = require('axios');

//exportar models
const { Activity, Country, Op} = require('../db')

//get

router.get('/',async(req, res) => {
const allCountries = await Country.findAll({include: Activity})

if(req.query.name ){
    let {name} = req.query;
    // console.log(name)
    const foundCountry = await Country.findAll({
        where: {
            name: {[Op.like]: `%${name}%`}
            }
    })
    res.json(foundCountry)
    // console.log(foundCountry,"<===")
}else{

    res.json(allCountries)
}


})

router.get('/:id',async(req,res)=>{
    const forId = await Country.findByPk(req.params.id, {
        include: Activity
    })
if(forId){
    res.json(forId)
}else{
    res.status(400).send("country not found")
}

})





module.exports = router;

//if(if){
//     detroit(en vez de create) 
// }