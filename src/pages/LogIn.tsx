import React from "react";

import {
  Box,
  Link,
  Button,
  FormControl,
  Input,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import Layout from "../components/layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <Box alignItems="center">
        <Card w="100%" align="center" height="700px">
          <CardHeader>
            <Box textAlign="center" color="tomato">
              <VStack display="flex" as="header" spacing="3" mt="5">
                <Flex color="black" fontSize="45px">
                  {" "}
                  Hello{" "}
                </Flex>
                <Flex>
                  <Button
                    borderRadius="none"
                    backgroundColor="white"
                    width="150px"
                    fontSize="15px"
                    fontWeight="500"
                    letterSpacing=".05em"
                    lineHeight="52px"
                    textAlign="center"
                    textDecoration="none"
                    textTransform="uppercase"
                    height="50px"
                  >
                    {" "}
                    Log In{" "}
                  </Button>
                  <Button
                    borderRadius="none"
                    backgroundColor="white"
                    width="150px"
                    fontSize="15px"
                    fontWeight="500"
                    letterSpacing=".05em"
                    lineHeight="52px"
                    textAlign="center"
                    textDecoration="none"
                    textTransform="uppercase"
                    height="50px"
                  >
                    {" "}
                    Sing Up{" "}
                  </Button>
                </Flex>
              </VStack>
            </Box>
          </CardHeader>

          <CardBody>
            <Box my={3} width="300px" textAlign="right" color="tomato">
              <FormControl>
                <Input
                  borderRadius="none"
                  width="88%"
                  type="email"
                  placeholder="Email address"
                />
              </FormControl>
              <FormControl mt={33}>
                <Input
                  borderRadius="none"
                  width="88%"
                  type="password"
                  placeholder="Password"
                />
              </FormControl>

              <Button
                my={0}
                colorScheme="blue"
                width="100%"
                mt={35}
                backgroundColor="black"
                fontWeight="bold"
                letterSpacing=".05em"
                height="50px"
                borderRadius="none"
                textAlign="center"
                textTransform="uppercase"
                textColor="white"
              >
                Log In
              </Button>
            </Box>
          </CardBody>
          <CardFooter>
            <Box textAlign="center">
              <Link>Forgot your password?</Link>
            </Box>
          </CardFooter>
        </Card>
      </Box>
    </Layout>
  );
};

export default Contact;
