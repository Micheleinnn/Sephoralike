import React from "react";
import { Box, Link, Text, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
const Footer = () => {
  return (
    <Box>
      <Box py={8} bg="#f7f0ea">
        <Box
          mb="20px"
          marginTop="20px"
          marginLeft="50px"
          mr={8}
          alignItems="flex-start"
        >
          <Box alignItems="flex-start" mt="12">
            <Text fontWeight="bold">ABOUT</Text>
            <Link mr="10">Our story</Link>
            <Link mr="10">Refer a friend</Link>
            <Link>Careers</Link>
          </Box>
          <Box alignItems="flex-start" mt="18">
            <Text fontWeight="bold">HELP</Text>
            <Link mr="7">Shipping & returns</Link>
            <Link mr="7">All FAQs</Link>
            <Link mr="7">Contact us</Link>
          </Box>
          <Box alignItems="center">
            <Box mt="85">
              {/* Ikony se socialnimi sitemi */}
              <RouterLink to="/ourstory">
                <IconButton
                  icon={<FaFacebook />}
                  variant="ghost"
                  colorScheme="blue"
                  aria-label="Facebook"
                  mr="5"
                />
              </RouterLink>

              <IconButton
                icon={<FaTwitter />}
                variant="ghost"
                colorScheme="gray"
                aria-label="Twitter"
                mr="5"
              />
              <IconButton
                icon={<FaInstagram />}
                variant="ghost"
                colorScheme="brown"
                aria-label="Instagram"
                mr="5"
              />
            </Box>
          </Box>
        </Box>
        <Box mt={8}>
          <Text textAlign="center" color="gray.500">
            Terms & conditions | Accessibility | © 2023 CAW, Inc.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
