import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import VoyageProgress from "components/voyage-progress";

export default function Home() {
  return <main className={styles.main}>{/* <VoyageProgress /> */}</main>;
}
