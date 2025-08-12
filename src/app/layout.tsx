import "../styles/globals.css";
import { ReactNode } from "react";
import { Footer } from "../components/footer";
import { ClientNavbarWrapper } from "../components/clientnavbarwrapper";

export const metadata = {
  title: "Lic. Iván Waisman | Psicólogo Clínico M.P. 14636",
  description:
    "Mejores decisiones, relaciones más sanas y bienestar integral. Psicólogo clínico especializado en depresión, ansiedad, relaciones e intervenciones contextuales.",
  authors: [{ name: "Lic. Iván Waisman" }],
  openGraph: {
    title: "Lic. Iván Waisman | Psicólogo Clínico M.P. 14636",
    description:
      "Diplomado en Abordajes Comportamentales Contextuales (ACT, DBT). Experto en depresión, ansiedad, relaciones e intervenciones con Expats. Miembro de ACBS Chapter Argentina.",
    siteName: "Lic. Iván Waisman",
    locale: "es_AR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ClientNavbarWrapper>{children}</ClientNavbarWrapper>
        <Footer />
      </body>
    </html>
  );
}
