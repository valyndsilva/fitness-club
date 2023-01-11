import React from "react";
import Head from "next/head";
import {
  Hero,
  JoinUs,
  Plans,
  Programs,
  Reasons,
  Testimonials,
} from "../components";

function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>
          Fitness Club | Gym Memberships, Flexible Monthly Gym Plans
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-col justify-center text-center">
        <Hero />
        <Programs />
        <Reasons />
        <Plans />
        <Testimonials />
        <JoinUs />
      </main>
    </div>
  );
}

export default Home;
