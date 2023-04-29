import React, { useEffect } from "react";
import { useSephoraContext } from "../SephoraContext";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import "../components/header/Header";
import Layout from "../components/layout/Layout";
import TitleEshop from "../components/titles/TitleEshop";
import { NavLink } from "react-router-dom";
import SearchBar from "../components/searchBar/SearchBar";
import SearchEshopBar from "../components/searchBar/SearchEshopBar";

const Eshop = () => {
  // vytahnuti polozek na strance eshop z contextu
  const { cosmetic, getCosmetic, brands, searchBrands, getStaticProducts } =
    useSephoraContext();

  useEffect(() => {
    getCosmetic();
    getStaticProducts();
  }, []);
  console.log(cosmetic, "cosmetic");

  return (
    <Layout>
      <TitleEshop />
      <SearchEshopBar items={undefined} onFilterChange={undefined} />
      {/*// funkce map se vola na poli s nazvem cosmetic.data, produkt je iterovany prvek*/}
      <Flex backgroundColor="#f7f0ea" width="100%" flexWrap="wrap">
        {cosmetic?.data?.map((product, index) => {
          console.log(product, "product");
          return (
            <NavLink
              to={`/eshop/${product.id}`}
              target="_self"
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              <Box
                alignItems="center"
                display="flex"
                flexDirection="column"
                w={{ sm: "100%", md: "100%" }}
                p="1rem"
                key={product?.id + index}
              >
                <Box alignItems="center" w={{ sm: "130%", md: "100%" }}>
                  <img
                    src={product?.attributes?.["closeup-image-urls"][0]}
                    alt={product?.title}
                  />
                  <Box
                    textColor="black"
                    textDecorationLine="none"
                    textAlign="center"
                  >
                    <Text textAlign="center">{product?.attributes?.name}</Text>
                    <Text textAlign="center">
                      price:{product?.attributes?.price}
                    </Text>
                    <Text textAlign="center">
                      rating:{product?.attributes?.rating}
                    </Text>
                    <Text textAlign="center">id:{product?.id}</Text>
                  </Box>
                </Box>

                {/*<img src={product?.attributes?.['image-urls'][1]} alt={product?.title} />*/}
                {/*<p>benefits:{product?.attributes?.benefits}</p>*/}
                {/*<Image src={product?.attributes?.['cart-image-urls'][4]} alt={product?.title}/>*/}
                {/*<img src={product?.attributes?.['default-image-urls'][1]} alt={product?.title}/>*/}
                {/*<img src={product?.attributes?.['zoom-image-urls'][6]} alt={product?.title}/>*/}
                {/*<img src={product?.attributes?.['featured-image-urls'][1]} alt={product?.title}/>*/}
              </Box>
            </NavLink>
          );
        })}
      </Flex>
    </Layout>
  );
};

export default Eshop;
