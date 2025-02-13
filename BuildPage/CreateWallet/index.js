/*
 * @Description:
 * @Date: 2024-12-23 16:52:24
 * @LastEditTime: 2025-02-13 15:10:18
 */
"use client";
import styles from "./CreateWallet.module.scss";
import AeroNyxText from "./../components/AeroNyxText";
import FaceImage from "./../components/FaceImage";
import Password from "./../components/Password";
import ActionButton from "./../components/ActionButton";
import { Box, HStack, useToast, Checkbox } from "@chakra-ui/react";
import { GenerateWallet } from "./../Methods/wallet";
import { PasswordValidator } from "./../Methods/passwordValidator";
import { useState, useRef, useEffect } from "react";
import ShowToast from "./../Methods/pageToast";
import { observer } from "mobx-react-lite";
import { counterStore } from "./../Stores/counterStore";
function CreateWallet() {
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
    setIsloading(true);
    let passwordVerify = await PasswordValidator(newPassword, confirmPassword);
    if (passwordVerify) {
      setIsloading(false);
      return ShowToastRef?.current?.Error(passwordVerify);
    }

    let wallet = await GenerateWallet(newPassword);
    if (wallet) {
      setIsloading(false);
      ShowToastRef?.current?.Success("success");
      counterStore.SwitchCurrentPage("unlockPage");
    } else {
      setIsloading(false);
      ShowToastRef?.current?.Error("create error");
    }
  };

  useEffect(() => {
    if (counterStore.privacyPolicy_checkbox) {
      console.log("first", counterStore.privacyPolicy_checkbox);
      setCheckboxValue(true);
    }
  }, [counterStore.privacyPolicy_checkbox]);

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
      <HStack>
        <Checkbox
          isChecked={checkboxValue}
          onChange={() => setCheckboxValue(!checkboxValue)}
          size="md"
          colorScheme="green"
          color="#999"
          m="10px 0  30px 0"
        >
          {`Agree to AeroNyx`}
        </Checkbox>
        <Box
          onClick={() => counterStore.SwitchCurrentPage("privacyPolicy")}
          color="#999"
          m="10px 0  30px 0"
          cursor="pointer"
        >{`<Privacy Policy>`}</Box>
      </HStack>
      <ActionButton next={() => Next()} loading={isloading} />
      <ShowToast ref={ShowToastRef} />
    </>
  );
}

export default observer(CreateWallet);
