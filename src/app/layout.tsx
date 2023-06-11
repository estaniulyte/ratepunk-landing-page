import "@/styles/globals.sass";

import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Ratepunk",
  description: siteConfig.description
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
