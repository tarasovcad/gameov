import React from "react";
import Hero from "@/components/hero/Hero";
import LatestGameSection from "@/components/main/LatestGameSection";
import LatestDesktopSection from "@/components/main/LatestDesktopSection";
import LatestSoftwareSection from "@/components/main/LatestSoftwareSection";

const Home = () => {
  // i fetch the data from the api
  const games = [
    {
      title: "Mystic Realms",
      description:
        "A fantasy MMORPG with intricate world-building and magical combat.",
      image: "/fake/4.jpg",
      year: 2023,
      views: "3.1K",
      comments: 280,
      date: "12 Feb 2024",
    },
    {
      title: "Velocity Rush",
      description:
        "A high-octane racing game featuring futuristic vehicles and tracks.",
      image: "/fake/5.png",
      year: 2023,
      views: "1.5K",
      comments: 110,
      date: "19 Feb 2024",
    },
    {
      title: "Chronos Shift",
      description:
        "A time-bending puzzle platformer with innovative mechanics.",
      image: "/fake/6.png",
      year: 2023,
      views: "2.0K",
      comments: 190,
      date: "26 Feb 2024",
    },
    {
      title: "Eco Warriors",
      description:
        "An environmental strategy game where players restore ecosystems.",
      image: "/fake/7.jpg",
      year: 2023,
      views: "1.7K",
      comments: 140,
      date: "2 Mar 2024",
    },
    {
      title: "Shadow Tactics",
      description: "A stealth-based tactical game set in a dark fantasy world.",
      image: "/fake/8.png",
      year: 2023,
      views: "2.3K",
      comments: 210,
      date: "9 Mar 2024",
    },
    {
      title: "Pixel Legends",
      description:
        "A retro-style RPG paying homage to classic 16-bit era games.",
      image: "/fake/9.jpg",
      year: 2023,
      views: "1.9K",
      comments: 170,
      date: "16 Mar 2024",
    },
    {
      title: "Chaperone",
      description:
        "A first-person psychological horror game set in a mysterious workplace.",
      image: "/fake/1.jpg",
      year: 2023,
      views: "1.2K",
      comments: 120,
      date: "16 Jan 2024",
    },
    {
      title: "Stellar Odyssey",
      description:
        "An epic space exploration RPG with stunning visuals and deep storylines.",
      image: "/fake/2.png",
      year: 2023,
      views: "2.5K",
      comments: 230,
      date: "29 Jan 2024",
    },
    {
      title: "Neon Nights",
      description:
        "A cyberpunk-themed action-adventure game set in a dystopian future.",
      image: "/fake/3.jpg",
      year: 2023,
      views: "1.8K",
      comments: 150,
      date: "5 Feb 2024",
    },
  ];

  const desctopList = [
    {
      title: "Adobe Photoshop 2023",
      description:
        "A powerful image editing software for creative professionals.",
      brief_description: "Video editing software",
      image: "/fake/13.png",
      year: 2023,
      views: "1.2K",
      comments: 120,
      date: "16 Jan 2024",
    },
    {
      title: "HitPaw Video Converter",
      description: "Video Recording Software for Mac, Windows, and Linux.",
      brief_description: "Video recording software",
      image: "/fake/14.png",
      year: 2023,
      views: "1.2K",
      comments: 120,
      date: "16 Jan 2024",
    },
    {
      title: "Adobe After Effects 2023",
      description:
        "A powerful video editing software for visual effects artists.",
      brief_description: "Video editing software",
      image: "/fake/15.png",
      year: 2023,
      views: "1.2K",
      comments: 120,
      date: "16 Jan 2024",
    },
  ];
  const softwareList = [
    {
      title: "MindMeld",
      description:
        "Revolutionary AI-powered brainstorming tool that connects with your thoughts to generate innovative ideas in real-time.",
      brief_description: "AI brainstorming assistant",
      image: "/fake/13.png",
      year: 2023,
      views: "1.2K",
      comments: 120,
      date: "16 Jan 2024",
    },
    {
      title: "EcoTrack",
      description:
        "Smart home system that optimizes energy usage, reducing your carbon footprint while saving you money on utility bills.",
      brief_description: "Eco-friendly home automation",
      image: "/fake/14.png",
      year: 2023,
      views: "3.5K",
      comments: 245,
      date: "03 Mar 2024",
    },
    {
      title: "QuantumCode",
      description:
        "Next-generation programming language designed for quantum computers, making complex calculations accessible to developers.",
      brief_description: "Quantum computing language",
      image: "/fake/15.png",
      year: 2024,
      views: "8.7K",
      comments: 502,
      date: "22 Apr 2024",
    },
    {
      title: "DreamScape",
      description:
        "Virtual reality platform that allows users to explore and interact with their own dreams in a fully immersive 3D environment.",
      brief_description: "VR dream exploration",
      image: "/fake/16.png",
      year: 2023,
      views: "5.9K",
      comments: 331,
      date: "09 Feb 2024",
    },
    {
      title: "BioSync",
      description:
        "Wearable device and app that synchronizes your biological rhythms with your daily schedule for optimal health and productivity.",
      brief_description: "Biorhythm optimization system",
      image: "/fake/17.png",
      year: 2024,
      views: "2.8K",
      comments: 189,
      date: "11 May 2024",
    },
    {
      title: "LinguaLink",
      description:
        "Real-time language translation software that uses advanced AI to preserve cultural nuances and idiomatic expressions.",
      brief_description: "AI-powered translation tool",
      image: "/fake/18.png",
      year: 2023,
      views: "4.3K",
      comments: 276,
      date: "28 Dec 2023",
    },
  ];

  return (
    <div className="max-[700px]:px-0 relative">
      <Hero />
      <div className="flex flex-col gap-[45px] mb-[100px]">
        <LatestGameSection games={games} />
        <LatestSoftwareSection softwareList={softwareList} />
        <LatestDesktopSection desctopList={desctopList} />
      </div>
    </div>
  );
};

export default Home;
