import React from "react";
import { IconButton, Icon } from "@chakra-ui/react";
import { FaComment } from "react-icons/fa";

const ChatIcon = ({ onClick }) => {
    return (
        <IconButton
            aria-label="ChatButton"
            icon={<Icon as={FaComment} />}
            position="fixed"
            bottom="2rem"
            right="2rem"
            borderRadius="full"
            bg="blue.500"
            color="white"
            size="lg"
            onClick={onClick}
        />
    );
};

export default ChatIcon;