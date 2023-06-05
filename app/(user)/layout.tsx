import "app/globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { Footer, Header } from "./components";
import { Providers } from "./components/Providers";

export const metadata: Metadata = {
  title: "Fitness Club",
  description: "Fitness Club | Gym Memberships, Flexible Monthly Gym Plans",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-appBg`}
      >
        <Providers>
          <Header />
          <main className="flex-grow dark:bg-[#3c3f45]">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
