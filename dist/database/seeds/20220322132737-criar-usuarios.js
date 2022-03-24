"use strict";const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('users', [{
    nome: 'Rafael',
    email: 'rafael@teste.com',
    password_hash: await bcryptjs.hash('123456', 8),
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    nome: 'Rafael 1',
    email: 'rafael1@teste.com',
    password_hash: await bcryptjs.hash('123456', 8),
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    nome: 'Rafael 2',
    email: 'rafael2@teste.com',
    password_hash: await bcryptjs.hash('123456', 8),
    created_at: new Date(),
    updated_at: new Date(),
  },
  ], {}),

  down: () => {

  },
};
