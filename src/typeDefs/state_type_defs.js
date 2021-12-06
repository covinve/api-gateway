const { gql } = require("apollo-server");
const stateTypeDefs = gql`
  type State {
    idState: String!
    idGuide: String!
    descriptionState: String!
    dateState: String!
  }
  input StateInput {
    idState: String!
    idGuide: String!
    descriptionState: String!
  }
  extend type Query {
    stateByIdGuide(idGuide: String!): [State]
  }
  extend type Mutation {
    createState(state: StateInput!): State
  }
`;
module.exports = stateTypeDefs;
