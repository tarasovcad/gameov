import {gql} from "@apollo/client";

export const GET_POSTS_FOR_LIST_PAGE = gql`
  query GetPostsForListPage(
    $page: Int!
    $limit: Int!
    $selectedCategory: String!
    $sortBy: String!
  ) {
    posts(
      page: $page
      limit: $limit
      selectedCategory: $selectedCategory
      sortBy: $sortBy
    ) {
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

export const GET_SIX_LATEST_GAME_POSTS = gql`
  query GetSixLatestPosts($limit: Int!, $selectedCategory: String!) {
    latestPosts(limit: $limit, selectedCategory: $selectedCategory) {
      id
      title
      cardDescription
      slug
      dated
      images
    }
  }
`;

export const GET_ALL_UNIQUE_FILTERS = gql`
  query GetAllUniqueFilters {
    getAllUniqueFilters {
      tags
      publisher
      platforms
      interfaceLanguages
      voiceLanguages
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
