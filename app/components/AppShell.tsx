"use client";

import React, { useState } from "react";
import { RegisterModal } from "./customer/RegisterModal";
import { Header } from "./header/Header";
import { Footer } from "./Footer";

export const AppShell = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-svh flex flex-col">
      <Header openModal={() => setOpen(true)} />
      <main className="flex-1 bg-background">
        <RegisterModal open={open} onClose={() => setOpen(false)} />
        {children}
      </main>
      <Footer />
    </div>
  );
};
