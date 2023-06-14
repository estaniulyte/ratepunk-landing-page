"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";

import { MainNavItem } from "@/types";

import MobileNav from "@/components/mobileNav";

import styles from "./MainNav.module.sass";

interface MainNavProps {
  items: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.topbar}>
        <Link href="/">
          <span>
            <Image
              className={styles.header__image}
              src={siteConfig.image}
              alt="company logo"
              width={125}
              height={32}
            />
          </span>
        </Link>
        {items?.length ? (
          <nav className={styles.topbar__navigation}>
            {items?.map((item, index) => (
              <Link
                className={
                  styles.topbar__navigation__item +
                  " " +
                  (pathname == item.href ? styles.active_link : "")
                }
                key={index}
                href={item.disabled ? "#" : item.href}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        ) : null}
        <button
          className={styles.topbar__burger_menu}
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? (
            <Image
              className={styles.topbar__burger_menu__icon}
              src="/close.svg"
              alt="close"
              width={2}
              height={2}
            />
          ) : (
            <Image
              className={styles.topbar__burger_menu__icon}
              src="/menu.svg"
              alt="menu"
              width={2}
              height={2}
            />
          )}
        </button>
      </div>
      <MobileNav show={showMobileMenu} items={items} />
    </header>
  );
}
