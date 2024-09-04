import React from "react";

const listOfMinRequirements = [
  {
    title: "OS",
    description: "Windows 10 64-bit",
  },
  {
    title: "Processor",
    description: "Intel Core i5-3470 @ 3.2 GHz or AMD FX-8350 @ 4 GHz",
  },
  {
    title: "RAM",
    description: "8 GB",
  },
  {
    title: "Graphics",
    description: "NVIDIA GeForce GTX 760 or AMD Radeon R9 280",
  },
  {
    title: "DirectX",
    description: "11",
  },
  {
    title: "Storage",
    description: "50 GB",
  },
];
const listOfMaxRequirements = [
  {
    title: "OS",
    description: "Windows 10 64-bit",
  },
  {
    title: "Processor",
    description: "Intel Core i7-4770 @ 3.4 GHz or AMD FX-8350 @ 4 GHz",
  },
  {
    title: "RAM",
    description: "16 GB",
  },
  {
    title: "Graphics",
    description: "NVIDIA GeForce GTX 1060 6GB or AMD Radeon RX 580 8GB",
  },
  {
    title: "DirectX",
    description: "11",
  },
  {
    title: "Storage",
    description: "50 GB",
  },
];

const PostMinRequirements = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-4 mb-20">
        <h2 className="text-[22px] font-semibold ">Minimum requirementss</h2>
        <div className="text-white/70 mt-4">
          <div className="w-full grid grid-cols-2">
            {listOfMinRequirements.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col gap-2 border-t border-[#4e4e4e] pt-4 pb-5 px-4 ${
                  index === listOfMinRequirements.length - 2 ? "border-b" : ""
                }`}>
                <p className="text-[15px] font-semibold text-white text-base">
                  {item.title}
                </p>
                <p className="text-[15px] text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-[22px] font-semibold ">Recommended requirements</h2>
        <div className="text-white/70 mt-4">
          <div className="w-full grid grid-cols-2">
            {listOfMaxRequirements.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col gap-2 border-t border-[#4e4e4e] pt-4 pb-5 px-4 ${
                  index === listOfMaxRequirements.length - 2 ? "border-b" : ""
                }`}>
                <p className="text-[15px] font-semibold text-white text-base">
                  {item.title}
                </p>
                <p className="text-[15px] text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostMinRequirements;
