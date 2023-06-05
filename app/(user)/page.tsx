import React from "react";
import {
  Hero,
  JoinUs,
  Plans,
  Programs,
  Reasons,
  Testimonials,
} from "@/app/(user)/components";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="flex w-full flex-col justify-center text-center">
      <Hero />
      {/* <Programs /> */}
      <Reasons />
      <Plans />
      <Testimonials />
      <JoinUs />
    </main>
  );
}
