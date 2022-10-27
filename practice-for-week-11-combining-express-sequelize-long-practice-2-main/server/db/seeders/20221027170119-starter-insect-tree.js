"use strict";

const { Insect, Tree, InsectTree } = require("../models");

const insectTrees = [
  {
    insectInfo: { name: "Western Pygmy Blue Butterfly" },
    trees: [
      { tree: "General Sherman" },
      { tree: "General Grant" },
      { tree: "Lincoln" },
      { tree: "Stagg" },
    ],
  },
  {
    insectInfo: { name: "Patu Digua Spider" },
    trees: [{ tree: "Stagg" }],
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (let insectIdx = 0; insectIdx < insectTrees.length; insectIdx++) {
      const { insectInfo, trees } = insectTrees[insectIdx];
      const insect = await Insect.findOne({ where: { name: insectInfo.name } });
      console.log(insect);

      for (let treeIdx = 0; treeIdx < trees.length; treeIdx++) {
        const treeInfo = trees[treeIdx];
        const tree = await Tree.findOne({ where: { tree: treeInfo.tree } });
        console.log(tree);
        await InsectTree.create({
          treeId: tree.id,
          insectId: insect.id,
        });
      }
    }
  },

  down: async (queryInterface, Sequelize) => {
    for (let insectIdx = 0; insectIdx < insectTrees.length; insectIdx++) {
      const { insectInfo, trees } = insectTrees[insectIdx];
      const insect = await Insect.findOne({ where: { name: insectInfo.name } });

      for (let treeIdx = 0; treeIdx < trees.length; treeIdx++) {
        const treeInfo = trees[treeIdx];
        const tree = await Tree.findOne({ where: { tree: treeInfo.tree } });

        await InsectTree.destroy({
          where: {
            treeId: tree.id,
            insectId: insect.id,
          },
        });
      }
    }
  },
};
