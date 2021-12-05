const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      validate: {
        len: 3,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital:{
      type: DataTypes.STRING,
      defaultValue: "the capital is not found"
    },
    continents:{
      type: DataTypes.STRING,
      allowNull:false
    },
    subregion:{
      type: DataTypes.STRING,
      defaultValue: "the subregion it not found"
    },
    area:{
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    population:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    flag:{
      type: DataTypes.STRING,
      allowNull: false
    },
    createdInDb:{ 
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true 
    }

  },
  {
    timestamps: false
  });
};


/*
[ ] Los campos mostrados en la ruta principal para cada país (imagen de la bandera, nombre, código de país de 3 letras y continente)
[ ] Código de país de 3 letras (id)
[ ] Capital
[ ] Subregión
[ ] Área (Mostrarla en km2 o millones de km2)
[ ] Población
[ ] Actividades turísticas con toda su información asociada
 */