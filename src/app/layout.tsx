import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import Header from "@/components/layout/Header";
import QueryProvider from "@/utils/QueryClientProvider";

const geistSans = localFont({
  src: "../styles/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../styles/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "riot-app",
  description: "리그 오브 레전드의 챔피언과 아이템, 매주 바뀌는 무료 챔피언을 확인하세요!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <Header />
          <div className="flex justify-center w-full">
            <div className="h-[cal(screen-120px)] flex items-center justify-center mt-[120px] w-[800px]">
              {children}
            </div>
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
