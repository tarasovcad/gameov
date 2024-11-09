import {gql} from "@apollo/client";

export const GET_POSTS_FOR_GAME_LIST_PAGE = gql`
  query GetPostsForGameListPage($page: Int!, $limit: Int!) {
    posts(page: $page, limit: $limit) {
      edges {
        id
        title
        cardDescription
        slug
        date
        images
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        totalPages
        totalPosts
        currentPage
      }
    }
  }
`;
// export const GET_POSTS = gql`
//   query GetPosts {
//     posts {
//       id
//       title
//       description
//       cardDescription
//       slug
//       date
//       downloadLink
//       tags
//       appVersion
//       platforms
//       publisher
//       releasedDate
//       interfaceLanguages
//       # systemRequirements
//       # faqList
//       voiceLanguages
//       images
//       status
//       authorUserName
//       createdAt
//     }
//   }
// `;
