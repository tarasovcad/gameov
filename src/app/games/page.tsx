import GamesPage from "@/components/pages/Games/Games";
import {getClient} from "@/lib/apollo-client";
import {PostsData} from "@/types/singlePost";
import React from "react";
import {GET_POSTS} from "../graphql/queries/posts";

const Page = async () => {
  const start = performance.now();

  const client = getClient();
  const {data} = await client.query<PostsData>({
    query: GET_POSTS,
  });

  const end = performance.now();
  const fetchTime = end - start;
  setTimeout(() => {
    console.log(`Fetched in ${fetchTime / 1000} seconds`);
  }, 1000);

  return <GamesPage data={data} />;
};

export default Page;
