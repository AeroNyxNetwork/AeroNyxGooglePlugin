/*
 * @Description:
 * @Date: 2024-12-23 16:52:24
 * @LastEditTime: 2024-12-24 16:28:37
 */
import styles from "./CreateWallet.module.css";
import AeroNyxText from "./../../components/AeroNyxText";
import FaceImage from "./../../components/FaceImage";
import Password from "../../components/Password";
import ActionButton from "../../components/ActionButton";
import { Box, HStack, Button, Checkbox } from "@chakra-ui/react";
export default function CreateWallet() {
  return (
    <>
      <AeroNyxText />
      <FaceImage />
      <Password placeholder="New password" />
      <Box mt="20px">
        <Password placeholder="Confirm Password" />
      </Box>

      <Checkbox size="md" colorScheme="green" color="#999" m="10px 0  30px 0">
        {`Agree to AeroNyx<Privacy Policy>`}
      </Checkbox>
      <ActionButton />
    </>
  );
}
