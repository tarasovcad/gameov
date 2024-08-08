import Link from "next/link";
import React from "react";

const AuthSignUpFooter = () => {
  return (
    <div className="text-white/50 flex mt-[50px] text-sm gap-16">
      <span>© 2024 gameov, Inc.</span>
      <ul className="flex gap-2 ">
        <Link href={"/"}>
          <li className="hover:underline">Contacts</li>
        </Link>
        <span>•</span>
        <Link href={"/"}>
          <li className="hover:underline">Privacy Policy</li>
        </Link>
        <span>•</span>
        <Link href={"/"}>
          <li className="hover:underline">Terms & Conditions</li>
        </Link>
      </ul>
    </div>
  );
};

export default AuthSignUpFooter;
