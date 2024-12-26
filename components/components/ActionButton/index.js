/*
 * @Description:
 * @Date: 2024-12-23 14:56:58
 * @LastEditTime: 2024-12-26 13:26:52
 */

import { HStack, Button } from "@chakra-ui/react";
import styles from "./ActionButton.module.css";
import { useState, forwardRef, useImperativeHandle } from "react";

const ActionButton = (props) => {
  return (
    <HStack justify="center">
      <Button
        className={styles.createWallet_cancel}
        // onClick={() => router.back()}
      >
        Cancel
      </Button>
      <Button
        isLoading={props.loading}
        loadingText="loading"
        onClick={() => props.next()}
        className={styles.createWallet_next}
      >
        Next
      </Button>
    </HStack>
  );
};

export default ActionButton;
