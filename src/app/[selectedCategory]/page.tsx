import ListOfPosts from "@/components/pages/ListOfPosts";
import {GET_POSTS_FOR_LIST_PAGE} from "@/graphql/queries/posts";
import {getClient} from "@/lib/apollo-client";
import {PostsData} from "@/types/singlePost";
import {cookies} from "next/headers";
import {notFound} from "next/navigation";
import React from "react";

interface CateGoryPageProps {
  params: {
    selectedCategory: string;
  };
  searchParams: {
    page?: string;
  };
}

const CateGoryPage = async ({params, searchParams}: CateGoryPageProps) => {
  const cookieStore = cookies();
  const gridViewCookie = cookieStore.get("gridViewGameov")?.value === "true";
  const start = performance.now();
  const currentPage = Number(searchParams.page) || 1;

  const pageSize = 100; // Can be reduces to optimize performance if needed
  const client = getClient();

  const categoryOptions = [
    {
      graphqlValue: "PC_GAMES",
      searchParams: "pc-games",
      label: "PC GAMES",
    },
    {
      graphqlValue: "SOFTWARE",
      searchParams: "software",
      label: "Software",
    },
    {
      graphqlValue: "MAC_OS_SOFTWARE",
      searchParams: "mac-os-software",
      label: "Mac OS Software",
    },
    {
      graphqlValue: "GRAPHICS_AND_DESIGN",
      searchParams: "graphics-and-design",
      label: "Graphics and Design",
    },
  ];

  const selectedCategory = categoryOptions.find(
    (option) => option.searchParams === params.selectedCategory,
  );

  if (!selectedCategory) {
    notFound();
  }

  const {data} = await client.query<PostsData>({
    query: GET_POSTS_FOR_LIST_PAGE,
    fetchPolicy: "cache-first",
    variables: {
      page: currentPage,
      limit: pageSize,
      status: "PUBLISHED",
      selectedCategory: selectedCategory?.graphqlValue,
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

  return (
    <div>
      {selectedCategory.searchParams === "pc-games" && (
        <ListOfPosts data={data} gridViewCookie={gridViewCookie} />
      )}
    </div>
  );
};

export default CateGoryPage;
