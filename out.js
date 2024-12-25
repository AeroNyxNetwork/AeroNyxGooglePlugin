/*
 * @Description:
 * @Date: 2024-12-19 11:14:28
 * @LastEditTime: 2024-12-25 11:30:42
 */
const fs = require("fs");
const glob = require("glob");
const { setTimeout } = require("timers/promises");

const files = glob.sync("out/**/*.html");
files.forEach((file) => {
  const content = fs.readFileSync(file, "utf-8");
  const modifiedContent = content.replace(/\/_next/g, "./next");
  fs.writeFileSync(file, modifiedContent, "utf-8");
});

const sourcePath = "out/_next";
const destinationPath = "out/next";

fs.rename(sourcePath, destinationPath, (err) => {
  if (err) {
    console.error('Failed to rename "_next" directory to "next".', err);
  } else {
    console.log('Renamed "_next" directory to "next" successfully.');
  }
});

const nextFiles = glob.sync("out/next/static/chunks/pages/**/*.js");
nextFiles.forEach((file) => {
  const content = fs.readFileSync(file, "utf-8");
  const modifiedContent = content.replace(/\/_next/g, "./next");
  fs.writeFileSync(file, modifiedContent, "utf-8");
});
