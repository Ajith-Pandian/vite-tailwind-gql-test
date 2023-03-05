import gql from "graphql-tag";

export default gql`
  query getProducts($channel: String, $first: Int) {
    products(channel: $channel, first: $first) {
      edges {
        node {
          id
          name
          description
        }
      }
    }
  }
`;
