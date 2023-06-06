import React from "react";
import {
  Hero,
  JoinUs,
  Plans,
  Reasons,
  Testimonials,
} from "@/app/(user)/components";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="flex w-full flex-col justify-center text-center">
      <Hero />
      <div className="max-w-7xl mx-auto">
        <Reasons />
        <Plans />
        <Testimonials />
        <JoinUs />
      </div>
    </main>
  );
}
