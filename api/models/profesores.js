'use strict';
module.exports = (sequelize, DataTypes) => {
  const profesores = sequelize.define('profesores', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING
  }, {});
  profesores.associate = function(models) {
    // associations can be defined here
    profesores.hasMany(models.profesor_materia
    ,{
      as: 'Materia-Relacionada',
      foreignKey: 'id_profesor'
    })
  };
  return profesores;
};