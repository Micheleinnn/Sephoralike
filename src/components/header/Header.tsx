import React, { useState } from "react";
import { Box, Flex, Input } from "@chakra-ui/react";
import TopBar from "../topBar/TopBar";
import SearchBar from "../searchBar/SearchBar";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import LogInButton from "./LogInButton";
import HomePageLink from "./HomePageLink";

function Header() {
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // Stavová proměnná pro ukládání hodnoty vyhledávání

  function handleSearchChange(event) {
    setSearchTerm(event.target.value); // Obsluha změny hodnoty ve vyhledávacím inputu
  }

  return (
    <Box>
      <TopBar />
      <Flex
        padding="0.5rem"
        bg="white"
        alignItems="center"
        justifyContent="space-between"
      >
        <HomePageLink />
        <Box display="flex" justifyContent="center" alignItems="center">
          {/*<Spacer/>*/}
          <NavLinkStyled to={"/"}>
            <>Home Page</>
          </NavLinkStyled>
          <Box pl="1rem">
            <NavLinkStyled to={"/Eshop"}>
              <>Eshop</>
            </NavLinkStyled>
          </Box>
        </Box>
        <Flex alignItems="center" flexDirection="row">
          <Flex w="100%" flexDirection="row">
            <LogInButton />
            <SearchBar show={show} setShow={setShow} />
          </Flex>
        </Flex>
      </Flex>
      {show && (
        <BoxStyled
          display="flex"
          justifyContent="center"
          padding=" 1rem"
          backgroundColor="white"
          width="100%"
        >
          <Input
            border="none"
            borderBottom="1px solid black"
            borderRadius="0"
            w="30%"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </BoxStyled>
      )}
    </Box>
  );
}

export default Header;

const NavLinkStyled = styled(NavLink)`
  text-transform: uppercase;
  font-family: Graphik Web, Helvetica Neue, Arial, sans-serif, system-ui;
  font-size: 0.75rem;
  font-weight: bold;
  color: black;
  word-spacing: 1px;
  text-decoration: none;
  text-space: 5px;
  width: max-content;
  display: flex;
`;

const BoxStyled = styled(Box)`
  input:focus-visible {
    border-color: #fab829;
    box-shadow: none;
  }
`;
