'use strict';
module.exports = (sequelize, DataTypes) => {
  const alumno = sequelize.define('alumno', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    telefono: DataTypes.INTEGER
  }, {});
  /*alumno.associate = function(models) {
    // associations can be defined here
    alumno.belongsToMany(models.materia// modelo al que pertenece
    ,{
      through: 'cursa_materia',
      
    })
  };*/
  return profesores;
};