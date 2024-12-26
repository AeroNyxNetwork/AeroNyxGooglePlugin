/*
 * @Description:
 * @Date: 2024-12-23 16:52:24
 * @LastEditTime: 2024-12-26 13:25:51
 */
"use client";
import styles from "./CreateWallet.module.css";
import AeroNyxText from "./../components/AeroNyxText";
import FaceImage from "./../components/FaceImage";
import Password from "./../components/Password";
import ActionButton from "./../components/ActionButton";
import { Box, HStack, useToast, Checkbox } from "@chakra-ui/react";
import { GenerateWallet } from "./../Methods/wallet";
import { PasswordValidator } from "./../Methods/passwordValidator";
import { useState, useRef } from "react";
import ShowToast from "./../Methods/pageToast";
export default function CreateWallet({ navigateToPage }) {
  const ShowToastRef = useRef(null);
  let [newPassword, setNewPassword] = useState(null);
  let [confirmPassword, setConfirmPassword] = useState(null);
  let [checkboxValue, setCheckboxValue] = useState(false);
  let [isloading, setIsloading] = useState(false);

  const Next = async () => {
    if (!checkboxValue) {
      return ShowToastRef?.current?.Error(
        "Please agree Agree to AeroNyx<Privacy Policy>"
      );
    }
    if (!newPassword && !confirmPassword) {
      return ShowToastRef?.current?.Error("Password cannot be empty");
    }
    if (newPassword !== confirmPassword) {
      return ShowToastRef?.current?.Error("The two inputs are inconsistent");
    }
    setIsloading(true);
    let passwordVerify = await PasswordValidator(newPassword);
    if (passwordVerify) {
      setIsloading(false);
      return ShowToastRef?.current?.Error(passwordVerify);
    }

    let wallet = await GenerateWallet(newPassword);
    if (wallet) {
      setIsloading(false);
      ShowToastRef?.current?.Success("success");
      navigateToPage("unlockPage");
    } else {
      setIsloading(false);
      ShowToastRef?.current?.Error("create error");
    }
  };

  return (
    <>
      <AeroNyxText />
      <FaceImage />
      <Box mt="10px">
        <Password
          placeholder="New password"
          callBack={(e) => setNewPassword(e)}
        />
      </Box>
      <Box mt="20px">
        <Password
          placeholder="Confirm Password"
          callBack={(e) => setConfirmPassword(e)}
        />
      </Box>
      <Checkbox
        value={checkboxValue}
        onChange={() => setCheckboxValue(!checkboxValue)}
        size="md"
        colorScheme="green"
        color="#999"
        m="10px 0  30px 0"
      >
        {`Agree to AeroNyx<Privacy Policy>`}
      </Checkbox>
      <ActionButton next={() => Next()} loading={isloading} />
      <ShowToast ref={ShowToastRef} />
    </>
  );
}
