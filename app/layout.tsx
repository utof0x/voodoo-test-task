import { Space_Grotesk } from "next/font/google";

import "./globals.css";

export const metadata = {
  title: "Voodoo Ecom test task",
  description: "Voodoo Ecom test task",
};

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
