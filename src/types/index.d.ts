export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type SiteConfig = {
  name: string;
  description: string;
  image: string;
  links: {
    chromeStore: string;
    appleStore: string;
  };
  contactEmail: string;
  copyrights: string;
};

export type NavigationConfig = {
  mainNav: MainNavItem[];
};
