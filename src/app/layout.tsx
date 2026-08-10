import type { Metadata } from "next";
import "./globals.css";
import AppShell from "@/components/AppShell";

export const metadata: Metadata = {
  title: "Grey Dental",
  description: "Grey Dental",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
