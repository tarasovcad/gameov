"use client";
import React from "react";
import LatestMainSection from "./LatestMainSection";
import {macOSSoftware} from "@/data/fakePostData";

import BlogCart from "./BlogCart";
import {defaultBreakpointsCart} from "@/data/defaultBreakpoints";

const LatestMacOSSoftware = () => {
  return (
    <LatestMainSection
      title="Latest Mac OS Software"
      linkHref="/graphics"
      itemsList={macOSSoftware}
      breakpoints={defaultBreakpointsCart}
      renderItemCard={(item) => <BlogCart item={item} />}
    />
  );
};

export default LatestMacOSSoftware;
