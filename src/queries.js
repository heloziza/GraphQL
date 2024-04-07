import { gql } from "@apollo/client";

const INFO_PERSON = gql`
query {
    characters {
      results {
        name
        species
        gender
        image
        location {
          name
        }
      }
    }
  }
`;

export default INFO_PERSON;