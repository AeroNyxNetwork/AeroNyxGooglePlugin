/*
 * @Description:
 * @Date: 2024-12-19 11:14:28
 * @LastEditTime: 2024-12-24 18:39:01
 */
"use client";
import React, { useState } from "react";
import Index from "./../components/Index";
import CreateWallet from "./../components/CreateWallet";
import UnlockPage from "./../components/UnlockPage";
import ForgetThePassword from "./../components/ForgetThePassword";
export default function Home() {
  const [activePage, setActivePage] = useState("index");
  const navigateToPage = (page) => {
    setActivePage(page);
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
