import React from "react";

const AuthSeparator = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="stroke flex-grow"></div>
      <span className="text-white/80 px-5 max-[600px]:text-[15px]">or</span>
      <div className="stroke flex-grow"></div>
    </div>
  );
};

export default AuthSeparator;
