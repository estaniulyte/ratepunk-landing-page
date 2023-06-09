import { MainNavigationConfig, NavigationConfig } from "@/types";

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
      href: "/pricing",
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
