import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ratio UI Kit",
  description: "Galería de componentes de Ratio",
};

// Sin next/font/google: el salón puede no tener internet.
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
