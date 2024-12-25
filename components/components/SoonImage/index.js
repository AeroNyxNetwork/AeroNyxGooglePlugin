/*
 * @Description:
 * @Date: 2024-12-23 15:25:53
 * @LastEditTime: 2024-12-24 18:12:04
 */

import Image from "next/image";
import styles from "./SoonImage.module.css";
const Soon_Image = require("./../../../public/image/Soon.png");
export default function SoonImage() {
  return (
    <Image
      className={styles.Soon_Image}
      src={Soon_Image}
      width={144}
      height={31}
      alt=""
    />
  );
}
