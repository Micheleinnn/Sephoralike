import React from "react";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/all";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

function TopBar() {
  return (
    <Flex
      display="flex"
      marginBottom="5px"
      alignItems="center"
      bg="black"
      color="black"
      h="9px"
      p={3}
    >
      <Box w="100%" textAlign="center">
        <NavLinkStyled to={"/Eshop"}>
          Get away in jasmine. Shop now
          <IconButton
            h="9px"
            border="none"
            ml="6px"
            bg="black"
            aria-label="Odkaz na Eshop"
            color="white"
            icon={<FiArrowRight />}
            transition="transform 0.3s"
            _hover={{
              transform: "translateX(0.3cm)",
            }}
          />
        </NavLinkStyled>
      </Box>
    </Flex>
  );
}

export default TopBar;

const NavLinkStyled = styled(NavLink)`
  font-family: Helvetica, sans-serif;
  font-size: 12px;
  text-decoration: none;
  color: white;
  padding: 10px;
`;
