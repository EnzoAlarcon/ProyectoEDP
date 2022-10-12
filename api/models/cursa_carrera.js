'use strict';
module.exports = (sequelize, DataTypes) => {
  const cursa_carrera = sequelize.define('cursa_carrera', {
    id_alumno: DataTypes.INTEGER,
    id_carrera: DataTypes.INTEGER
  }, {});
  cursa_carrera.associate = function(models) {
    cursa_carrera.belongsTo(models.alumno, {
      as: 'Alumno',
      foreignKey: 'id_alumno'
    }),
    cursa_carrera.belongsTo(models.carrera, {
      as: 'Carrera',
      foreignKey: 'id_carrera'
    })
  };
  return cursa_carrera;
};