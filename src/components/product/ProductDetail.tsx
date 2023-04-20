import React, { useEffect, useState } from "react";
import { useLinkClickHandler, useParams } from "react-router-dom";
import { useSephoraContext } from "../../SephoraContext";
import { Box, IconButton, Image, Text } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";
const ProductDetail = ({}) => {
  const { productId } = useParams(); //product id shodne s path id v main.tsx

  const { cosmetic, searchCosmetic, brands, searchBrands } =
    useSephoraContext();

  useEffect(() => {
    searchCosmetic(); //getCosmetic
  }, []);

  console.log(productId, "slug", cosmetic);
  const product = cosmetic?.data?.find((product) => product?.id === productId);
  console.log(product, "product");

  return (
    <Box>
      <Box position="relative">
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
          w={{ sm: "100%", md: "50%" }}
          p="1rem"
          margin="0.5rem"
          boxShadow="0 0 10px 0 rgba(0,0,0,0.5)"
          key={product?.id}
        >
          <Text>{product?.attributes?.name}</Text>
          <Box position="relative">
            {" "}
            <Box
              position="absolute"
              top="0"
              left="0"
              display="flex"
              flexDirection="column"
            >
              <IconButton
                aria-label={"Slider up"}
                icon={<FaArrowUp />}
                // onClick={()=>set)}
              ></IconButton>{" "}
              {product?.attributes?.["cart-image-urls"]?.map((image) => (
                <Image src={image} alt={product?.title} />
              ))}{" "}
            </Box>
            <Image
              src={product?.attributes?.["closeup-image-urls"][0]}
              alt={product?.title}
            />
          </Box>
          <Text>price:{product?.attributes?.price}</Text>
          <Text>rating:{product?.attributes?.rating}</Text>
          <Text>id:{product?.id}</Text>
          <Text>{product?.attributes?.description}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetail;
