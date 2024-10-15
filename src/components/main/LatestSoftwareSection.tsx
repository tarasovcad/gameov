"use client";
import React from "react";
import LatestMainSection from "./LatestMainSection";
import {softwareList} from "@/data/fakePostData";
import BlogCart from "./BlogCart";
import {defaultBreakpointsCart} from "@/data/defaultBreakpoints";
const LatestSoftwareSection = () => {
  return (
    <LatestMainSection
      title="Latest Software"
      linkHref="/software"
      itemsList={softwareList}
      breakpoints={defaultBreakpointsCart}
      renderItemCard={(item) => <BlogCart item={item} />}
    />
  );
};

export default LatestSoftwareSection;
