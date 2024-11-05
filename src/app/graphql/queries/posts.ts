import {gql} from "@apollo/client";

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      description
      slug
      date
      downloadLink
      tags
      appVersion
      platforms
      publisher
      releasedDate
      images
      status
      createdAt
    }
  }
`;
