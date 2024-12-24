/*
 * @Description:
 * @Date: 2024-12-19 11:14:28
 * @LastEditTime: 2024-12-24 17:14:17
 */
import React, { useState } from "react";
import AeroNyxText from "./../components/AeroNyxText";
import FaceImage from "./../components/FaceImage";
import SoonImage from "./../components/SoonImage";
import { Box, Button } from "@chakra-ui/react";
import styles from "./index.module.css";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <Box>
      <AeroNyxText />
      <FaceImage />
      <Box m="30px 0">
        <SoonImage />
      </Box>
      <Button
        onClick={() => router.push("/CreateWallet")}
        className={styles.home_createWallet_button}
      >
        Create new wallet
      </Button>
      <Box className={styles.import_wallet_button}>Import wallet</Box>
    </Box>
  );
}
