import * as React from "react";
import Link from "next/link";

import { MainNavItem } from "@/types";

import styles from "@/styles/MobileNav.module.sass";

interface MobileNavProps {
  show: boolean;
  items: MainNavItem[];
  children?: React.ReactNode;
}

export function MobileNav({ show, items, children }: MobileNavProps) {
  return (
    <div className={show ? " " : styles.hidden}>
      {items?.length ? (
        <nav className={styles.navigation}>
          {items?.map((item, index) => (
            <Link
              className={styles.navItem}
              key={index}
              href={item.disabled ? "#" : item.href}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
