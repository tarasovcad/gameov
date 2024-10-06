"use client";
import {ArrowUpRight, Eye, MessageSquare} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";

import {Card, CardContent} from "@/components/ui/card";

interface Game {
  game: {
    title: string;
    description: string;
    image: string;
    year: number;
    views: string;
    comments: number;
  };
}

const GameCartMainMenu = ({game}: Game) => {
  return (
    <Link href={"/games/" + game.title}>
      <Card
        key={game.title}
        className="bg-bg overflow-hidden border border-border">
        <Image
          src={game.image}
          alt={game.title}
          width={400}
          height={200}
          className="object-cover w-full h-48"
        />
        <CardContent className="p-4">
          <h3 className="text-2xl font-bold mb-2">
            {game.title} ({game.year})
          </h3>
          <p className="text-secondary_text  mb-4">{game.description}</p>
          <div className="flex items-center text-sm text-secondary_text ">
            <span className="mr-3 flex items-center">
              <Eye size={16} className="mr-1" />

              {game.views}
            </span>
            <span className="flex items-center">
              <MessageSquare size={16} className="mr-1" />
              {game.comments}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default GameCartMainMenu;
