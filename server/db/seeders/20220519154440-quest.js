"use strict";
const randomWord = require("random-words");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          id: 1,
          name: "Аниме и гачимучи связаны?",
          answer: "Да",
          cost: 100,
          theme_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,

          name: "Кто босс качалки?",
          answer: "Билли Харингтон",
          cost: 200,
          theme_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "Это все про геев, да?",
          answer: "Нет",
          cost: 300,
          theme_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: "Чья коронная фраза - 'мда...братцы'?",
          answer: "Коли кинопоиска",
          cost: 100,
          theme_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: "Самый физически сильный преподаватель Эльбруса?",
          answer: "Алексей",
          cost: 200,
          theme_id: 2,
      createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          name: "Лучший выпускной тот?",
          answer: "На который не приедут менты",
          cost: 300,
          theme_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          name: "Что значит зеленый код из матрицы?",
          answer: "Рецепт суши",
          cost: 100,
          theme_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          name: "Где снимали Властелин колец?",
          answer: "В Новой Зеландии",
          cost: 200,
          theme_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          name: "В каком фильме прозвучала фраза: «Если бы я только знал, как тебя бросить»?",
          answer: "Горбатая Гора",
          cost: 300,
          theme_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

      ],
      {}
    );
  },
};
