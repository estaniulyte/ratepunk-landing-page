import * as React from "react";

import styles from "@/styles/ReferFriendSection.module.sass";

import { ReferFriendsForm } from "./refer-friends-form";
import { ReferFriendsSteps } from "./refer-friends-steps";

interface ReferFriendSectionProps {
  children?: React.ReactNode;
}

export function ReferFriendSection({ children }: ReferFriendSectionProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <ReferFriendsForm />
        <ReferFriendsSteps />
      </div>
    </div>
  );
}
