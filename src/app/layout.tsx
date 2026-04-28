import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShelfWise",
  description:
  "Catálogo de produtos com next.js, typescript, tailwind css e paginação"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}