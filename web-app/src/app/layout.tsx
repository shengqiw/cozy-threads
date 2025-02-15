import type { Metadata } from "next";
import "./globals.css";
import { PageLayout } from "@/components/page-layout";
import { ReactChild } from "@/types/generic-props";

export const metadata: Metadata = {
  title: "Cozy Threads",
  description: "Comfortable, Ethically Sourced, Sustainable Clothing",
};

export default function RootLayout({
  children,
}: Readonly<ReactChild>) {
  return (
    <html lang="en">
      <body>
      <PageLayout>
        {children}
      </PageLayout>
      </body>
    </html>
  );
}
