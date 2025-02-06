import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const IBMPlexMono = IBM_Plex_Mono({
  weight: "300",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: {
    template: "ft's den | %s",
    absolute: "ft's den",
    default: "ft's den"
  },
  description: "A very cool website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${IBMPlexMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
