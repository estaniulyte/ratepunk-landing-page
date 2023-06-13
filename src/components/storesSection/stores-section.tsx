"use client";

import * as React from "react";
import Link from "next/link";

import Image from "next/image";

import { siteConfig } from "@/config/site";

import ChromeImage from "@/assets/chrome.svg";
import AppleImage from "@/assets/apple.svg";

import styles from "./StoresSection.module.sass";

import { DynamicStar } from "react-dynamic-star";

interface StoresSectionProps {
  children?: React.ReactNode;
}

export function StoresSection({ children }: StoresSectionProps) {
  const items = [
    {
      title: "Chrome web Store",
      href: siteConfig.links.chromeStore,
      image: ChromeImage,
    },
    {
      title: "Apple app Store",
      href: siteConfig.links.appleStore,
      image: AppleImage,
    },
  ];

  return (
    <div className={styles.store}>
      <div className={styles.store__container}>
        {items?.map((item, index) => (
          <Link href={item.href} key={index} className={styles.store__card}>
            <div>
              <Image className={styles.store__card__image} src={item.image} alt="stores" width={60} height={52} />
            </div>
            <div>
              <p className={styles.store__card__text}>avaliable in the</p>
              <h2 className={styles.store__card__title}>{item.title}</h2>
            </div>
          </Link>
        ))}
        <div className={styles.store__reviews}>
          <DynamicStar className={styles.store__reviews__stars} rating={4.4} outlined={true} width={21} height={21} emptyStarColor="white" />
          <p className={styles.store__reviews__text}>Chrome Stores reviews</p>
        </div>
      </div>
    </div>
  );
}
