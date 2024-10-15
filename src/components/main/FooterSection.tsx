"use client";
import Image from "next/image";
import React from "react";
import {WobbleCard} from "../ui/wobble-card";

export function FooterSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4  mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full  min-h-[500px] lg:min-h-[300px] bg-[url('https://w.wallhaven.cc/full/zy/wallhaven-zyekwg.jpg')] bg-cover bg-center"
        className="p-12">
        <div className="">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Unlock the Latest Games: Your Free Portal to 2024 Releases
          </h2>
          <p className="mt-4 text-left text-[15px] text-neutral-200">
            Video games have become a cultural phenomenon, touching nearly
            everyone&apos;s lives. Whether you&apos;re an avid player or someone
            who&apos;s simply overheard conversations about games, they&apos;ve
            made their mark on society. While not considered high art by all,
            video games offer one of the most captivating forms of entertainment
            today. Many eagerly await new releases to experience cutting-edge
            graphics and innovative gameplay. Our website offers free downloads
            of the newest 2024 titles, allowing you to dive into the latest
            digital adventures.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 min-h-[300px] bg-[url('https://w.wallhaven.cc/full/rr/wallhaven-rrl8rw.png')] bg-cover bg-center"
        className="flex justify-center items-center">
        <h2 className="text-2xl text-center">
          Discover Your Next Favorite App
        </h2>
      </WobbleCard>

      <WobbleCard
        containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] bg-[url('https://w.wallhaven.cc/full/gp/wallhaven-gpyj53.png')] bg-cover bg-center"
        className="p-16">
        <div>
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Powerful Tools for Your Digital Life
          </h2>
          <p className="mt-4  text-left  text-base text-neutral-200">
            Software applications for Mac and PC have revolutionized the way we
            work, create, and entertain ourselves. From productivity suites that
            boost efficiency in offices worldwide to creative tools that empower
            artists and designers, these apps cater to a wide range of needs and
            interests. Whether you&apos;re a professional seeking specialized
            software for your field or a casual user looking for helpful
            utilities, there&apos;s an app for almost every purpose. Mac apps
            often boast sleek, user-friendly interfaces, while PC software
            offers extensive customization options. Both platforms continue to
            evolve, with developers constantly introducing innovative features
            and improving performance to enhance user experience across various
            devices and operating systems.
          </p>
        </div>
      </WobbleCard>
    </div>
  );
}
