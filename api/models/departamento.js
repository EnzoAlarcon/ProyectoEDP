'use strict';
module.exports = (sequelize, DataTypes) => {
  const departamento = sequelize.define('departamento', {
    nombre: DataTypes.STRING
  }, {});
  departamento.associate = function(models) {
    // associations can be defined here
  };
  return departamento;
};