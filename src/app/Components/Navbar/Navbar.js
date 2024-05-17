import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.logocontainer}>
        <Link href="/" className={styles.logoLink}>
          <Image
            className={styles.logo}
            src="/DLIComllogo.png"
            alt="DLIComl logo"
            width={145}
            height={28}
            priority
          />
        </Link>
      </div>
      <div className={`${styles.links} flex`}>
        <Link className={`${styles.link} menuItem`} href="/">
          Home
        </Link>
        <Link className={`${styles.link} menuItem`} href="https://shlenpower.com/" target="_blank">
          ShlenPower Group
        </Link>
        <a
          className={`${styles.link} menuItem`}
          href="/DLI_WhitePaper.pdf"
          download
        >
          DLI WhitePaper
        </a>
        <Link className={`${styles.link} menuItem`} href="/coomingSoon">
          Blockchain Knowledge
        </Link>
        <Link className={`${styles.link} menuItem`} href="/faqs">
          FAQ
        </Link>
        <Link className={`${styles.link} menuItem`} href="/coomingSoon">
          Careers
        </Link>
        <Link className={`${styles.link} menuItem`} href="/coomingSoon">
          Dli Blockchain Explorer
        </Link>
        <Link className={`${styles.link} menuItem`} href="/contactUs">
          Conatct US
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
