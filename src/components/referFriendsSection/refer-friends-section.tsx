import * as React from "react";

import styles from "./ReferFriendSection.module.sass";

import ReferFriendsForm from "@/components/referFriendsForm";
import ReferFriendsSteps from "@/components/referFriendsSteps";

interface ReferFriendsSectionProps {
  children?: React.ReactNode;
}

export function ReferFriendsSection({ children }: ReferFriendsSectionProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <ReferFriendsForm />
        <ReferFriendsSteps />
      </div>
    </div>
  );
}
