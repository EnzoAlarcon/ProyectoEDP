'use strict';
module.exports = (sequelize, DataTypes) => {
  const materia = sequelize.define('materia', {
    nombre: DataTypes.STRING,
    id_carrera: DataTypes.INTEGER
  }, {});
  materia.associate = function(models) {
    

  	//asociacion a carrera (pertenece a:)
  	materia.belongsTo(models.carrera// modelo al que pertenece
    ,{
      as : 'Carrera-Relacionada',  // nombre de mi relacion
      foreignKey: 'id_carrera'     // campo con el que voy a igualar
    });
  	/////////////////////
  };
    /*materia.associate = function(models) {
      materia.belongsToMany(models.profesores// modelo al que pertenece
      ,{
        through: 'dicta_materia',
        foreignKey: 'id_materia'
      })
  }*/

   /*materia.associate = function(models) {
      materia.belongsToMany(models.alumnos// modelo al que pertenece
      ,{
        through: 'dicta_materia',
        foreignKey: 'id_materia'
      })
  }*/
  return materia;
};