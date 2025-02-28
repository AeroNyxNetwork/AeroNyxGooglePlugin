/*
 * @Description:
 * @Date: 2024-08-20 10:56:59
 * @LastEditTime: 2025-02-28 16:42:53
 */
import { makeAutoObservable } from "mobx";
class CounterStore {
  currentPage = "nodeList";
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
