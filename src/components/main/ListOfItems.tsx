import React from "react";
import GameCartMainMenu from "./GameCartMainMenu";

const item = [
  {
    name: "Chaperone",
    year: 2023,
  },
  {
    name: "The Last of Us",
    year: 2021,
  },
  {
    name: "The Last of Us 2",
    year: 2022,
  },
  {
    name: "The Last of Us 2",
    year: 2022,
  },
  {
    name: "The Last of Us 2",
    year: 2022,
  },
  {
    name: "The Last of Us 2",
    year: 2022,
  },
];

const ListOfItems = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {item.map((game, index) => (
        <GameCartMainMenu key={index} name={game.name} year={game.year} />
      ))}
    </div>
  );
};

export default ListOfItems;
