"use client";

import React from "react";
import styles from "../../styles/about/AboutUs.module.css";
import { FadeInOnScroll } from "../shared/fadeInonscroll";
import { Users } from "lucide-react";
import Specialties from "./specialties";
import Lawyers from "./lawyers";

const AboutUs: React.FC = () => {
  return (
    <section id="aboutus" className={styles.aboutSection}>
      <FadeInOnScroll>
        {/* Encabezado Sobre Nosotros */}
        <div className={styles.badgeWrapper}>
          <span className={styles.badge}>
            <Users size={18} style={{ marginRight: "0.4rem" }} />
            Sobre Nosotros
          </span>
        </div>

        <div className={styles.description}>
          Somos un estudio jurídico con sede en San Juan, comprometido con
          brindar soluciones claras y personalizadas en conflictos laborales,
          accidentes y regularización de inmuebles. Acompañamos tanto a empresas
          como particulares en cada etapa del proceso, con un enfoque
          profesional y adaptado a cada necesidad.
        </div>

        {/* Especialidades con slider */}
        <Specialties />

        {/* Abogados con slider */}
        <Lawyers />
      </FadeInOnScroll>
    </section>
  );
};

export default AboutUs;
