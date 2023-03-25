import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import styles from "../styles/Home.module.css";
import { MdOutlineAccountBalance } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { Fira_Code } from "next/font/google";
const inter = Fira_Code({ subsets: ["latin"] });

const MainLayout = ({ children }: { children: ReactNode }) => {
  const { asPath } = useRouter();
  return (
    <main
      className={styles.mainLayout}
      style={{ fontFamily: inter.style.fontFamily }}
    >
      <Image
        className={styles.mainBackground}
        src={"/back.jpg"}
        width={1920}
        quality={100}
        height={1080}
        alt="background"
      />
      <nav className={styles.nav}>
        <Link href={"/"}>
          <div
            className={[
              styles.flexCenter,
              styles.navButton,
              asPath === "/" ? styles.activeTab : "",
            ].join(" ")}
          >
            <AiOutlineHome style={{ marginRight: "9px" }} />
            Home
          </div>
        </Link>
        <Link href={"/account"}>
          <div
            className={[
              styles.flexCenter,
              styles.navButton,
              asPath.startsWith("/account") ? styles.activeTab : "",
            ].join(" ")}
          >
            <MdOutlineAccountBalance style={{ marginRight: "9px" }} />
            Account
          </div>
        </Link>
        <Link href={"/contractor"}>
          <div
            className={[
              styles.flexCenter,
              styles.navButton,
              asPath.startsWith("/contractor") ? styles.activeTab : "",
            ].join(" ")}
          >
            <MdOutlineAccountBalance style={{ marginRight: "9px" }} />
            Contractor
          </div>
        </Link>
      </nav>
      <section className={styles.container}>
        <div className={styles.box}>{children}</div>
      </section>
    </main>
  );
};

export default MainLayout;
