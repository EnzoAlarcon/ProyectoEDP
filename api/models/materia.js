'use strict';
module.exports = (sequelize, DataTypes) => {
  const materia = sequelize.define('materia', {
    nombre: DataTypes.STRING,
    id_carrera: DataTypes.INTEGER
  }, {});
  materia.associate = function (models) {


    //asociacion a carrera (pertenece a:)
    materia.belongsTo(models.carrera// modelo al que pertenece
      , {
        as: 'Carrera-Relacionada',  // nombre de mi relacion
        foreignKey: 'id_carrera'     // campo con el que voy a igualar
      });
    //asociacion a la tabla intermedia "profesor_materia"
    materia.hasMany(models.profesor_materia, {
      as: 'Profesor-Relacionado',
      foreignKey: 'id_profesor'
    }),

    materia.hasMany(models.alumno_materia, {
        as: 'Alumno-Relacionado',
        foreignKey: 'id_alumno'
    })    
  };
  return materia;
};