import {
  MainNavigationConfig,
  NavigationConfig,
  SocialNavigationConfig,
} from "@/types";

export const navConfig: MainNavigationConfig = {
  mainNav: [
    {
      title: "Chrome Extension",
      href: "/",
    },
    {
      title: "Price Comparison",
      href: "/pricing",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ],
};

export const quickLinksConfig: NavigationConfig = {
  nav: [
    {
      title: "Price Comparison",
      href: "/comparison",
    },
    {
      title: "Chrome Extension",
      href: "/chrome",
    },
    {
      title: "How It Works",
      href: "/about",
    },
    {
      title: "Ratepunk Blog",
      href: "/blog",
    },
    {
      title: "Privacy Policy",
      href: "/privacy",
    },
  ],
};

export const socialLinksConfig: SocialNavigationConfig = {
  nav: [
    {
      title: "Instagram",
      href: "https://www.instagram.com/ratepunk/",
      icon: "/instagram.svg",
      alt: "instagram",
    },
    {
      title: "Facebook",
      href: "https://www.facebook.com/r8punk",
      icon: "/facebook.svg",
      alt: "facebook",
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/company/ratepunk/",
      icon: "/linkedin.svg",
      alt: "linkedin",
    },
    {
      title: "Twitter",
      href: "https://twitter.com/rate_punk",
      icon: "/twitter.svg",
      alt: "twitter",
    },
    {
      title: "TikTok",
      href: "https://www.tiktok.com/@rate_punk",
      icon: "/tiktok.svg",
      alt: "tiktok",
    },
  ],
};
