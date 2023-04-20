import React, { useEffect } from "react";
import { useSephoraContext } from "../SephoraContext";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import "../components/header/Header";
import Layout from "../components/layout/Layout";
import TitleEshop from "../components/titles/TitleEshop";
import { NavLink } from "react-router-dom";

const Eshop = () => {
  // vytahnuti polozek na strance eshop z contextu
  const { cosmetic, searchCosmetic, brands, searchBrands } =
    useSephoraContext();
  useEffect(() => {
    searchCosmetic();
  }, []);
  return (
    <Layout>
      <TitleEshop />
      {/*// funkce map se vola na poli s nazvem cosmetic.data, produkt je iterovany prvek*/}
      <Flex backgroundColor="white" width="100%" flexWrap="wrap">
        {cosmetic?.data?.map((product, index) => {
          console.log(product, "product");
          return (
            <NavLink
              to={`/eshop/${product.id}`}
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              <Box
                alignItems="center"
                display="flex"
                flexDirection="column"
                w={{ sm: "100%", md: "50%" }}
                p="1rem"
                margin="0.5rem"
                boxShadow="0 0 10px 0 rgba(0,0,0,0.5)"
                key={product?.id + index}
              >
                {/*<img src={product?.attributes?.['image-urls'][1]} alt={product?.title} />*/}
                {/*<img src={product?.attributes?.['cart-image-urls'][0]} alt={product?.title}/>*/}
                {/*<p>benefits:{product?.attributes?.benefits}</p>*/}
                <Text>{product?.attributes?.name}</Text>
                <Box>
                  <Image
                    src={product?.attributes?.["default-image-urls"][0]}
                    alt={product?.title}
                  />
                  {/*<Image src={product?.attributes?.['cart-image-urls'][1]} alt={product?.title}/>*/}
                  {/*<Image src={product?.attributes?.['cart-image-urls'][2]} alt={product?.title}/>*/}
                  {/*<Image src={product?.attributes?.['cart-image-urls'][3]} alt={product?.title}/>*/}
                  {/*<Image src={product?.attributes?.['cart-image-urls'][4]} alt={product?.title}/>*/}
                  {/*<Image src={product?.attributes?.['cart-image-urls'][5]} alt={product?.title}/>*/}
                </Box>
                <Text>price:{product?.attributes?.price}</Text>
                <Text>rating:{product?.attributes?.rating}</Text>
                {/*<img src={product?.attributes?.['default-image-urls'][1]} alt={product?.title}/>*/}
                {/*<img src={product?.attributes?.['default-image-urls'][2]} alt={product?.title}/>*/}
                {/*<img src={product?.attributes?.['default-image-urls'][3]} alt={product?.title}/>*/}
                {/*<img src={product?.attributes?.['default-image-urls'][4]} alt={product?.title}/>*/}
                {/*<img src={product?.attributes?.['default-image-urls'][5]} alt={product?.title}/>*/}
                {/*<img src={product?.attributes?.['default-image-urls'][6]} alt={product?.title}/>*/}

                <Text>id:{product?.id}</Text>
                {/*<img src={product?.attributes?.['zoom-image-urls'][1]} alt={product?.title}/>*/}
                {/*<img src={product?.attributes?.['zoom-image-urls'][2]} alt={product?.title}/>*/}
                {/*<img src={product?.attributes?.['zoom-image-urls'][3]} alt={product?.title}/>*/}
                {/*<img src={product?.attributes?.['zoom-image-urls'][4]} alt={product?.title}/>*/}
                {/*<img src={product?.attributes?.['zoom-image-urls'][5]} alt={product?.title}/>*/}
                {/*<img src={product?.attributes?.['zoom-image-urls'][6]} alt={product?.title}/>*/}

                {/*<img src={product?.attributes?.['closeup-image-urls'][0]} alt={product?.title}/>*/}
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
