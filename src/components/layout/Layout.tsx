import React from 'react';
import Header from "../header/Header";
import {Box} from "@chakra-ui/react";
import Footer from "../footer/Footer";

const Layout = ({children}) => {
    return (
        <Box>
            <Header/>
            {children}

            <Footer/>
        </Box>
    );
};

export default Layout;