'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('candidates', [
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        bio: 'Software Engineer with 5 years of experience',
        phone: '123-456-7890',
        open_to_work: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        bio: 'Product Manager with a passion for user-centered design',
        phone: '987-654-3210',
        open_to_work: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        bio: 'UX Designer with a knack for creating intuitive interfaces',
        phone: '555-555-5555',
        open_to_work: true,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('candidates', null, {});
  }
};
