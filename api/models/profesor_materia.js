'use strict';
module.exports = (sequelize, DataTypes) => {
  const profesor_materia = sequelize.define('profesor_materia', {
    id_profesor: DataTypes.INTEGER,
    id_materia: DataTypes.INTEGER
  }, {});
  profesor_materia.associate = function(models) {
    profesor_materia.belongsTo(models.profesores, {
      as: 'Profesor',
      foreignKey: 'id_profesor'
    }),
    profesor_materia.belongsTo(models.materia, {
      as: 'Materia',
      foreignKey: 'id_materia'
    })
  };
  return profesor_materia;
};