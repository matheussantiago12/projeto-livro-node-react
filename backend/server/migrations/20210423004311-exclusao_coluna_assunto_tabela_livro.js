"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn("livro_teste", "assunto");
  },

  down: async (queryInterface, Sequelize) => {},
};
