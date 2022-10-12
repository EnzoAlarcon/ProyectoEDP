'use strict';
module.exports = (sequelize, DataTypes) => {
  const alumno = sequelize.define('alumno', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    telefono: DataTypes.STRING
  }, {});
  alumno.associate = function(models) {    
    alumno.hasMany(models.cursa_carrera,{
      as : 'Carr-Relacionada',  // nombre de mi relacion
      foreignKey: 'id_alumno'  
    })
  
  };
   
  return alumno;
};