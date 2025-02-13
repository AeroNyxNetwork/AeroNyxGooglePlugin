/*
 * @Description:
 * @Date: 2024-12-24 18:03:44
 * @LastEditTime: 2025-02-13 14:37:02
 */
"use client";
import React, { useState } from "react";
import AeroNyxText from "./../components/AeroNyxText";
import FaceImage from "./../components/FaceImage";
import SoonImage from "./../components/SoonImage";
import { Box, Button } from "@chakra-ui/react";
import styles from "./Index.module.scss";
import { observer } from "mobx-react-lite";
import { counterStore } from "./../Stores/counterStore";
function Index() {
  return (
    <Box>
      <AeroNyxText />
      <FaceImage />
      <Box m="30px 0">
        <SoonImage />
      </Box>
      <Button
        onClick={() => counterStore.SwitchCurrentPage("createWallet")}
        className={styles.home_createWallet_button}
      >
        Create new wallet
      </Button>
      <Box className={styles.import_wallet_button}>Import wallet</Box>
    </Box>
  );
}

export default observer(Index);
