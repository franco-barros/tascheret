"use client";

import React from "react";
import { FaInstagram, FaPhoneAlt, FaEnvelope, FaGavel } from "react-icons/fa";
import { usePathname } from "next/navigation";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) return null;

  const handleInternalLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

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

        {/* Enlaces y contacto */}
        {isHome && (
          <>
            <div className={styles.section}>
              <h4 className={styles.subtitle}>Enlaces</h4>
              <ul className={styles.list}>
                <li>
                  <a
                    href="#aboutus"
                    onClick={(e) => handleInternalLinkClick(e, "aboutus")}
                  >
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#specialties"
                    onClick={(e) => handleInternalLinkClick(e, "specialties")}
                  >
                    Especialidades
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    onClick={(e) => handleInternalLinkClick(e, "faq")}
                  >
                    Preguntas Frecuentes
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.section}>
              <h4 className={styles.subtitle}>Contacto</h4>
              <p className={styles.contact}>
                <FaPhoneAlt /> +54 264 5041571
              </p>
              <p className={styles.contact}>
                <FaEnvelope /> contacto@tascheretvidela.com
              </p>
              <a
                href="https://www.instagram.com/tascheretvidela"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contact}
                aria-label="Instagram"
              >
                <FaInstagram /> @tascheretvidela
              </a>
            </div>
          </>
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
