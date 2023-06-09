import { MainNavigationConfig, NavigationConfig, SocialNavigationConfig } from "@/types";

import InstagramIcon from "@/assets/instagram.svg";
import FacebookIcon from "@/assets/facebook.svg";
import LinkedInIcon from "@/assets/linkedin.svg";
import TwitterIcon from "@/assets/twitter.svg";
import TikTocIcon from "@/assets/tiktok.svg";

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
      icon: InstagramIcon,
      alt: 'instagram'
    },
    {
      title: "Facebook",
      href: "https://www.facebook.com/r8punk",
      icon: FacebookIcon,
      alt: 'facebook'
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/company/ratepunk/",
      icon: LinkedInIcon,
      alt: 'linkedin'
    },
    {
      title: "Twitter",
      href: "https://twitter.com/rate_punk",
      icon: TwitterIcon,
      alt: 'twitter'
    },
    {
      title: "TikTok",
      href: "https://www.tiktok.com/@rate_punk",
      icon: TikTocIcon,
      alt: 'tiktok'
    },
  ],
};

