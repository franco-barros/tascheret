"use client";

import React from "react";
import Image from "next/image";
import styles from "../../styles/AboutUs.module.css";
import { FadeInOnScroll } from "../shared/fadeInonscroll";
import {
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { Briefcase, Car, Home, Users } from "lucide-react";

const AboutUs: React.FC = () => {
  return (
    <section id="aboutus" className={styles.aboutSection}>
      <FadeInOnScroll>
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

        <h3 className={styles.subTitle}>
          <Briefcase
            size={20}
            style={{ marginRight: "0.5rem", verticalAlign: "middle" }}
          />
          Especialidades
        </h3>
        <div className={styles.specialties}>
          <article className={styles.specialtyCard}>
            <h4>
              <Briefcase
                size={16}
                style={{ marginRight: "0.5rem", verticalAlign: "middle" }}
              />
              Laboral
            </h4>
            <p>
              Nos especializamos en el asesoramiento y la asistencia jurídica en
              reclamos extrajudiciales, tanto para personas físicas como
              jurídicas, en temas relacionados con la contratación de personal,
              despidos, indemnizaciones, liquidaciones por extinción del
              contrato de trabajo, suspensiones, reestructuración de personal,
              accidentes y enfermedades inculpables.
            </p>
          </article>

          <article className={styles.specialtyCard}>
            <h4>
              <Car
                size={16}
                style={{ marginRight: "0.5rem", verticalAlign: "middle" }}
              />
              Accidentes de tránsito
            </h4>
            <p>
              Ofrecemos asistencia y acompañamiento a víctimas de accidentes de
              tránsito, tanto en reclamos extrajudiciales como judiciales, con
              el objetivo de obtener la reparación correspondiente.
            </p>
          </article>

          <article className={styles.specialtyCard}>
            <h4>
              <Home
                size={16}
                style={{ marginRight: "0.5rem", verticalAlign: "middle" }}
              />
              Veinteañales
            </h4>
            <p>
              Contamos con experiencia en el acompañamiento de reclamos por
              posesiones veinteañales, orientados a la regularización dominial y
              al saneamiento de títulos de propiedad sobre bienes inmuebles.
            </p>
          </article>
        </div>

        {/* Abogados */}
        <h3 className={styles.subTitle}>
          <Users
            size={20}
            style={{ marginRight: "0.5rem", verticalAlign: "middle" }}
          />
          Nuestro Equipo
        </h3>
        <div className={styles.lawyersWrapper}>
          {/* Santiago */}
          <article className={styles.lawyerCard}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/persona1.png"
                alt="Dr. Santiago Tascheret Aróstegui"
                width={280}
                height={350}
                className={styles.image}
              />
            </div>
            <div className={styles.lawyerInfo}>
              <h4>Dr. Santiago Tascheret Aróstegui</h4>
              <p className={styles.lawyerBio}>
                Abogado egresado con el mejor promedio de la Universidad
                Nacional de San Juan (Medalla de Honor 2015), actualmente
                cursando la Maestría en Derecho Laboral en la Universidad
                Nacional de Cuyo. Posee diplomaturas en Derecho Laboral y
                Riesgos del Trabajo, y ha sido disertante en jornadas y
                conferencias especializadas. Cuenta con más de 10 años de
                experiencia en el ejercicio profesional, tanto en el ámbito
                privado como en el Poder Judicial, y una destacada trayectoria
                académica como docente y autor de publicaciones jurídicas en
                revistas especializadas.
              </p>
              <div className={styles.socialLinks}>
                <a
                  href="https://wa.me/2645041571"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Santiago"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://www.linkedin.com/in/santiago-tascheret-6033b2209/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Santiago"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.facebook.com/stascheret?mibextid=wwXIfr&rdid=yzRvXF67W6ovBqf6&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DG3k8Nhep%2F%3Fmibextid%3DwwXIfr#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Santiago"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </article>

          {/* Ignacio */}
          <article className={styles.lawyerCard}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/persona2.png"
                alt="Dr. Ignacio Videla Nicolás"
                width={280}
                height={350}
                className={styles.image}
              />
            </div>
            <div className={styles.lawyerInfo}>
              <h4>Dr. Ignacio Videla Nicolás</h4>
              <p className={styles.lawyerBio}>
                Abogado especializado en Derecho Laboral, con sólida formación
                académica y amplia experiencia en el ejercicio profesional.
                Graduado de la Universidad Empresarial Siglo 21, ha completado
                diplomaturas y cursos de especialización en derecho laboral. Su
                trayectoria incluye el ejercicio independiente, asesoramiento
                jurídico a empresas y trabajadores, y participación en jornadas
                y conferencias del ámbito laboral y empresarial. Reconocido por
                su compromiso, actualización constante y enfoque práctico en la
                defensa de los derechos laborales.
              </p>
              <div className={styles.socialLinks}>
                <a
                  href="https://wa.me/2644769484"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Ignacio"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://www.linkedin.com/in/ignacio-videla-nicolas-282897326/?originalSubdomain=ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Ignacio"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.facebook.com/ignaciovidela"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Ignacio"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/ponetederecho/?hl=es"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Ignacio"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </article>
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default AboutUs;
