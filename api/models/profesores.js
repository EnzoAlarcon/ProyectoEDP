'use strict';
module.exports = (sequelize, DataTypes) => {
  const profesores = sequelize.define('profesores', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING
  }, {});
  profesores.associate = function(models) {
    // Asociacion a la tabla intermedia.
    profesores.hasMany(models.profesor_materia
    ,{
      as: 'Materia-Relacionada',
      foreignKey: 'id_materia'
    })
  };
  return profesores;
};