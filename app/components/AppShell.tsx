"use client";

import React, { useState } from "react";
import { RegisterModal } from "./customers/RegisterModal";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const AppShell = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header openModal={() => setOpen(true)} />
      <main className="flex-1 bg-background">
        <RegisterModal open={open} onClose={() => setOpen(false)} />
        {children}
      </main>
      <Footer />
    </>
  );
};
