/*
 * @Description:
 * @Date: 2025-01-09 10:05:05
 * @LastEditTime: 2025-01-09 16:02:19
 */
import { Textarea, Box } from "@chakra-ui/react";
import Password from "./../components/Password";
import { useState, useRef } from "react";
import ShowToast from "./../Methods/pageToast";
import ActionButton from "./../components/ActionButton";
import styles from "./ForgetThePassword.module.css";
import { PasswordValidator } from "./../Methods/passwordValidator";
import { VerifyMnemonic, VerifyPrivateKey } from "./../Methods/verifyMnemonic";
export default (props) => {
  const ShowToastRef = useRef(null);
  let [newPassword, setNewPassword] = useState(null);
  let [confirmPassword, setConfirmPassword] = useState(null);
  let [textareaValue, setTextareaValue] = useState(null);

  const RecoveryPhrase = async () => {
    let passwordVerify = await PasswordValidator(newPassword, confirmPassword);
    if (passwordVerify) {
      ShowToastRef?.current?.Error(passwordVerify);
      return;
    }

    let callVerifyMnemonic =
      props.type == "mnemonic"
        ? await VerifyMnemonic(textareaValue, newPassword)
        : await VerifyPrivateKey(textareaValue, newPassword);
    if (callVerifyMnemonic) {
      ShowToastRef?.current?.Success("success");
      props.callBack();
    } else {
      ShowToastRef?.current?.Error("error");
    }
  };

  return (
    <Box minH="100%">
      <ShowToast ref={ShowToastRef} />
      <Textarea
        placeholder={props.placeholder}
        color="#fff"
        resize="none"
        size="sm"
        h="140px"
        borderRadius="15px"
        onChange={(e) => setTextareaValue(e.target.value)}
      />
      <Box mt="20px">
        <Password
          bg="#000"
          color="#fff"
          placeholder="New password"
          callBack={(e) => setNewPassword(e)}
        />
      </Box>
      <Box mt="20px">
        <Password
          bg="#000"
          color="#fff"
          placeholder="Confirm Password"
          callBack={(e) => setConfirmPassword(e)}
        />
      </Box>
      <Box className={styles.forgetThePassword_actionButton}>
        <ActionButton next={() => RecoveryPhrase()} />
      </Box>
    </Box>
  );
};