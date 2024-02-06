'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Users', [{
      name: 'krishna',
      email:"krishna@gmail.com",
      password:"jsdhyuewy",
      createdAt: new Date(),
    updatedAt:new Date()
    
   },
   {
    name: 'Virendra',
    email:"Virendra@gmail.com",
    password:"jsdhyuewy",
    createdAt: new Date(),
    updatedAt:new Date()
  
 },
 {
  name: 'aBHISHEK',
  email:"aBHISHEK@gmail.com",
  password:"jsdhsdjew",
  createdAt: new Date(),
    updatedAt:new Date()

 }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
