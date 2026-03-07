import "~/styles/globals.css";

import { ThemeProvider } from "~/app/_components/theme-provider";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { AppHeader } from "~/app/_components/app-header";
import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Ideas Tinder",
  description: "Swipe and save startup ideas tailored to your preferences",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} bg-background text-foreground`}
    >
      <body className="mobile-app-shell relative md:pb-0">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <TRPCReactProvider>
            <AppHeader />
            <div className="bg-background mt-28">{children}</div>
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
