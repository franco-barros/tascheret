"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "../../../styles/about/Lawyers.module.css";
import Image from "next/image";
import { Users } from "lucide-react";
import {
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Lawyers: React.FC = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 16 }, // 1 por vista en mobile
    mode: "snap",
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 1, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 2, spacing: 24 },
      },
    },
  });

  const lawyers = [
    {
      id: 1,
      name: "Dr. Santiago Tascheret Aróstegui",
      bio: "Abogado egresado con el mejor promedio de la Universidad Nacional de San Juan (Medalla de Honor 2015), actualmente cursando la Maestría en Derecho Laboral en la Universidad Nacional de Cuyo. Posee diplomaturas en Derecho Laboral y Riesgos del Trabajo, y ha sido disertante en jornadas y conferencias especializadas. Cuenta con más de 10 años de experiencia en el ejercicio profesional, tanto en el ámbito privado como en el Poder Judicial, y una destacada trayectoria académica como docente y autor de publicaciones jurídicas en revistas especializadas.",
      image: "/images/persona1.png",
      social: {
        whatsapp: "https://wa.me/2645041571",
        linkedin: "https://www.linkedin.com/in/santiago-tascheret-6033b2209/",
        facebook: "https://www.facebook.com/stascheret",
        instagram: "",
      },
    },
    {
      id: 2,
      name: "Dr. Ignacio Videla Nicolás",
      bio: "Abogado especializado en Derecho Laboral, con sólida formación académica y amplia experiencia en el ejercicio profesional. Graduado de la Universidad Empresarial Siglo 21, ha completado diplomaturas y cursos de especialización en derecho laboral. Su trayectoria incluye el ejercicio independiente, asesoramiento jurídico a empresas y trabajadores, y participación en jornadas y conferencias del ámbito laboral y empresarial. Reconocido por su compromiso, actualización constante y enfoque práctico en la defensa de los derechos laborales.",
      image: "/images/IgnacioVidela.png",
      social: {
        whatsapp: "https://wa.me/2644769484",
        linkedin:
          "https://www.linkedin.com/in/ignacio-videla-nicolas-282897326/",
        facebook: "https://www.facebook.com/ignaciovidela",
        instagram: "https://www.instagram.com/ponetederecho/",
      },
    },
  ];

  return (
    <>
      <div className={styles.badgeWrapper}>
        <span className={styles.badge}>
          <Users size={18} style={{ marginRight: "0.4rem" }} />
          Nuestro Equipo
        </span>
      </div>

      <div ref={sliderRef} className={`keen-slider ${styles.slider}`}>
        {lawyers.map((lawyer) => (
          <article
            key={lawyer.id}
            className={`keen-slider__slide ${styles.lawyerCard}`}
          >
            <div className={styles.lawyerImageSection}>
              <Image
                src={lawyer.image}
                alt={lawyer.name}
                width={300}
                height={500} // más alto en mobile
                className={styles.lawyerImage}
                style={{ objectFit: "cover" }}
              />
              <h4 className={styles.lawyerName}>{lawyer.name}</h4>
            </div>

            <div className={styles.lawyerDescription}>
              <p className={styles.lawyerBio}>{lawyer.bio}</p>
              <div className={styles.socialLinks}>
                {lawyer.social.whatsapp && (
                  <a
                    href={lawyer.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp />
                  </a>
                )}
                {lawyer.social.linkedin && (
                  <a
                    href={lawyer.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                )}
                {lawyer.social.facebook && (
                  <a
                    href={lawyer.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook />
                  </a>
                )}
                {lawyer.social.instagram && (
                  <a
                    href={lawyer.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default Lawyers;
