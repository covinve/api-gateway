const stateResolver = {
  Query: {
    stateByIdGuide: async (_, { idGuide }, { dataSources }) => {
      return dataSources.guideAPI.stateByIdGuide(idGuide);
    },
  },
  Mutation: {
    createState: async (_, { state }, { dataSources }) => {
      return dataSources.guideAPI.createState(state);
    },
  },
};
module.exports = stateResolver;
