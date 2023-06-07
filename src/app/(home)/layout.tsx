import Link from "next/link"

import { navConfig } from "@/config/nav"

import { MainNav } from "@/components/main-nav"

interface HomeLayoutProps {
  children: React.ReactNode
}

export default async function HomegLayout({
  children,
}: HomeLayoutProps) {
  return (
    <div className="">
        <MainNav items={navConfig.mainNav} />
      <main className="flex-1">{children}</main>
    </div>
  )
}