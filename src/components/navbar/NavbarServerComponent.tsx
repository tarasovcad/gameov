import React from "react";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import {headers} from "next/headers";
import {noRoutes} from "@/data/WrapperRoutes";
import {userSession} from "@/types/userTypes";
import Navbar from "./Navbar";

const NavbarServerComponent = async () => {
  const data = await getServerSession(authOptions);
  const {email, image, username} = (data?.user as userSession) || {};
  return (
    <>
      <Navbar username={username} image={image} email={email} />
    </>
  );
};

export default NavbarServerComponent;
