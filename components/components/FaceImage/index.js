/*
 * @Description:
 * @Date: 2024-12-23 15:25:53
 * @LastEditTime: 2024-12-24 18:11:53
 */

import Image from "next/image";
import styles from "./FaceImage.module.css";
const Face_Image = require("./../../../public/image/FaceImage.png");
export default function FaceImage() {
  return (
    <Image className={styles.Face_Image} src={Face_Image} width={220} alt="" />
  );
}