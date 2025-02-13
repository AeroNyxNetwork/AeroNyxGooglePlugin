/*
 * @Description:
 * @Date: 2024-12-24 12:35:43
 * @LastEditTime: 2025-02-13 14:21:31
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
import ForgetThePasswordTabsPage from "./ForgetThePasswordTabsPage.js";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import { counterStore } from "./../Stores/counterStore";
function ForgetThePassword() {
  const PageCallback = () => {
    counterStore.SwitchCurrentPage("unlockPage");
  };

  return (
    <Box>
      <NavBar
        title="Forget the password"
        callBack={() => counterStore.SwitchCurrentPage("unlockPage")}
      />

      <Tabs variant="soft-rounded" mt="20px" minH="520px">
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
            <ForgetThePasswordTabsPage
              placeholder="Enter Recovery Phrase"
              type="mnemonic"
              callBack={() => PageCallback()}
            ></ForgetThePasswordTabsPage>
          </TabPanel>
          <TabPanel p="0" m="20px 0">
            <ForgetThePasswordTabsPage
              placeholder="Enter Private Key"
              type="privateKey"
              callBack={() => PageCallback()}
            ></ForgetThePasswordTabsPage>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
export default observer(ForgetThePassword);
