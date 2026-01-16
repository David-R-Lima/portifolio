import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "@/components/providers/react-query-provider";
import { WorkInProgress } from "@/components/work-in-progres";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LangProvider } from "@/components/providers/language-providert";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "David Ribeiro - Portfolio",
  description: "Portfolio of David Ribeiro, a software developer specializing in web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <ReactQueryProvider>

          <body className={inter.className}>
            <ThemeProvider
              attribute={'class'}
              defaultTheme={'system'}
              enableSystem
              disableTransitionOnChange
            >
              <LangProvider>
                {children}
              </LangProvider>
              <WorkInProgress></WorkInProgress>
            </ThemeProvider>
          </body>
      </ReactQueryProvider>
    </html>
  );
}
