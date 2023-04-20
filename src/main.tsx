import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { SephoraProvider } from "./SephoraContext";
import Eshop from "./pages/Eshop";
import LogIn from "./pages/LogIn";
import OurStory from "./pages/OurStory";
import {
  ColorModeProvider,
  extendTheme,
  ThemeProvider,
} from "@chakra-ui/react";
import "./styles/styles.css";
import ProductDetail from "./components/product/ProductDetail";
// Knihovna ReactRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/eshop",
    element: <Eshop />,
  },
  {
    path: "/eshop/:productId",
    element: <ProductDetail />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/ourstory",
    element: <OurStory />,
  },
]);
const breakpoints = {
  sm: "360px",
  md: "768px",
  lg: "1280px",
  xl: "1536px",
  "2xl": "1920px",
};

const theme = extendTheme({
  breakpoints,
  styles: {
    global: {
      body: {
        backgroundColor: "red",
        margin: "0px",
      },
    },
  },
});

// RouterProvider zkopirovan z ReactRouteru knihovny
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <SephoraProvider>
          <RouterProvider router={router} />
        </SephoraProvider>
      </ColorModeProvider>
    </ThemeProvider>
  </React.StrictMode>
);
