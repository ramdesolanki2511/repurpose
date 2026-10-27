import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Repurpose Studio — make every video go further",
  description: "One simple workspace for turning your best content into more everywhere."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
