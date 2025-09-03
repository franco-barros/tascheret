import "../styles/globals.css";
import { ReactNode } from "react";
import { Footer } from "../components/footer";
import { ClientNavbarWrapper } from "../components/clientnavbarwrapper";

export const metadata = {
  title: "Tascheret - Videla | Estudio Juridico",
  description:
    "Estudio jurídico especializado en derecho laboral, accidentes de tránsito y regularización dominial. Asesoramiento profesional para empresas y particulares.",
  authors: [{ name: "Tascheret - Videla Abogados" }],
  openGraph: {
    title: "Tascheret - Videla | Abogados Laborales",
    description:
      "Soluciones jurídicas claras y personalizadas en derecho laboral, accidentes y regularización de inmuebles. Profesionales con amplia experiencia en San Juan.",
    siteName: "Tascheret - Videla Abogados",
    locale: "es_AR",
    type: "website",
  },
  icons: {
    icon: "/icons/logoversionA-4.png",
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
