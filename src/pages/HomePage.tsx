import Layout from "../components/layout/Layout";
import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import ButtonShopNow from "../components/buttons/ButtonShopNow";
import TitleFavorites from "../components/titles/TitleFavorites";
import FourImage from "../components/images/FourImages";

const HomePage = () => {
  return (
    <Layout>
      <Flex flexWrap="wrap" w="100%">
        <Flex
          w={{ sm: "100%", md: "50%" }}
          h="100%"
          minH={{ sm: "50vh", md: "80vh" }}
          minW="50%"
          bgImage="url(/src/assets/pic.jpg)"
          backgroundSize="cover"
        />
        <Flex w={{ sm: "100%", md: "50%" }} bg="#f7f0ea">
          <Flex
            w="100%"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Heading
              fontSize={{ sm: "1.5rem", md: "3.5rem" }}
              fontWeight="400"
              fontFamily="Helvetica, sans-serif"
              textTransform="uppercase"
              textAlign="center"
            >
              Spring into Beauty
            </Heading>
            <ButtonShopNow />
          </Flex>
        </Flex>
      </Flex>
      <TitleFavorites />
    </Layout>
  );
};

export default HomePage;
