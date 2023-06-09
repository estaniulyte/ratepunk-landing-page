import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { siteConfig } from "@/config/site";
import { quickLinksConfig } from "@/config/nav";
import { socialLinksConfig } from "@/config/nav";

import EmailIcon from "@/assets/email-footer.svg";

import styles from "@/styles/Footer.module.sass";

interface FooterProps {
  children?: React.ReactNode;
}

export function Footer({ children }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__container__box}>
          <div>
            <Link href="/">
              <span>
                <Image
                  src={siteConfig.image}
                  alt="company logo"
                  width={125}
                  height={32}
                />
              </span>
            </Link>
            <p className={styles.footer__description}>{siteConfig.description}</p>
          </div>
          <div className={styles.footer__copyright}>
            <p>{siteConfig.copyrights}</p>
          </div>
        </div>
        <div>
          <h4 className={styles.footer__title}>Quick links</h4>
          <nav className={styles.footer__navigation}>
            {quickLinksConfig.nav?.map((item, index) => (
              <Link
                className={styles.footer__navigation__item}
                key={index}
                href={item.disabled ? "#" : item.href}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className={styles.footer__contact}>
          <div className={styles.footer__contact__email}>
            <h4 className={styles.footer__title}>Contact</h4>
            <Image src={EmailIcon} alt="email" width={16} height={13} />
            <Link href="mailto:hi@ratepunk.com">{siteConfig.contactEmail}</Link>
          </div>
          <div className={styles.footer__contact__social_section}>
            <h4 className={styles.footer__title}>Social</h4>
            <nav className={styles.footer__social_navigation}>
              {socialLinksConfig.nav?.map((item, index) => (
                <Link
                  className={styles.footer__social_navigation__item}
                  key={index}
                  href={item.disabled ? "#" : item.href}
                >
                  <Image src={item.icon} alt={item.alt} width={16} height={16} />
                </Link>
              ))}
            </nav>
          </div>
          <div className={styles.footer__mobile_copyright}>
            <p>{siteConfig.copyrights}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
