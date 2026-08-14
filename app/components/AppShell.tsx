"use client";

import React, { useState } from "react";
import { RegisterModal } from "./customer/RegisterModal";
import { Header } from "./header/Header";
import { Footer } from "./Footer";

export const AppShell = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header openModal={() => setOpen(true)} />
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
        <main className="w-full flex flex-1 flex-col items-center bg-background sm:items-start">
          <RegisterModal open={open} onClose={() => setOpen(false)} />
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};
