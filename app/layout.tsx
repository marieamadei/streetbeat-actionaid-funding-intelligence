import type { Metadata } from "next";
import "./globals.css";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "ActionAid Funding Intelligence | Streetbeat",
  description:
    "Il recap del primo confronto Streetbeat × ActionAid e una direzione concreta per collegare fundraising, bandi, progetti ed evidenze.",
  icons: {
    icon: `${publicBasePath}/favicon.svg`,
    shortcut: `${publicBasePath}/favicon.svg`,
  },
  openGraph: {
    title: "ActionAid Funding Intelligence | Streetbeat",
    description: "Dall’AI sperimentata all’AI operativa.",
    images: [`${publicBasePath}/og.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
