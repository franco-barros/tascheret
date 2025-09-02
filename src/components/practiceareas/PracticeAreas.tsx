"use client";

import React, { useState, useEffect } from "react";
import styles from "../../styles/practicearea/PracticeAreas.module.css";
import {
  Layers,
  FileText,
  Users,
  Rocket,
  CreditCard,
  Shield,
  Briefcase,
  Cpu,
  Mountain,
} from "lucide-react";
import PracticeAreasMobile from "./practiceareasmobile";
import { FadeInOnScroll } from "../shared/fadeInonscroll";

interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const practiceAreas: PracticeArea[] = [
  {
    id: "1",
    title: "Derecho Societario",
    description:
      "Ingeniería Jurídica para Empresas; Armado de grupos societarios; Holding societario, Estatutos, Convenio de accionistas; Due Diligence legal para empresas.",
    icon: <Briefcase size={28} />,
  },
  {
    id: "2",
    title: "Contrataciones / Redacción de Instrumentos - Reglamentos",
    description:
      "Civiles, Comerciales, Colaboración Empresaria, Fideicomisos, Negociaciones, Compliance, Códigos de Ética, Reglamentos.",
    icon: <FileText size={28} />,
  },
  {
    id: "3",
    title: "Consultoría de Empresas Familiares",
    description:
      "Protocolos Familiares; Armado de Estructuras de Gobierno Corporativo; Planificación sucesoria, Planificación Patrimonial.",
    icon: <Users size={28} />,
  },
  {
    id: "4",
    title: "Emprendedores y Startups",
    description:
      "Asesoramiento en nuevos negocios, abc legal para emprender; Matriz de Riesgo del proyecto, Convenio con Inversores, Rondas de Inversión.",
    icon: <Rocket size={28} />,
  },
  {
    id: "5",
    title: "Cobranzas",
    description:
      "Gestión y administración de cartera de cobranzas (preventiva, extrajudicial y judicial).",
    icon: <CreditCard size={28} />,
  },
  {
    id: "6",
    title: "Propiedad Intelectual",
    description: "Registro de Marcas y Patentes.",
    icon: <Shield size={28} />,
  },
  {
    id: "7",
    title: "Derecho Laboral para Empresas",
    description:
      "«Siempre del lado de la Empresa” Asesoramiento laboral preventivo; en cuestiones ordinarias de Derecho Laboral Individual y Colectivo. Negociaciones extrajudiciales y representación en litigios laborales.",
    icon: <Briefcase size={28} />,
  },
  {
    id: "8",
    title: "Derecho y Nuevas Tecnologías",
    description:
      "Amplia experiencia en asesoramiento de empresas de base tecnológica y actividades de la economía del conocimiento. Asesoramiento en normativa de protección de datos. Redacción de contratos, avisos legales y acuerdos de confidencialidad.",
    icon: <Cpu size={28} />,
  },
  {
    id: "9",
    title: "Derecho Minero",
    description:
      "Asesoramiento de empresas mineras dedicadas a la exploración y explotación de emprendimientos mineros.",
    icon: <Mountain size={28} />,
  },
];

const PracticeAreas: React.FC = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const renderArea = (area: PracticeArea) => (
    <article key={area.id} id={`area-${area.id}`} className={styles.areaCard}>
      {area.icon && <div className={styles.iconWrapper}>{area.icon}</div>}
      <h4>{area.title}</h4>
      <p>{area.description}</p>
    </article>
  );

  return (
    <section id="section-practiceareas" className={styles.practiceAreasSection}>
      <FadeInOnScroll>
        <div className={styles.badgeWrapper}>
          <span className={styles.badge}>
            <Layers size={18} style={{ marginRight: "0.4rem" }} />
            Áreas de Práctica
          </span>
        </div>

        <p className={styles.description}>
          Combinamos innovación, ética y un enfoque personalizado para ofrecer
          un servicio de soluciones jurídicas integrales a empresas y
          emprendedores.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.15}>
        {isMobile ? (
          <PracticeAreasMobile practiceAreas={practiceAreas} />
        ) : (
          <div className={styles.gridDesktop}>
            {practiceAreas.map(renderArea)}
          </div>
        )}
      </FadeInOnScroll>
    </section>
  );
};

export default PracticeAreas;
