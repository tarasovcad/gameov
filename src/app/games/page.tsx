export const dynamic = "force-dynamic";
export const revalidate = 30;

import GamesPage from "@/components/pages/Games/Games";
import {GET_POSTS_FOR_GAME_LIST_PAGE} from "@/graphql/queries/posts";
import {getClient} from "@/lib/apollo-client";
import {PostsData} from "@/types/singlePost";
import {Metadata} from "next";
import Link from "next/link";
import React from "react";
import {cookies} from "next/headers";
interface PageProps {
  searchParams: {
    page?: string;
  };
}

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const currentPage = Number(searchParams.page) || 1;
  return {
    title: `Games List - Page ${currentPage}`,
    description: `Browse our collection of games - Page ${currentPage}`,
  };
}

const Page = async ({searchParams}: PageProps) => {
  const cookieStore = cookies();
  const gridViewCookie = cookieStore.get("gridViewGameov")?.value === "true";

  const start = performance.now();
  const currentPage = Number(searchParams.page) || 1;
  const pageSize = 5; // Can be reduces to optimize performance if needed
  const client = getClient();
  const {data} = await client.query<PostsData>({
    query: GET_POSTS_FOR_GAME_LIST_PAGE,
    fetchPolicy: "cache-first",
    variables: {
      page: currentPage,
      limit: pageSize,
      // status: "PUBLISHED",
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
    console.log(`Fetched in ${fetchTime / 1000} seconds`);
  }

  return <GamesPage data={data} gridViewCookie={gridViewCookie} />;
};

export default Page;
