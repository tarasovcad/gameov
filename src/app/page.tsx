import React from "react";
import Hero from "@/components/hero/Hero";
import LatestGameSection from "@/components/main/LatestGameSection";

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

  return (
    <div className="max-[700px]:px-0 relative">
      <Hero />
      <LatestGameSection games={games} />
    </div>
  );
};

export default Home;
