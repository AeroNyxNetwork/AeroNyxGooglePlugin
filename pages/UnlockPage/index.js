/*
 * @Description:
 * @Date: 2024-12-24 12:16:18
 * @LastEditTime: 2024-12-24 17:14:59
 */
import AeroNyxText from "./../../components/AeroNyxText";
import FaceImage from "./../../components/FaceImage";
import SoonImage from "./../../components/SoonImage";
import Password from "../../components/Password";
import { Box, Button } from "@chakra-ui/react";
import styles from "./../index.module.css";
import { useRouter } from "next/router";

export default function UnlockPage() {
  let router = useRouter();
  return (
    <>
      <AeroNyxText />
      <FaceImage />
      <Box m="20px 0">
        <SoonImage />
      </Box>
      <Password placeholder="Password" />
      <Box>
        <Button
          // onClick={() => router.push("/CreateWallet")}
          className={styles.home_createWallet_button}
        >
          Unlock
        </Button>
      </Box>
      <Box
        className={styles.import_wallet_button}
        onClick={() => router.push("/ForgetThePassword")}
      >
        forget the password?
      </Box>
    </>
  );
}
