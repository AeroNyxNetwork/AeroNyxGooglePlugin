/*
 * @Description:
 * @Date: 2024-12-19 11:14:28
 * @LastEditTime: 2025-02-13 14:25:09
 */
"use client";
import React, { useState, useEffect } from "react";
import Index from "./../BuildPage/Index";
import CreateWallet from "./../BuildPage/CreateWallet";
import UnlockPage from "./../BuildPage/UnlockPage";
import ForgetThePassword from "./../BuildPage/ForgetThePassword";
import PrivacyPolicy from "./../BuildPage/PrivacyPolicy";

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
    </>
  );
}

export default observer(Home);
