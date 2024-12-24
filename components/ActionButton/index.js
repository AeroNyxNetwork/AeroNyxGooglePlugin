/*
 * @Description:
 * @Date: 2024-12-23 14:56:58
 * @LastEditTime: 2024-12-24 12:18:25
 */

import { HStack, Button } from "@chakra-ui/react";
import styles from "./ActionButton.module.css";
import { useRouter } from "next/navigation";
export default function ActionButton() {
  const router = useRouter();
  return (
    <HStack justify="center">
      <Button
        className={styles.createWallet_cancel}
        onClick={() => router.back()}
      >
        Cancel
      </Button>
      <Button
        onClick={() => router.push("/UnlockPage")}
        className={styles.createWallet_next}
      >
        Next
      </Button>
    </HStack>
  );
}
