import type { Metadata } from "next";
import "./globals.css";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "ActionAid Funding Intelligence | Streetbeat",
  description:
    "Concept Streetbeat per trasformare bandi, segnali di relazione, rischi e conoscenza in decisioni e azioni per ActionAid.",
  icons: {
    icon: `${publicBasePath}/favicon.svg`,
    shortcut: `${publicBasePath}/favicon.svg`,
  },
  openGraph: {
    title: "ActionAid Funding Intelligence | Streetbeat",
    description: "Più opportunità. Relazioni più forti. Meno dispersione.",
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
