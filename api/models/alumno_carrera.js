'use strict';
module.exports = (sequelize, DataTypes) => {
  const alumno_carrera = sequelize.define('alumno_carrera', {
    id_alumno: DataTypes.INTEGER,
    id_carrera: DataTypes.INTEGER
  }, {});
  alumno_carrera.associate = function(models) {
    // associations can be defined here
    alumno_carrera.belongsTo(models.alumno, {
      as: 'Alumno',
      foreignKey: 'id_alumno'
    }),
    
    alumno_carrera.belongsTo(models.carrera, {
      as: 'Carrera',
      foreignKey: 'id_carrera'
    })
  };
  return alumno_carrera;
};