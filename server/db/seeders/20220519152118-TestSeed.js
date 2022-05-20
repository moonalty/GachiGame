"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Themes",
      [
        {
          id: 1,
          name: "joji",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "joka",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "jojo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: "boji",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: "Елизавета Сергеевна",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
};
/////
//////

/////////////////////////////////////////////////////////////
//   async down(queryInterface, Sequelize) {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
//   },
// };
