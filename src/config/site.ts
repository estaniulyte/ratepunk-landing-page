import { SiteConfig } from "@/types"

import Logo from '@/assets/logo.svg'

export const siteConfig: SiteConfig = {
  name: "Ratepunk",
  description:
    "Ratepunk compares hotel room prices across the major online travel agencies. When you search for a room, Ratepunk extension scans the top booking sites and runs a price comparison, so you can be confident in knowing you’re getting the best deal!",
  image: Logo,
  links: {
    chromeStore: "https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk",
    appleStore: "https://apps.apple.com/app/ratepunk/id1607823726",
  },
  contactEmail: "hi@ratepunk.com",
  copyrights: "&#169 2021 Ratepunk. All Rights Reserved."
}