"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";

import { MainNavItem } from "@/types";

import { MobileNav } from "@/components/mobile-nav";

import styles from "@/styles/MainNav.module.sass";

import Close from "@/assets/close.svg";
import Menu from "@/assets/menu.svg";

interface MainNavProps {
  items: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
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
        {items?.length ? (
          <nav className={styles.navigation}>
            {items?.map((item, index) => (
              <Link
                className={
                  styles.navItem +
                  " " +
                  (pathname == item.href ? styles.activeLink : "")
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
          className={styles.burgerMenu}
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? (
            <Image src={Close} alt="close" width={2} height={2} />
          ) : (
            <Image src={Menu} alt="menu" width={2} height={2} />
          )}
        </button>
      </div>
      <MobileNav show={showMobileMenu} items={items} />
    </header>
  );
}
