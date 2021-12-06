const { gql } = require("apollo-server");
const guideTypeDefs = gql`
  type Guide {
    idGuide: String!
    origin: String!
    countryOrigin: String!
    cityOrigin: String!
    zipcodeOrigin: String!
    destiny: String!
    countryDestiny: String!
    cityDestiny: String!
    zipcodeDestiny: String!
  }
  input GuideInput {
    idGuide: String!
    origin: String!
    countryOrigin: String!
    cityOrigin: String!
    zipcodeOrigin: String!
    destiny: String!
    countryDestiny: String!
    cityDestiny: String!
    zipcodeDestiny: String!
  }
  extend type Query {
    guideByIdGuide(idGuide: String!): Guide
  }
  extend type Mutation {
    createGuide(guide: GuideInput!): Guide
  }
`;
module.exports = guideTypeDefs;
