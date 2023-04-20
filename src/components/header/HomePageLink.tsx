import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Image } from "@chakra-ui/react";
import logo from "./logo.png";

const HomePageLink = () => {
  return (
    <RouterLink to="/">
      <Image src={logo} alt="Logo" boxSize="45px" cursor="pointer" />
    </RouterLink>
  );
};

export default HomePageLink;
