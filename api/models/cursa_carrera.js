'use strict';
module.exports = (sequelize, DataTypes) => {
  const cursa_carrera = sequelize.define('cursa_carrera', {
    id_cursa: DataTypes.INTEGER,
    id_carrera: DataTypes.STRING,
    id_alumno: DataTypes.INTEGER
  }, {});
  cursa_carrera.associate = function(models) {
    // associations can be defined here
  };
  return cursa_carrera;
};