/*
 * @Description:
 * @Date: 2025-01-08 15:34:34
 * @LastEditTime: 2025-01-09 16:03:41
 */

import { EncryptPrivateKey } from "./wallet";
const bip39 = require("bip39");
const nacl = require("tweetnacl");
const { Keypair } = require("@solana/web3.js");
const { createDecipheriv, pbkdf2Sync } = require("crypto");

export const VerifyMnemonic = async (mnemonic, password) => {
  if (!bip39.validateMnemonic(mnemonic)) {
    return false;
  }
  const privateKey = await mnemonicToPrivateKey(mnemonic);
  const encryptedPrivateKey = await EncryptPrivateKey(privateKey, password);
  return encryptedPrivateKey;
};

const mnemonicToPrivateKey = async (mnemonic) => {
  const seed = await bip39.mnemonicToSeed(mnemonic);
  const keypair = Keypair.fromSeed(seed.subarray(0, 32));
  return keypair.secretKey;
};

export const VerifyPrivateKey = async (privateKey, password) => {
  if (!privateKey) {
    return false;
  }
  const privateKeyBuffer = Buffer.from(privateKey, "base64");
  const encryptedPrivateKey = await EncryptPrivateKey(
    privateKeyBuffer,
    password
  );
  return encryptedPrivateKey;
};
