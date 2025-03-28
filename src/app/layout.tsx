import "~/styles/globals.css";

import { type Metadata } from "next";
// import { Geist } from "next/font/google";
import { Ubuntu } from "next/font/google";
import { ThemeProvider } from "~/components/theme-provider";
import Footer from "~/components/ui/footer";
import NavigationMenuBar from "./navigation-menubar";

export const metadata: Metadata = {
  title: "MySpace Demo",
  description: "MySpace demo with NEXT.js + Vercel.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

// const geist = Geist({
//   subsets: ["latin"],
//   variable: "--font-ubuntu",
// });

const ubuntu = Ubuntu({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${ubuntu.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavigationMenuBar></NavigationMenuBar>
          {children}
          <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
