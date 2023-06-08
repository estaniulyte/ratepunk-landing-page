import * as React from "react";

import Image from "next/image";

import CollectCoinsIcon from '@/assets/collect-coins.svg'
import VoucherIcon from '@/assets/voucher.svg'
import InviteIcon from '@/assets/invite.svg'

import styles from "@/styles/ReferFriendsSteps.module.sass";

interface ReferFriendsStepsProps {
  children?: React.ReactNode;
}

export function ReferFriendsSteps({ children }: ReferFriendsStepsProps) {
  const items = [
    {
      id: 1,
      title: "Invite friends",
      text: "Refer friends with your unique referral link.",
      image: InviteIcon,
    },
    {
      id: 2,
      title: "Collect coins",
      text: "Get 1 coin for each friend that installs our extension using your referral link.",
      image: CollectCoinsIcon,
    },
    {
      id: 3,
      title: "Get voucher",
      text: "Redeem for a $20 hotel booking voucher once you collect 20 coins.",
      image: VoucherIcon
    },
  ];
  return (
    <section className={styles.container}>
      {items?.map((item) => (
        <div className={styles.card} key={item.id}>
          <div className={styles.image}>
            <Image src={item.image} alt="close" width={128} height={140} />
          </div>
          <div className={styles.steps}>
            <span className={styles.step}>Step {item.id}</span>
            <h5 className={styles.title}>{item.title}</h5>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
