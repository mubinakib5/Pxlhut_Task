"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { FormProvider } from "@/context/FormContext";
import { ThemeProvider } from "./ThemeProvider";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <FormProvider>{children}</FormProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}