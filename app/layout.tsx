import "./globals.css";
import { spaceGrotesk } from "utils/fonts";

export const metadata = {
  title: "Voodoo Ecom test task",
  description: "Voodoo Ecom test task",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
