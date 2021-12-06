const guideResolver = require("./guide_resolver");
const stateResolver = require("./state_resolver");
const authResolver = require("./auth_resolver");
const lodash = require("lodash");
const resolvers = lodash.merge(guideResolver, stateResolver, authResolver);
module.exports = resolvers;
