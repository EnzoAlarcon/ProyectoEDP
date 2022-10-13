'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('alumno_carreras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,

      },
      id_alumno: {
        type: Sequelize.INTEGER,
        references: {
          model: 'alumnos',
          key: 'id'
        }
      },
      id_carrera: {
        type: Sequelize.INTEGER,
        references: {
          model: 'carreras',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('alumno_carreras');
  }
};