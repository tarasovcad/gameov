import React, {useState} from "react";
import {LogOut} from "lucide-react";
import {signOut} from "next-auth/react";
import SignOutModalMenu from "../ui/SignOutModalMenu";

const BurgerMenuLogOutLink = () => {
  const [isSignOutModalOpen, setIsSignOutModalOpen] = useState(false);

  const handleSignOut = () => {
    setIsSignOutModalOpen(true);
  };
  const confirmSignOut = () => {
    signOut({callbackUrl: "/"});
  };

  const closeSignOutModal = () => {
    setIsSignOutModalOpen(false);
  };

  return (
    <>
      <button onClick={handleSignOut}>
        <div
          className={`text-white/70 item transition ease-in-out duration-200 py-2 rounded-md px-2  hover:text-[#ffffff] hover:bg-[#2D2D2D]  `}>
          <div className="flex items-center justify-between gap-2 ">
            <span className=" leading-normal text-nowrap text-sm">
              Sign Out
            </span>
            <LogOut size={18} color="#9B9B9B" className="mr-1" />
          </div>
        </div>
      </button>
      <SignOutModalMenu
        isOpen={isSignOutModalOpen}
        onClose={closeSignOutModal}
        onConfirm={confirmSignOut}
      />
    </>
  );
};

export default BurgerMenuLogOutLink;
