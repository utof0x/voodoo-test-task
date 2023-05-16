import { Space_Grotesk, Space_Mono } from "next/font/google";

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const spaceMono = Space_Mono({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});
