const guideResolver = {
  Query: {
    guideByIdGuide: async (_, { idGuide }, { dataSources }) => {
      return await dataSources.guideAPI.guideByIdGuide(idGuide);
    },
  },
  Mutation: {
    createGuide: async (_, { guide }, { dataSources }) => {
      return dataSources.guideAPI.createGuide(guide);
    },
  },
};
module.exports = guideResolver;
