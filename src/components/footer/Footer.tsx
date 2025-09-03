"use client";

import React from "react";
import { FaGavel } from "react-icons/fa";
import { usePathname } from "next/navigation";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) return null;

  // Scroll suave hacia la sección por ID
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Definimos las secciones disponibles
  const sections = [
    { id: "hero", label: "Inicio" },
    { id: "aboutus", label: "Sobre Nosotros" },
    { id: "faq", label: "Preguntas Frecuentes" },
  ];

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.content}>
        {/* Presentación */}
        <div className={styles.section}>
          <h3 className={styles.title}>
            <FaGavel className={styles.iconGavel} />
            Tascheret - Videla | Estudio Jurídico Laboral
          </h3>
          <p className={styles.description}>
            Brindamos asesoría y defensa legal especializada en derecho laboral
            con compromiso, experiencia y ética profesional.
          </p>
        </div>

        {/* Enlaces */}
        {isHome && (
          <div className={styles.section}>
            <h4 className={styles.subtitle}>Enlaces</h4>
            <ul className={styles.list}>
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    type="button"
                    className={styles.linkButton}
                    onClick={() => scrollToSection(section.id)}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Pie común */}
      <div className={styles.bottomBar}>
        <p className={styles.copy}>
          © 2024 Tascheret - Videla | Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
