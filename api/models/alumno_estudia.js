'use strict';
module.exports = (sequelize, DataTypes) => {
  const alumno_estudia = sequelize.define('alumno_estudia', {
    id_alumno: DataTypes.INTEGER,
    id_carrera: DataTypes.INTEGER
  }, {});
  alumno_estudia.associate = function(models) {

  	//asociacion a carrera (pertenece a:)
  	alumno_estudia.belongsTo(models.alumno // modelo al que pertenece
    ,{
      as : 'Carrera-Relacionada',  // nombre de mi relacion
      foreignKey: 'id_alumno',     // campo con el que voy a igualar
      foreignKey: 'id_carrera'     // campo con el que voy a igualar
    });
  	/////////////////////
  };
  return alumno_estudia;
};