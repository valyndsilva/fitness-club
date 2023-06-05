"use client";
import React from "react";
import { ExercisesProvider } from "@/context/exercisesContext";
import { ThemeProvider } from "next-themes";


export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <ExercisesProvider>{children}</ExercisesProvider>
    </ThemeProvider>
  );
}
