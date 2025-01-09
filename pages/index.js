/*
 * @Description:
 * @Date: 2024-12-19 11:14:28
 * @LastEditTime: 2025-01-09 16:08:11
 */
"use client";
import React, { useState, useEffect } from "react";
import Index from "./../components/Index";
import CreateWallet from "./../components/CreateWallet";
import UnlockPage from "./../components/UnlockPage";
import ForgetThePassword from "./../components/ForgetThePassword";
import { Box } from "@chakra-ui/react";
import { getChromeLocal } from "./../components/Methods/wallet";
export default function Home() {
  const [activePage, setActivePage] = useState("index");
  const navigateToPage = (page) => {
    setActivePage(page);
  };

  useEffect(() => {
    isWhetherWallet();
  }, []);

  const isWhetherWallet = async () => {
    let chromeLocal = await getChromeLocal();
    if (chromeLocal) setActivePage("unlockPage");
  };

  return (
    <>
      {activePage === "index" && <Index navigateToPage={navigateToPage} />}
      {activePage === "unlockPage" && (
        <UnlockPage navigateToPage={navigateToPage} />
      )}
      {activePage === "createWallet" && (
        <CreateWallet navigateToPage={navigateToPage} />
      )}
      {activePage === "forgetThePassword" && (
        <ForgetThePassword navigateToPage={navigateToPage} />
      )}
    </>
  );
}
