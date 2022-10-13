'use strict';
module.exports = (sequelize, DataTypes) => {
  const alumno = sequelize.define('alumno', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    telefono: DataTypes.STRING
  }, {});
  alumno.associate = function(models) {    
    // associations can be defined here
    alumno.hasMany(models.alumno_carrera
      ,{
        as: 'Carrera-Relacionada',
        foreignKey: 'id_carrera'
      })
  };
   
  return alumno;
};