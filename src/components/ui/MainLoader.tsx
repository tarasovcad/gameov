import React from "react";
import LottieAnimation from "./LottieAnimation";
import loader from "../../lottie/loading.json";

const MainLoader = () => {
  return (
    <div>
      <LottieAnimation animationData={loader} size={35} infinite />
    </div>
  );
};

export default MainLoader;
