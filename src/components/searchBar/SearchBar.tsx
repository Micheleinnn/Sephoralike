import React from "react";
import {IoSearchOutline} from "react-icons/all";
import {Box, IconButton} from "@chakra-ui/react";

function SearchBar({setShow,show}) {

    function handleClick() {
        setShow(!show);
    }

    return (
        <Box style={{ position: "relative" }}>
            <IconButton
                aria-label="Search"
                icon={<IoSearchOutline />}
                boxShadow="none"
                borderColor="transparent"
                bg="transparent"
                onClick={handleClick} // Obsluha stisknutí ikony pro otevření SearchBar
            />

        </Box>
    );
}

export default SearchBar;