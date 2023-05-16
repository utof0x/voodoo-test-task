import "./globals.css";

export const metadata = {
  title: "Voodoo Ecom test task",
  description: "Voodoo Ecom test task",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
