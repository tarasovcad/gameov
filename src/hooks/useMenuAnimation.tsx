import {useEffect} from "react";
import {useAnimate, stagger} from "framer-motion";

export default function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate("#menu-icon", {rotate: isOpen ? 180 : 0}, {duration: 0.2});

    if (isOpen) {
      animate(
        ".dropdown-content",
        {
          clipPath: "inset(0% 0% 0% 0% round 12px)",
        },
        {
          type: "spring",
          bounce: 0,
          duration: 0.3,
        },
      );

      animate(
        ".dropdown-item",
        {opacity: 1, scale: 1, filter: "blur(0px)"},
        {
          duration: 0.1,
          delay: stagger(0.05, {startDelay: 0.1}),
        },
      );
    }
  }, [isOpen, animate]);

  return scope;
}
