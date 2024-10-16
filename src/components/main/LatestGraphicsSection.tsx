"use client";
import React from "react";
import LatestMainSection from "./LatestMainSection";
import {graphicsList} from "@/data/fakePostData";
import BlogCart from "./BlogCart";
import {defaultBreakpointsCart} from "@/data/defaultBreakpoints";

const LatestGraphicsSection = () => {
  return (
    <LatestMainSection
      title="Latest Graphics And Design"
      linkHref="/graphics"
      itemsList={graphicsList}
      breakpoints={defaultBreakpointsCart}
      renderItemCard={(item) => <BlogCart item={item} />}
    />
  );
};

export default LatestGraphicsSection;
