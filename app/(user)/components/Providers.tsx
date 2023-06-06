"use client";
import React, { useEffect, useState } from "react";
import { ExercisesProvider } from "@/context/exercisesContext";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {

  // To fix hydration UI mismatch issues, we need to wait until the component has mounted.
  const [mounted, setMounted] = useState(false);

   useEffect(() => {
    setMounted(true);
  }, []);

  if(!mounted) return null;
  
  return (
    <ThemeProvider attribute="class">
      <ExercisesProvider>{children}</ExercisesProvider>
    </ThemeProvider>
  );
}
