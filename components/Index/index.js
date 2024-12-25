/*
 * @Description:
 * @Date: 2024-12-24 18:03:44
 * @LastEditTime: 2024-12-24 18:12:47
 */
"use client";
import React, { useState } from "react";
import AeroNyxText from "./../components/AeroNyxText";
import FaceImage from "./../components/FaceImage";
import SoonImage from "./../components/SoonImage";
import { Box, Button } from "@chakra-ui/react";
import styles from "./Index.module.css";
export default function Index({ navigateToPage }) {
  return (
    <Box>
      <AeroNyxText />
      <FaceImage />
      <Box m="30px 0">
        <SoonImage />
      </Box>
      <Button
        onClick={() => navigateToPage("createWallet")}
        className={styles.home_createWallet_button}
      >
        Create new wallet
      </Button>
      <Box className={styles.import_wallet_button}>Import wallet</Box>
    </Box>
  );
}
