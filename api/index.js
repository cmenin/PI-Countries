//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn,Country, Activity} = require('./src/db.js');
const axios = require('axios');
const { map } = require('./src/app.js');


// Syncing all the models at once.
conn.sync({ force: false}).then(async() => {

  //quiero que se haga esto antes de levantar el servidor
  const verificacion = await Country.findAll()
  if(verificacion.length < 1){
    const pedido= await axios.get('https://restcountries.com/v3/all')
    const formateo = pedido.data?.map(el=>{
      return {
        id: el.cca3,
        name: el.name.official,
        capital: el.capital,
        region: el.region,
        subregion: el.subregion,
        area: el.area,
        population: el.population,
        flag: el.flags[0]
      }
    })
      const carga = await Country.bulkCreate(formateo);
      // console.log(carga)

  }
  
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
})

  // const apiCountry = axios.get('https://restcountries.com/v3/all')

  //   apiCountry.forEach(async (el) => {
  //   await Country.create({
  //     id: el.cca3,
  //     name: el.name.official,
  //     capital: el.capital,
  //     region: el.region,
  //     subregion: el.subregion,
  //     area: el.area,
  //     population: el.population,
  //     flag: el.flags[0]
  //   })
  //   })