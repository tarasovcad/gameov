export const dynamic = "force-dynamic";
export const revalidate = 30;

import GamesPage from "@/components/pages/Games/Games";
import {getClient} from "@/lib/apollo-client";
import {PostsData} from "@/types/singlePost";
import React from "react";
import {GET_POSTS_FOR_GAME_LIST_PAGE} from "../graphql/queries/posts";

const Page = async () => {
  const start = performance.now();

  const client = getClient();
  const {data} = await client.query<PostsData>({
    query: GET_POSTS_FOR_GAME_LIST_PAGE,
    fetchPolicy: "cache-first",
    context: {
      fetchOptions: {
        next: {revalidate: 30},
      },
    },
  });

  const end = performance.now();
  const fetchTime = end - start;

  setTimeout(() => {
    console.log(`Fetched in ${fetchTime / 1000} seconds`);
  }, 1000);

  return <GamesPage data={data} />;
};

export default Page;
