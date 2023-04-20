import React, { useState } from "react";
import { Box, Button, Text, Input, VStack } from "@chakra-ui/react";
import ChatWindow from "./ChatWindow";
import ChatIcon from "./ChatIcon";
const ChatRobot = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSendMessage = () => {
        if (inputValue.trim() === "") return;
        setMessages([...messages, inputValue]);
        setInputValue("");
    };

    return (
        <Box
            position="fixed"
            bottom="2rem"
            right="2rem"
            bg="white"
            width="300px"
            height="400px"
            borderRadius="md"
            boxShadow="md"
            p={4}
        >
            <ChatIcon onClick={undefined}/>
            <ChatWindow/>
            <VStack spacing={4} align="stretch">
                <Box flexGrow={1}>
                    {messages.map((message, index) => (
                        <Text key={index}>{message}</Text>
                    ))}
                </Box>
                <Input
                    placeholder="Write message..."
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <Button colorScheme="blue" onClick={handleSendMessage}>
                    Send
                </Button>
            </VStack>
        </Box>
    );
};

export default ChatRobot;