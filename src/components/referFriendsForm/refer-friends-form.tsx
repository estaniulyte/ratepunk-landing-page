"use client";

import { FormEvent, useState } from "react";

import Image from "next/image";

import EmailIcon from "@/assets/email.svg";
import SuccessIcon from "@/assets/success.svg";

import styles from "./ReferFriendsForm.module.sass";

interface ReferFriendsFormProps {
  children?: React.ReactNode;
}

export function ReferFriendsForm({ children }: ReferFriendsFormProps) {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [confimedEmail, setConfimedEmail] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  var emailFormat = /\S+@\S+\.\S+/;

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setEmail(event.target.value);
    if (event.target.value == "") setError("Field is required");
    else if (event.target.value.length < 5) setError("Too short email");
    else if (!emailFormat.test(event.target.value))
      setError("Email format is incorrect");
    else if (event.target.value.length > 5) setError("");
  };

  const copyReferralLink = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    navigator.clipboard.writeText("https://ratepunk.com/referral")
    setCopied(true)
  }

  const validate = () => {
    return email.length && emailFormat.test(email);
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
        setConfimedEmail(!confimedEmail);
        setLoading(false);
      }
    };

    req.open(
      "PUT",
      "https://api.jsonbin.io/v3/b/"+ process.env.NEXT_PUBLIC_JSONBIN_BIN_ID,
      true
    );
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader(
      "X-Master-Key",
      process.env.NEXT_PUBLIC_JSONBIN_API_KEY!,
    );
    req.send(`{"email": "${email}"}`);
  };

  return (
    <section className={styles.friends_form}>
      <div>
        <h2 className={styles.friends_form__title}>
          REFER FRIENDS AND GET REWARDS
        </h2>
        <p className={styles.friends_form__description}>
          Refer your friends to us and earn hotel booking vouchers. We&apos;ll give
          you 1 coin for each friend that installs our extension. Minimum
          cash-out at 20 coins.
        </p>
        <form
          className={
            styles.friends_form__refferal_form +
            " " +
            (confimedEmail ? styles.hidden : " ")
          }
          onSubmit={(e) => onSubmit(e)}
        >
          <span className={styles.friends_form__refferal_form__error}>
            {error}
          </span>
          <div className={styles.friends_form__refferal_form__input_container}>
            <Image src={EmailIcon} alt="email" width={20} height={16} />
            <input
              className={styles.friends_form__refferal_form__input}
              type="email"
              required
              placeholder="Enter your email address"
              onChange={handleEmailChange}
            >
            </input>
          </div>
          <button
            className={styles.friends_form__refferal_form__button}
            type="submit"
            disabled={!validate()}
          >
            <span className={loading ? styles.hidden : styles.show}>
              Get Referral Link
            </span>
            <span
              className={
                styles.loader + " " + (loading ? styles.show : styles.hidden)
              }
            ></span>
          </button>
        </form>
        <form
          className={
            styles.friends_form__email_form +
            " " +
            (confimedEmail ? " " : styles.hidden)
          }
        >
          <span className={styles.friends_form__email_form__message}>
            <Image src={SuccessIcon} alt="close" width={24} height={24} />
            Your email is confirmed!
          </span>
          <div className={styles.friends_form__email_form__desktop_input}>
            <input
              type="text"
              defaultValue="https://ratepunk.com/referral"
            ></input>
            <button onClick={copyReferralLink}>Copy</button>
          </div>
          { copied ? <p className={styles.friends_form__email_form__info_message}>Link is coppied! </p>: ""}
          <div className={styles.friends_form__email_form__mobile_input}>
            <input defaultValue="https://ratepunk.com/referral"></input>
            <button onClick={copyReferralLink}>Copy URL</button>
          </div>
        </form>
      </div>
      <p className={styles.friends_form__limits}>
        Limits on max rewards apply.
      </p>
    </section>
  );
}
