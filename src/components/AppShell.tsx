"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/student-dashboard");

  if (isDashboard) {
    return (
      <div className="h-dvh w-full min-w-0 overflow-hidden bg-[#F4F7F8]">
        {children}
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto w-full min-w-0 flex-grow flex flex-col">
        {children}
      </main>
      <Footer />
    </>
  );
}
