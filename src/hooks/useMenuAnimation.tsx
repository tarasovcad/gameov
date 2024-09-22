import {useEffect} from "react";
import {useAnimate, stagger} from "framer-motion";

export default function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate("#menu-icon", {rotate: isOpen ? 180 : 0}, {duration: 0.2});

    animate(
      ".dropdown-content",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 12px)"
          : "inset(10% 50% 90% 50% round 12px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.3,
      },
    );

    animate(
      ".dropdown-item",
      isOpen
        ? {opacity: 1, scale: 1, filter: "blur(0px)"}
        : {opacity: 0, scale: 0.3, filter: "blur(20px)"},
      {
        duration: 0.1,
        delay: isOpen ? stagger(0.05, {startDelay: 0.1}) : 0,
      },
    );
  }, [isOpen, animate]);

  return scope;
}
