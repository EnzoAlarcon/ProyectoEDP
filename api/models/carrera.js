'use strict';
module.exports = (sequelize, DataTypes) => {
  const carrera = sequelize.define('carrera', {
    nombre: DataTypes.STRING,
    id_dpto: DataTypes.INTEGER
  }, {});
  carrera.associate = function(models) {
    

  	//asociacion a departamento (pertenece a:)
  	carrera.belongsTo(models.departamento// modelo al que pertenece
    ,{
      as : 'Dpto-Relacionado',  // nombre de mi relacion
      foreignKey: 'id_dpto'     // campo con el que voy a igualar
    });
  	/////////////////////
    carrera.hasMany(models.cursa_carrera, {
      as:'Alumno-Relacionado', 
      foreignKey: 'id_carrera'
    })
  };
   
  return carrera;
};