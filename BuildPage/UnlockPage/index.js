/*
 * @Description:
 * @Date: 2024-12-24 12:16:18
 * @LastEditTime: 2025-02-28 16:41:31
 */
"use client";
import AeroNyxText from "./../components/AeroNyxText";
import FaceImage from "./../components/FaceImage";
import SoonImage from "./../components/SoonImage";
import Password from "./../components/Password";
import { Box, Button } from "@chakra-ui/react";
import styles from "./UnlockPage.module.scss";
import { useState, useRef } from "react";
import ShowToast from "./../Methods/pageToast";
import { VerifyPassword } from "./../Methods/wallet";
import { observer } from "mobx-react-lite";
import { counterStore } from "./../Stores/counterStore";
function UnlockPage() {
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
      counterStore.SwitchCurrentPage("nodeList");
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
        onClick={() => counterStore.SwitchCurrentPage("forgetThePassword")}
      >
        forget the password?
      </Box>
    </>
  );
}
export default observer(UnlockPage);
