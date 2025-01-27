/*
 * @Description:
 * @Date: 2024-12-25 13:03:11
 * @LastEditTime: 2025-01-09 16:04:32
 */

const bip39 = require("bip39");
const nacl = require("tweetnacl");
const { Keypair } = require("@solana/web3.js");
const { randomBytes, pbkdf2Sync } = require("crypto");

export const GenerateWallet = async (password) => {
  const mnemonic = bip39.generateMnemonic();
  const seed = bip39.mnemonicToSeedSync(mnemonic);
  const keypair = Keypair.fromSeed(seed.subarray(0, 32));
  console.log("mnemonic", mnemonic);
  console.log("publicKey", keypair.publicKey.toString());
  console.log("secretKey", Buffer.from(keypair.secretKey).toString("base64"));
  let callEncryptPrivateKey = await EncryptPrivateKey(
    keypair.secretKey,
    password
  );
  return callEncryptPrivateKey;
};

export const EncryptPrivateKey = async (privateKey, password) => {
  try {
    const salt = randomBytes(32);
    const key = pbkdf2Sync(password, salt, 100000, 32, "sha512");
    const nonce = nacl.randomBytes(nacl.secretbox.nonceLength);
    const encryptedPrivateKey = nacl.secretbox(privateKey, nonce, key);
    const publicKey = nacl.sign.keyPair.fromSecretKey(privateKey).publicKey;

    let data = {
      encryptedPrivateKey: Buffer.concat([nonce, encryptedPrivateKey]).toString(
        "base64"
      ),
      salt: Buffer.from(salt).toString("base64"),
      publicKey: Buffer.from(publicKey).toString("base64"),
    };
    if (chrome.storage) {
      chrome.storage.local.set(
        { walletValue: JSON.stringify(data) },
        function () {}
      );
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
};
const DecryptionPrivateKey = (encryptedWallet, password) => {
  try {
    const salt = Buffer.from(encryptedWallet.salt, "base64");
    const encryptedData = Buffer.from(
      encryptedWallet.encryptedPrivateKey,
      "base64"
    );
    const key = pbkdf2Sync(password, salt, 100000, 32, "sha512");
    const nonce = encryptedData.subarray(0, nacl.secretbox.nonceLength);
    const ciphertext = encryptedData.subarray(nacl.secretbox.nonceLength);
    const privateKey = nacl.secretbox.open(ciphertext, nonce, key);
    if (!privateKey) {
      return false;
    }
    return privateKey;
  } catch {
    return false;
  }
};

export const VerifyPassword = async (password) => {
  if (!chrome.storage) {
    return false;
  }
  try {
    let getChromeStorage = await chrome.storage.local.get(["walletValue"]);
    let walletValue = JSON.parse(getChromeStorage.walletValue);
    const privateKey = await DecryptionPrivateKey(walletValue, password);
    const publicKey = nacl.sign.keyPair.fromSecretKey(privateKey).publicKey;
    return Buffer.from(publicKey).toString("base64") === walletValue.publicKey;
  } catch {
    return false;
  }
};

export const getChromeLocal = async () => {
  if (!chrome.storage) {
    return false;
  }
  try {
    let getChromeStorage = await chrome.storage.local.get(["walletValue"]);
    return getChromeStorage.walletValue != undefined ? true : false;
  } catch {
    return false;
  }
};
