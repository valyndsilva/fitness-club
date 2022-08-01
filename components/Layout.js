import Head from "next/head";
import { Header, Footer } from "./";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>
          Fitness Club | Gym Memberships, Flexible Monthly Gym Plans
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Fitness Club | Gym Memberships, Flexible Monthly Gym Plans"
        />
      </Head>
      <div className="min-h-screen flex flex-col bg-appBg">
        <Header />
        <main className="layout flex-grow dark:bg-[#3c3f45]">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
