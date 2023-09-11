import { gql } from "@apollo/client";

export const getPosts = gql`
  query GetPosts {
    posts {
      description
      likes {
        user {
          name
        }
      }
      postedBy {
        name
        email
      }
    }
  }
`;
