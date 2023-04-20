import React from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const LogInButton = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/LogIn");
  };

  return (
    <Button
      fontSize="13"
      boxShadow="none"
      borderColor="transparent"
      bg="transparent"
      textTransform="uppercase"
      onClick={handleButtonClick}
      _hover={{ cursor: "pointer", textDecoration: "underline" }}
    >
      Log In
    </Button>
  );
};

export default LogInButton;
