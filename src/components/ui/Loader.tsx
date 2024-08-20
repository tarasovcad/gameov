import {Loader2} from "lucide-react";
import React from "react";
import {PacmanLoader, ScaleLoader} from "react-spinners";
const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <ScaleLoader color="#fff" height={50} width={6.7} />
    </div>
  );
};

export default Loader;
