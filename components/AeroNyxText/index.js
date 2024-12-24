/*
 * @Description:
 * @Date: 2024-12-23 14:56:58
 * @LastEditTime: 2024-12-23 15:04:16
 */

import { Box } from "@chakra-ui/react";
import styles from "./AeroNyxText.module.css";
export default function AeroNyxText() {
  return (
    <Box className={styles.AeroNyx_Text}>
      AeroNy<span className={styles.AeroNyx_Text_X}>X</span>
    </Box>
  );
}
