export const dynamic = "force-dynamic";
export const revalidate = 30;

import GamesPage from "@/components/pages/Games/Games";
import {GET_POSTS_FOR_GAME_LIST_PAGE} from "@/graphql/queries/posts";
import {getClient} from "@/lib/apollo-client";
import {PostsData} from "@/types/singlePost";
import React from "react";

interface PageProps {
  searchParams: {
    page?: string;
  };
}

const Page = async ({searchParams}: PageProps) => {
  const start = performance.now();

  const currentPage = Number(searchParams.page) || 1;

  const pageSize = 2; // Can be reduces to optimize performance if needed

  const client = getClient();

  const {data} = await client.query<PostsData>({
    query: GET_POSTS_FOR_GAME_LIST_PAGE,
    fetchPolicy: "cache-first",
    variables: {
      page: currentPage,
      limit: pageSize,
      status: "PUBLISHED",
    },
    context: {
      fetchOptions: {
        next: {revalidate: 30},
      },
    },
  });

  const end = performance.now();
  const fetchTime = end - start;

  if (process.env.NODE_ENV === "development") {
    console.log(`Fetched in ${fetchTime} ms`);
  }

  return <GamesPage data={data} />;
};

export default Page;
