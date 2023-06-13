import { navConfig } from "@/config/nav";

import MainNav from "@/components/mainNav";

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
