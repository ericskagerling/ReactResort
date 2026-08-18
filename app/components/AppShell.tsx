"use client";

import React, { useState } from "react";
import { CustomerModal } from "./customers/CustomersModal";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const AppShell = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header openModal={() => setOpen(true)} />
      <main className="flex-1 bg-background">
        <CustomerModal open={open} onClose={() => setOpen(false)} />
        {children}
      </main>
      <Footer />
    </>
  );
};
