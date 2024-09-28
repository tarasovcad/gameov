import React, {useState} from "react";
import Image from "next/image";
import {ChevronDown} from "lucide-react";
import {SidebarSmallLinks} from "@/data/SidebarLinks";
import useMenuAnimation from "@/hooks/useMenuAnimation";
import {motion} from "framer-motion";

const BurgerMenuOtherLinks = ({title}: {title: string}) => {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);
  return (
    <div ref={scope}>
      <motion.div
        className="text-white/70 item transition ease-in-out duration-200 py-2 rounded-md px-2 hover:text-[#ffffff] hover:bg-[#2D2D2D]"
        onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center justify-between gap-2">
          <span className="leading-normal text-nowrap text-base">{title}</span>
          <div className="flex gap-[8px] items-center mr-1">
            <div style={{transformOrigin: "50% 55%"}}>
              <ChevronDown size={20} color="#9B9B9B" id="menu-icon" />
            </div>
          </div>
        </div>
      </motion.div>

      {isOpen && (
        <motion.div
          className="dropdown-content"
          style={{
            clipPath: "inset(10% 50% 90% 50% round 12px)",
          }}>
          {SidebarSmallLinks.map((link, index) => (
            <motion.div key={index} className="dropdown-item">
              <div className="text-white/70 item transition ease-in-out duration-200 py-2 rounded-md px-2 hover:text-[#ffffff] hover:bg-[#2D2D2D]">
                <div className="flex items-center justify-between gap-2 ">
                  <span className=" leading-normal text-nowrap text-base">
                    {link.title}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default BurgerMenuOtherLinks;
