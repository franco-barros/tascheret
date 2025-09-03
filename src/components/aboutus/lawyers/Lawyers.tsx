"use client";

import React, { useEffect, useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "../../../styles/about/Lawyers.module.css";
import Image from "next/image";
import { Users } from "lucide-react";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

/* pequeño hook local para detectar desktop */
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    const handler = () => setMatches(media.matches);
    handler();
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [query]);
  return matches;
}

const Lawyers: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: { perView: 1, spacing: 0 },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 1, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 2, spacing: 24 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  // autoplay solo en mobile/tablet (no desktop)
  const autoplayIntervalRef = useRef<number | null>(null);
  const resumeTimeoutRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // start/stop helpers
  const startAutoplay = () => {
    if (isDesktop) return;
    if (autoplayIntervalRef.current) return;
    autoplayIntervalRef.current = window.setInterval(() => {
      instanceRef.current?.next();
    }, 3000);
  };

  const stopAutoplay = () => {
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
      autoplayIntervalRef.current = null;
    }
  };

  // pause on interaction and resume after delay (5s)
  const pauseForInteraction = (ms = 5000) => {
    setIsPaused(true);
    stopAutoplay();
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = window.setTimeout(() => {
      setIsPaused(false);
    }, ms);
  };

  // effect: start autoplay when appropriate; watch isPaused and isDesktop
  useEffect(() => {
    if (!isDesktop && !isPaused) {
      startAutoplay();
    } else {
      stopAutoplay();
    }
    return () => {
      stopAutoplay();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDesktop, isPaused, instanceRef.current]);

  // cleanup on unmount
  useEffect(() => {
    return () => {
      stopAutoplay();
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  const lawyers = [
    {
      id: 1,
      name: "Dr. Santiago Tascheret Aróstegui",
      bio: "Abogado egresado de la Universidad Nacional de San Juan. Cuenta con más de 10 años de experiencia en el ejercicio profesional, tanto en el ámbito privado, como en el Poder Judicial, y una destacada trayectoria académica como docente y autor de publicaciones jurídicas en revistas especializadas.",
      image: "/images/persona1.png",
      social: {
        whatsapp: "https://wa.me/2645041571",
        linkedin: "https://www.linkedin.com/in/santiago-tascheret-6033b2209/",
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

      {/* slider container: handlers para pausar/resumir autoplay al interactuar */}
      <div
        ref={sliderRef}
        className={`keen-slider ${styles.slider}`}
        onMouseEnter={() => pauseForInteraction(10000)} // pausa 10s al pasar mouse
        onTouchStart={() => pauseForInteraction(10000)} // pausa 10s en touch
      >
        {lawyers.map((lawyer) =>
          !isDesktop ? (
            // MOBILE SLIDES: usamos BUTTON para interactividad (no margin/padding extra)
            <button
              key={lawyer.id}
              type="button"
              className={`keen-slider__slide ${styles.lawyerCard}`}
              onClick={() => pauseForInteraction(8000)} // pausar si interactúan
              onMouseDown={() => pauseForInteraction(8000)}
            >
              <div className={styles.lawyerImageSection}>
                <Image
                  src={lawyer.image}
                  alt={lawyer.name}
                  width={300}
                  height={500}
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
                      onClick={() => pauseForInteraction(8000)}
                    >
                      <FaWhatsapp />
                    </a>
                  )}
                  {lawyer.social.linkedin && (
                    <a
                      href={lawyer.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => pauseForInteraction(8000)}
                    >
                      <FaLinkedin />
                    </a>
                  )}
                </div>
              </div>
            </button>
          ) : (
            // DESKTOP: ya está resuelto, usamos article como antes (no dots en desktop)
            <article key={lawyer.id} className={styles.lawyerCard}>
              <div className={styles.lawyerImageSection}>
                <Image
                  src={lawyer.image}
                  alt={lawyer.name}
                  width={300}
                  height={500}
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
                </div>
              </div>
            </article>
          )
        )}
      </div>

      {/* Dots: solo en mobile/tablet */}
      {!isDesktop && (
        <div className={styles.dotsWrapper}>
          {lawyers.map((lawyer, idx) => (
            <button
              key={lawyer.id}
              type="button"
              className={`${styles.dot} ${
                currentSlide === idx ? styles.dotActive : ""
              }`}
              onClick={() => {
                instanceRef.current?.moveToIdx(idx);
                pauseForInteraction(8000); // pausar autoplay por interacción
              }}
              aria-label={`Ir al slide ${idx + 1}`}
              aria-pressed={currentSlide === idx}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Lawyers;
