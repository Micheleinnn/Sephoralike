import React from "react";
import {Link as RouterLink} from "react-router-dom";
import {Button, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";


const ButtonShopNow = () => {
    return (
        <Flex align="center">
            <RouterLinkStyled to="/eshop">
                <Button
                    _hover={{
                        bg: "black",
                        color: "white",
                    }}
                    mb="1rem"
                    border="1px solid #111"
                    backgroundColor="transparent"
                    position="relative"
                    display=" flex"
                    textTransform="uppercase"
                    color="black"
                    fontSize="1rem"
                    fontWeight="500"
                    lineHeight="1"
                    letterSpacing=".05em"
                    padding="0.5rem 2.5rem"
                    borderRadius="none"
                >
                    Shop now
                </Button>
            </RouterLinkStyled>

        </Flex>
    )
        ;
};

export default ButtonShopNow;

const RouterLinkStyled = styled(RouterLink)`
text-decoration: none;
`;