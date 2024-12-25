/*
 * @Description:
 * @Date: 2024-12-24 12:34:07
 * @LastEditTime: 2024-12-24 18:41:52
 */

import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, HStack } from "@chakra-ui/react";
import styles from "./NavBar.module.css";
export default function NavBar(props) {
  return (
    <HStack color="#fff">
      <ChevronLeftIcon boxSize={8} onClick={() => props.callBack()} />

      <Box className={styles.navBar_Title}>{props.title}</Box>
    </HStack>
  );
}
