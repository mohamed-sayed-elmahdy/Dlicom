import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { GrPinterest } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={`${styles.footerSection} flex`}>
      <div className={`${styles.leftFooterContainer} flex`}>
        <div className={styles.logocontainer}>
          <Link href="/">
            <Image
              className={styles.logo}
              src="/DLIComllogo.png"
              alt="DliCom Logo"
              width={130}
              height={40}
              priority
            />
          </Link>
        </div>
        <p>
          DLICOM App aspires to unify the disparate elements of the
          cryptocurrency market by serving as a decentralized social network and
          trading platform.
        </p>
        <div className={`${styles.socialMediaIconsContainer} flex`}>
          <Link href="/coomingSoon">
            <BsTwitterX className={styles.twitter} />
          </Link>
          <Link href="/coomingSoon">
            <RiInstagramFill className={styles.instagram} />
          </Link>
          <Link href="/coomingSoon">
            <GrPinterest className={styles.pinterest} />
          </Link>
          <Link href="/coomingSoon">
            <FaLinkedin className={styles.linkedin} />
          </Link>
          <Link href="/coomingSoon">
            <FaTiktok className={styles.tiktok} />
          </Link>
          <Link href="/coomingSoon">
            <FaYoutube className={styles.youtube} />
          </Link>
        </div>
        <p>© Copyright 2024 ShlenPower. All Rights Reserved</p>
      </div>
      <div className={`${styles.rightFooterContainer} flex`}>
        <div className={`${styles.linksColumnContainer} flex`}>
          <h2>Product</h2>
          <Link href="#futureSection">Features</Link>
          <Link href="/coomingSoon">Integrations</Link>
          <Link href="/coomingSoon">Updates</Link>
          <Link href="/faqs">FAQ</Link>
 
        </div>
        <div className={`${styles.linksColumnContainer} flex`}>
          <h2>Company</h2>
          <Link href="/coomingSoon">About</Link>
          <Link href="/coomingSoon">Careers</Link>

          <Link href="/coomingSoon">Press</Link>
          <Link href="/contactUs">Contact</Link>
        </div>
        <div className={`${styles.linksColumnContainer} flex`}>
          <h2>Resources</h2>
          <Link href="/coomingSoon">Examples</Link>
          <Link href="/coomingSoon">Community</Link>
          <Link href="/coomingSoon">Guides</Link>
          <Link href="/coomingSoon">Docs</Link>
        </div>
        <div className={`${styles.linksColumnContainer} flex`}>
          <h2>Legal</h2>
          <Link href="/coomingSoon">Privacy</Link>
          <Link href="/coomingSoon">Terms</Link>
          <Link href="/coomingSoon">Security</Link>
        </div>
      </div>
    </div>
  );
}
