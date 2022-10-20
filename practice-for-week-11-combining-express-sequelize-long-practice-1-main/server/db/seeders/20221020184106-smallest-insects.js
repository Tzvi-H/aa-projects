"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Insects", [
      {
        name: "Western Pygmy Blue Butterfly",
        description:
          "Though they appear ornate and delicate, prehistoric fossils suggests that butterflies have been around for more than 200 million years.",
        territory: "North America",
        fact: "the eastern blue pygmy can be found in forests along the Atlantic coasts",
        millimeters: 12,
      },
      {
        name: "Patu Digua Spider",
        description:
          "Most of the spiders found around American homes are more helpful than harmful. This includes the smallest spider, the patu digua.",
        territory: "Colombia",
        fact: "Generally, male spiders are smaller than the females",
        millimeters: 0.3,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Insects", {
      name: ["Western Pygmy Blue Butterfly", "Patu Digua Spider"],
    });
  },
};
