/*
 * @Description:
 * @Date: 2024-12-19 11:14:28
 * @LastEditTime: 2024-12-23 14:58:02
 */
"use client";
import { Box, ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Box className="AeroNyx">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
