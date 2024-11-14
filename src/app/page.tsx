import React from "react";
import Hero from "@/components/hero/Hero";
import PopularBlogSection from "@/components/main/PopularBlogSection";
import BestPostsCollection from "@/components/main/BestPostsCollection";
import {FooterSection} from "@/components/main/FooterSection";
import {getClient} from "@/lib/apollo-client";
import {GET_SIX_LATEST_GAME_POSTS} from "@/graphql/queries/posts";
import {SixLatestPostsData} from "@/types/singlePost";
import {
  defaultBreakpointsCart,
  defaultBreakpointsGameCart,
} from "@/data/defaultBreakpoints";
import LatestSection from "@/components/main/LatestSection";

const Home = async () => {
  const start = performance.now();
  const pageSize = 9; // Can be reduces to optimize performance if needed

  const client = getClient();

  const gamesData = await client.query<SixLatestPostsData>({
    query: GET_SIX_LATEST_GAME_POSTS,
    fetchPolicy: "cache-first",
    variables: {
      limit: pageSize,
      status: "PUBLISHED",
      selectedCategory: "PC_GAMES",
    },
    context: {
      fetchOptions: {
        next: {revalidate: 30},
      },
    },
  });
  const softwareData = await client.query<SixLatestPostsData>({
    query: GET_SIX_LATEST_GAME_POSTS,
    fetchPolicy: "cache-first",
    variables: {
      limit: pageSize,
      status: "PUBLISHED",
      selectedCategory: "SOFTWARE",
    },
    context: {
      fetchOptions: {
        next: {revalidate: 30},
      },
    },
  });

  const graphicsData = await client.query<SixLatestPostsData>({
    query: GET_SIX_LATEST_GAME_POSTS,
    fetchPolicy: "cache-first",
    variables: {
      limit: pageSize,
      status: "PUBLISHED",
      selectedCategory: "GRAPHICS_AND_DESIGN",
    },
    context: {
      fetchOptions: {
        next: {revalidate: 30},
      },
    },
  });

  const macOsData = await client.query<SixLatestPostsData>({
    query: GET_SIX_LATEST_GAME_POSTS,
    fetchPolicy: "cache-first",
    variables: {
      limit: pageSize,
      status: "PUBLISHED",
      selectedCategory: "MAC_OS_SOFTWARE",
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
    <div className="max-[700px]:px-0 relative">
      <Hero />
      <div className="flex flex-col gap-[60px]  max-[700px]:px-4 max-[450px]:px-[3.5vw] ">
        <LatestSection
          title="Latest PC Games"
          linkHref="/pc-games"
          cardType="pc-games"
          data={gamesData.data}
          breakpoints={defaultBreakpointsGameCart}
        />
        <LatestSection
          title="Latest Software"
          linkHref="/software"
          cardType="software"
          data={softwareData.data}
          breakpoints={defaultBreakpointsCart}
        />
        <LatestSection
          title="Latest Graphics and Design"
          linkHref="/graphics-and-design"
          cardType="graphics-and-design"
          data={graphicsData.data}
          breakpoints={defaultBreakpointsCart}
        />
        <PopularBlogSection />
        <LatestSection
          title="Latest Mac OS Software"
          linkHref="/mac-os-software"
          cardType="mac-os-software"
          data={macOsData.data}
          breakpoints={defaultBreakpointsCart}
        />
        <BestPostsCollection />
        <FooterSection />
      </div>
    </div>
  );
};

export default Home;
