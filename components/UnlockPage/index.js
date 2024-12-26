/*
 * @Description:
 * @Date: 2024-12-24 12:16:18
 * @LastEditTime: 2024-12-26 13:10:33
 */
"use client";
import AeroNyxText from "./../components/AeroNyxText";
import FaceImage from "./../components/FaceImage";
import SoonImage from "./../components/SoonImage";
import Password from "./../components/Password";
import { Box, Button } from "@chakra-ui/react";
import styles from "./UnlockPage.module.css";
import { useState, useRef } from "react";
import ShowToast from "./../Methods/pageToast";
import { VerifyPassword } from "./../Methods/wallet";

export default function UnlockPage({ navigateToPage }) {
  const ShowToastRef = useRef(null);
  let [password, setPassword] = useState(null);
  let [isLoading, setIsLoading] = useState(false);

  const Unlock = async () => {
    if (!password) {
      return ShowToastRef?.current?.Error("Please enter password");
    }
    setIsLoading(true);
    let passwordVerify = await VerifyPassword(password);
    if (passwordVerify) {
      ShowToastRef?.current?.Success("success");
      setIsLoading(false);
    } else {
      ShowToastRef?.current?.Error("Wrong password ");
      setIsLoading(false);
    }
  };

  return (
    <>
      <ShowToast ref={ShowToastRef} />
      <AeroNyxText />
      <FaceImage />
      <Box m="20px 0">
        <SoonImage />
      </Box>
      <Password placeholder="Password" callBack={(e) => setPassword(e)} />
      <Box>
        <Button
          isLoading={isLoading}
          loadingText="loading"
          onClick={() => Unlock()}
          className={styles.home_createWallet_button}
        >
          Unlock
        </Button>
      </Box>
      <Box
        className={styles.import_wallet_button}
        onClick={() => navigateToPage("forgetThePassword")}
      >
        forget the password?
      </Box>
    </>
  );
}
