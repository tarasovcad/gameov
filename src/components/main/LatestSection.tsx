"use client";
import React from "react";
import LatestMainSection from "./LatestMainSection";
import SinglePostCard from "./SinglePostCard";
import {SixLatestPostsData} from "@/types/singlePost";

interface LatestSectionProps {
  breakpoints: any;
  linkHref: string;
  cardType: string;
  title: string;
  data: SixLatestPostsData;
}

const LatestSection = ({
  breakpoints,
  linkHref,
  cardType,
  title,
  data,
}: LatestSectionProps) => {
  const listOfItems = data.latestPosts;
  return (
    <LatestMainSection
      title={title}
      linkHref={linkHref}
      itemsList={listOfItems}
      breakpoints={breakpoints}
      renderItemCard={(item) => (
        <SinglePostCard item={item} cardType={cardType} />
      )}
    />
  );
};

export default LatestSection;
