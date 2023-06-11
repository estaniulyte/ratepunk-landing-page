import { navConfig } from "@/config/nav";

import { MainNav } from "@/components/main-nav";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default async function HomegLayout({ children }: HomeLayoutProps) {
  return (
    <div>
      <MainNav items={navConfig.mainNav} />
      <main>{children}</main>
    </div>
  );
}
