import React from "react";
import GameCartMainMenu from "./GameCartMainMenu";

const games = [
  {
    title: "Chaperone",
    description:
      "A first-person psychological horror game set in a mysterious workplace.",
    image: "/fake/1.jpg",
    year: 2023,
    views: "1.2K",
    comments: 120,
  },
  {
    title: "Stellar Odyssey",
    description:
      "An epic space exploration RPG with stunning visuals and deep storylines.",
    image: "/fake/2.png",
    year: 2023,
    views: "2.5K",
    comments: 230,
  },
  {
    title: "Neon Nights",
    description:
      "A cyberpunk-themed action-adventure game set in a dystopian future.",
    image: "/fake/3.jpg",
    year: 2023,
    views: "1.8K",
    comments: 150,
  },
  {
    title: "Mystic Realms",
    description:
      "A fantasy MMORPG with intricate world-building and magical combat.",
    image: "/fake/4.jpg",
    year: 2023,
    views: "3.1K",
    comments: 280,
  },
  {
    title: "Velocity Rush",
    description:
      "A high-octane racing game featuring futuristic vehicles and tracks.",
    image: "/fake/5.png",
    year: 2023,
    views: "1.5K",
    comments: 110,
  },
  {
    title: "Chronos Shift",
    description: "A time-bending puzzle platformer with innovative mechanics.",
    image: "/fake/6.png",
    year: 2023,
    views: "2.0K",
    comments: 190,
  },
  {
    title: "Eco Warriors",
    description:
      "An environmental strategy game where players restore ecosystems.",
    image: "/fake/7.jpg",
    year: 2023,
    views: "1.7K",
    comments: 140,
  },
  {
    title: "Shadow Tactics",
    description: "A stealth-based tactical game set in a dark fantasy world.",
    image: "/fake/8.png",
    year: 2023,
    views: "2.3K",
    comments: 210,
  },
  {
    title: "Pixel Legends",
    description: "A retro-style RPG paying homage to classic 16-bit era games.",
    image: "/fake/9.jpg",
    year: 2023,
    views: "1.9K",
    comments: 170,
  },
];

const ListOfItems = () => {
  return (
    <div className="grid grid-cols-3 gap-8 max-[1100px]:grid-cols-2 max-[700px]:grid-cols-1">
      {games.map((game, index) => (
        <GameCartMainMenu key={index} game={game} />
      ))}
    </div>
  );
};

export default ListOfItems;
