export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type SocialNavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  icon: string | StaticImageData;
  alt: string;
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

export type MainNavigationConfig = {
  mainNav: MainNavItem[];
};

export type NavigationConfig = {
  nav: NavItem[];
};

export type SocialNavigationConfig = {
  nav: SocialNavItem[];
};
