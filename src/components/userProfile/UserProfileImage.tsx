import React from "react";
import Image from "next/image";

const UserProfileImage = ({image}: {image: string | null | undefined}) => {
  return (
    <div className="z-10 rounded-full -mt-[58px] mb-3 bg-[#181818] w-[140px] h-[140px] flex items-center justify-center">
      {image ? (
        <div className="w-auto h-[140px] flex rounded-full items-center">
          <Image
            src={image}
            height={128}
            width={128}
            className="rounded-full z-10 object-cover"
            unoptimized
            alt="Profile Image"
            style={{height: "128px", width: "128px"}}
          />
        </div>
      ) : (
        <div className="w-32 h-32 flex">
          <Image
            src={"/profile/avatar.png"}
            height={128}
            width={128}
            className="z-10 object-cover"
            unoptimized
            alt="Profile Image"
            style={{height: "128px", width: "128px"}}
          />
        </div>
      )}
    </div>
  );
};

export default UserProfileImage;
