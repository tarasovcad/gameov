"use client";
import React, {useRef, useEffect} from "react";
import {useLottie} from "lottie-react";

const LottieAnimation = ({
  animationData,
  size = 24,
  isHovered,
  infinite = false,
}: {
  animationData: any;
  size?: number;
  isHovered?: boolean;
  infinite?: boolean;
}) => {
  const lottieRef = useRef(null);

  const options = {
    animationData: animationData,
    loop: infinite,
    autoplay: false,
    lottieRef: lottieRef,
  };

  const {View, play, stop, setDirection, setSpeed} = useLottie(options);

  useEffect(() => {
    setSpeed(1.5);
  }, [setSpeed]);

  useEffect(() => {
    if (infinite) {
      play();
    } else if (isHovered) {
      setDirection(1);
      play();
    } else {
      setDirection(-1);
      play();
    }
  }, [infinite, isHovered, setDirection, play]);

  return (
    <div
      style={{width: size, height: size}}
      className={`width-[${size}px] height-[${size}px]`}>
      {View}
    </div>
  );
};

export default LottieAnimation;
