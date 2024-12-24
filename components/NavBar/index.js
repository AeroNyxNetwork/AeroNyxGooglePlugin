/*
 * @Description:
 * @Date: 2024-12-24 12:34:07
 * @LastEditTime: 2024-12-24 12:45:30
 */

import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";
export default function NavBar(props) {
  let router = useRouter();
  return (
    <HStack color="#fff">
      <ChevronLeftIcon boxSize={8} onClick={() => router.back()} />

      <Box className={styles.navBar_Title}>{props.title}</Box>
    </HStack>
  );
}
