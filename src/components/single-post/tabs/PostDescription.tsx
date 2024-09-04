import React, {useState} from "react";
import {ChevronDown, ChevronUp} from "lucide-react";
import {motion, AnimatePresence} from "framer-motion";

const PostDescription = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const descriptionText = (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-[26px] font-bold">Role Playing</h1>
        <p className="text-[16px] text-white/50 font-normal ">
          If you like role-playing adventures, then you will like our next offer
          regarding an attempt to send you to a fabulous world. This time you
          have to take on the role of a hero who must unite the strongest heroes
          around him, who must do everything to save the world. However, this
          time you will have to focus as much as possible on completing
          assignments and try to achieve victory. You will have to fight a lot,
          use a variety of skills and solve puzzles. Do not worry, you will
          gradually adapt to the new conditions and will be able to enjoy a
          favorable game.
        </p>
      </div>

      <div>
        <h1 className="text-[26px] font-bold">Party Adventure</h1>
        <p className="text-[16px] text-white/50 font-normal ">
          The main advantage of your adventure will be that you will have to put
          a lot of effort into achieving a good result. And to do this, you will
          need to manage a whole group of heroes, each of whom will have not
          only unique skills, but also inventory, as well as additional
          abilities. And first you have to download Solasta Crown of the
          Magister via torrent on your PC to go on this exciting adventure. At
          the same time, you can fully control each character, be responsible
          for inventory and combine abilities. But you will not be able to
          influence their worldview, so you can expect their criticism or
          approval when you make important decisions. In general, you should be
          careful and take into account your surroundings.
        </p>
      </div>
      <div>
        <h1 className="text-[26px] font-bold">The best of board games</h1>
        <p className="text-[16px] text-white/50 font-normal ">
          Another interesting advantage of the game is that it was created
          taking into account the opinions of fans. And those, in turn, tried to
          bring the rules and format of board games to the game. Therefore, we
          can note the high level of hardcore, the unpredictability of events
          and the abundance of various situations. You just need to download the
          torrent Solasta Crown of the Magister on your PC and you can go on an
          adventure that will delight you not only with details, but also with
          unique stories. Remember that in this game you will have complete
          freedom of action, so you should have a lot of fun.
        </p>
      </div>
      <div>
        <p className="text-[16px] text-white/50 font-normal ">
          This role-playing game shows that sometimes developers can be
          condescending and listen carefully to the opinions of the players. It
          will be enough just to collect your thoughts and try to achieve a
          favorable result. But do not take unnecessary risks, as a negative
          result may be too painful. We wish you good luck and success!
        </p>
      </div>
    </div>
  );

  return (
    <div>
      <AnimatePresence initial={false}>
        <motion.div
          key="content"
          initial="collapsed"
          animate={isCollapsed ? "collapsed" : "expanded"}
          exit="collapsed"
          variants={{
            expanded: {height: "auto", opacity: 1},
            collapsed: {height: 160, opacity: 1},
          }}
          transition={{duration: 0.3, ease: "easeInOut"}}
          style={{overflow: "hidden", position: "relative"}}>
          {descriptionText}
          {isCollapsed && (
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "55px",
                background: "linear-gradient(to bottom, transparent, #181818)",
                pointerEvents: "none",
              }}
            />
          )}
        </motion.div>
      </AnimatePresence>
      <motion.button
        onClick={toggleCollapse}
        className="mt-4 text-white transition-colors duration-300"
        whileHover={{scale: 1.05}}
        whileTap={{scale: 0.95}}>
        {isCollapsed ? (
          <div className="flex items-center gap-2">
            <ChevronUp />
            <p>Show more</p>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <ChevronDown />
            <p>Show less</p>
          </div>
        )}
      </motion.button>
    </div>
  );
};

export default PostDescription;
