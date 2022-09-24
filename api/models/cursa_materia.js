'use strict';
module.exports = (sequelize, DataTypes) => {
  const cursa_materia = sequelize.define('cursa_materia', {
    id_cursa: DataTypes.INTEGER,
    id_materia: DataTypes.INTEGER,
    id_alumno: DataTypes.INTEGER
  }, {});
  cursa_materia.associate = function(models) {
    // associations can be defined here
  };
  return cursa_materia;
};