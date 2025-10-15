import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SolvedSuite | Launch Your Online Business",
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
