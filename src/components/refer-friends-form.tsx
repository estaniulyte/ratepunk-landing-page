"use client";

import { useState } from "react";

import Image from "next/image";

import EmailIcon from "@/assets/email.svg";
import SuccessIcon from "@/assets/success.svg";

import styles from "@/styles/ReferFriendsForm.module.sass";

interface ReferFriendsFormProps {
  children?: React.ReactNode;
}

export function ReferFriendsForm({ children }: ReferFriendsFormProps) {
  const [email, setEmail] = useState<string>("")
  const [error, setError] = useState<string>("")

  var emailFormat = /\S+@\S+\.\S+/

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setEmail(event.target.value)
    if (event.target.value == "")
      setError('Field is required')
    else if (event.target.value.length < 5)
      setError('Too short email')
    else if (!emailFormat.test(event.target.value))
      setError('Email format is incorrect')
    else if (event.target.value.length > 5)
      setError('')
    
  }

  const [confimedEmail, setConfimedEmail] = useState<boolean>(false);

  const validate = () => {
    return email.length && emailFormat.test(email);
  };

  return (
    <section className={styles.friends_form}>
      <div>
        <h2 className={styles.friends_form__title}>REFER FRIENDS AND GET REWARDS</h2>
        <p className={styles.friends_form__description}>
          Refer your friends to us and earn hotel booking vouchers. We'll give
          you 1 coin for each friend that installs our extension. Minimum
          cash-out at 20 coins.
        </p>
        <form className={styles.friends_form__refferal_form + " " + (confimedEmail ? styles.hidden : " ")}>
          <span className={styles.friends_form__refferal_form__error}>{error}</span>
          <input
            className={styles.friends_form__refferal_form__input}
            type='email'
            required
            placeholder="Enter your email address"
            onChange={handleEmailChange} 
          >
            {/* <Image src={EmailIcon} alt="close" width={128} height={140} /> */}
          </input>
          <button
            className={styles.friends_form__refferal_form__button}
            onClick={() => setConfimedEmail(!confimedEmail)}
            type='button'
            disabled={!validate()}
          >Get Referral Link</button>
        </form>
        <form className={styles.friends_form__email_form + " " + (confimedEmail ? " ": styles.hidden)}>
          <span className={styles.friends_form__email_form__message}>
            <Image src={SuccessIcon} alt="close" width={24} height={24} />
            Your email is confirmed!
          </span>
          <div className={styles.friends_form__email_form__desktop_input}>
            <input type='text' defaultValue="https://ratepunk.com/referral"></input>
            <button>Copy</button>
          </div>
          <div className={styles.friends_form__email_form__mobile_input}>
            <input defaultValue="https://ratepunk.com/referral"></input>
            <button>Copy URL</button>
          </div>
        </form>
      </div>
      <p className={styles.friends_form__limits}>Limits on max rewards apply.</p>
    </section>
  );
}
