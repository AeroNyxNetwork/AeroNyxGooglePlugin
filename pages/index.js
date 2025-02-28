/*
 * @Description:
 * @Date: 2024-12-19 11:14:28
 * @LastEditTime: 2025-02-28 13:36:40
 */
"use client";
import React, { useState, useEffect } from "react";
import Index from "./../BuildPage/Index";
import CreateWallet from "./../BuildPage/CreateWallet";
import UnlockPage from "./../BuildPage/UnlockPage";
import ForgetThePassword from "./../BuildPage/ForgetThePassword";
import PrivacyPolicy from "./../BuildPage/PrivacyPolicy";
import NodeList from "./../BuildPage/NodeList";

import { Box } from "@chakra-ui/react";
import { getChromeLocal } from "./../BuildPage/Methods/wallet";
import { observer } from "mobx-react-lite";
import { counterStore } from "./../BuildPage/Stores/counterStore";
function Home() {
  useEffect(() => {
    isWhetherWallet();
  }, []);

  const isWhetherWallet = async () => {
    let chromeLocal = await getChromeLocal();
    if (chromeLocal) setActivePage("unlockPage");
  };

  return (
    <>
      {counterStore.currentPage === "index" && <Index />}
      {counterStore.currentPage === "unlockPage" && <UnlockPage />}
      {counterStore.currentPage === "createWallet" && <CreateWallet />}
      {counterStore.currentPage === "forgetThePassword" && (
        <ForgetThePassword />
      )}
      {counterStore.currentPage === "privacyPolicy" && <PrivacyPolicy />}
      {counterStore.currentPage === "nodeList" && <NodeList />}
    </>
  );
}

export default observer(Home);
