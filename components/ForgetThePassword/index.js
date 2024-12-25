/*
 * @Description:
 * @Date: 2024-12-24 12:35:43
 * @LastEditTime: 2024-12-24 18:40:47
 */
"use client";
import {
  Box,
  HStack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import NavBar from "./../components/NavBar";
import styles from "./ForgetThePassword.module.css";
import ActionButton from "./../components/ActionButton";
import { useState } from "react";
export default function ForgetThePassword({ navigateToPage }) {
  return (
    <Box minH="100%">
      <NavBar
        title="Forget the password"
        callBack={() => navigateToPage("unlockPage")}
      />

      <Tabs variant="soft-rounded" mt="20px">
        <TabList w="100%" className={styles.forgetThePassword_tabs}>
          <Tab
            w="50%"
            _selected={{ color: "white", bg: "#6552fe" }}
            borderRadius="10px"
          >
            Recovery Phrase
          </Tab>
          <Tab
            w="50%"
            borderRadius="10px"
            _selected={{ color: "white", bg: "#6552fe" }}
          >
            Private Key
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel p="0" m="20px 0">
            <Box
              border="1px solid #555"
              borderRadius="10px"
              minH="200px"
              color="#999"
              lineHeight="200px"
              textAlign="center"
            >
              Enter Recovery Phrase
            </Box>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Box className={styles.forgetThePassword_actionButton}>
        <ActionButton />
      </Box>
    </Box>
  );
}
