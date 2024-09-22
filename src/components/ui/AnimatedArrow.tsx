import {motion} from "framer-motion";

const AnimatedArrow = ({isHovered}: {isHovered: boolean}) => {
  return (
    <motion.svg
      className={`max-[1000px]:hidden`}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{x: isHovered ? 5 : 0}}
      transition={{duration: 0.2}}>
      <path
        d="M7.5 15L12.5 10L7.5 5"
        stroke="white"
        strokeOpacity="0.67"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
};

export default AnimatedArrow;
