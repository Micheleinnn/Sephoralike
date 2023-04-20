import React from 'react';
import {Box, Flex, Text} from "@chakra-ui/react";

const TitleFavorites = () => {
    return (
        <Box display="flex"
             justifyContent="center"
             alignItems="center"
             h="30vh">

            <Flex flexDirection="column" alignItems="center">
                <Box textAlign="center" mt="40px" mb="80px" fontSize="1.5em" fontFamily="Dancing Script">
                    <Text>
                        A few of our
                    </Text>
                    <Text as="span" fontFamily="Helvetica, sans-serif" textTransform="uppercase" fontWeight="300" textDecoration="none" fontSize="2em">
                        Favorites
                    </Text>
                </Box>
            </Flex>
        </Box>
    )
        ;
};

export default TitleFavorites