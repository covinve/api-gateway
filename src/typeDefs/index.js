//Se llama al typedef (esquema) de cada submodulo
const guideTypeDefs = require("./guide_type_defs");
const stateTypeDefs = require("./state_type_defs");
const authTypeDefs = require("./auth_type_defs");
//Se unen
const schemasArrays = [authTypeDefs, guideTypeDefs, stateTypeDefs];
//Se exportan
module.exports = schemasArrays;
