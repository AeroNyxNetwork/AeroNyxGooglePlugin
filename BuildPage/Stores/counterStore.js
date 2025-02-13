/*
 * @Description:
 * @Date: 2024-08-20 10:56:59
 * @LastEditTime: 2025-02-13 15:11:44
 */
import { makeAutoObservable } from "mobx";
class CounterStore {
  currentPage = "index";
  privacyPolicy_checkbox = false;
  constructor() {
    makeAutoObservable(this);
  }

  SwitchPrivacyPolicyYype = (bool) => {
    this.privacyPolicy_checkbox = bool;
    this.SwitchCurrentPage("createWallet");
  };

  SwitchCurrentPage = (name) => {
    this.currentPage = name;
  };
}

export const counterStore = new CounterStore();
