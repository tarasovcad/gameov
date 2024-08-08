import Link from "next/link";
import React from "react";
import UnderlineLinkTerms from "../ui/UnderlineLinkTerms";

const AuthSignUpFooter = () => {
  return (
    <div className="text-white/50 flex mt-[50px] text-sm gap-16">
      <span>© 2024 gameov, Inc.</span>
      <ul className="flex gap-2 ">
        <li>
          <UnderlineLinkTerms link={"/contacts"} title="Contacts" />
        </li>
        <span>•</span>
        <li>
          <UnderlineLinkTerms link={"/policy"} title="Privacy Policy" />
        </li>
        <span>•</span>
        <li>
          <UnderlineLinkTerms link={"/terms"} title="Terms & Conditions" />
        </li>
      </ul>
    </div>
  );
};

export default AuthSignUpFooter;
