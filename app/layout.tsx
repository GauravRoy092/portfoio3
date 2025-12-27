import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mix2 | Notes & Music",
  description: "The ultimate blend of Notion and Spotify - take notes while listening to music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
