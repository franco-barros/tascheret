"use client";

import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "../../../styles/about/Specialties.module.css";
import { Briefcase, Car, Home, Activity } from "lucide-react";

/* Hook para detectar media queries */
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    listener();
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

const Specialties: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    !isDesktop
      ? {
          loop: true,
          slides: { perView: 1, spacing: 16 },
          breakpoints: {
            "(min-width: 768px)": {
              slides: { perView: 2, spacing: 20 },
            },
          },
          slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
          },
          created(slider) {
            setCurrentSlide(slider.track.details.rel);
          },
        }
      : {}
  );

  // --- AUTOPLAY: solo en mobile/tablet ---
  useEffect(() => {
    if (isDesktop) return; // no autoplay en desktop
    const interval = window.setInterval(() => {
      instanceRef.current?.next();
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [instanceRef, isDesktop]);

  const specialties = [
    {
      id: 1,
      icon: <Briefcase size={16} style={{ marginRight: "0.5rem" }} />,
      title: "Derecho Laboral",
      text: "Nos especializamos en el asesoramiento y la asistencia jurídica en reclamos extrajudiciales, tanto para personas físicas como jurídicas, en temas relacionados con la contratación de personal, despidos, indemnizaciones, liquidaciones por extinción del contrato de trabajo, suspensiones, reestructuración de personal, accidentes y enfermedades inculpables.",
    },
    {
      id: 2,
      icon: <Activity size={16} style={{ marginRight: "0.5rem" }} />,
      title: "Accidentes y Enfermedades laborales",
      text: "Reclamos por accidentes y enfermedades acaecidos con motivo o como consecuencia de la prestación de tareas. Asistencia ante Superintendencia de Riesgos del Trabajo. Reclamos Judiciales.",
    },
    {
      id: 3,
      icon: <Car size={16} style={{ marginRight: "0.5rem" }} />,
      title: "Accidentes de tránsito",
      text: "Ofrecemos asistencia y acompañamiento a víctimas de accidentes de tránsito, tanto en reclamos extrajudiciales como judiciales, con el objetivo de obtener la reparación correspondiente.",
    },
    {
      id: 4,
      icon: <Home size={16} style={{ marginRight: "0.5rem" }} />,
      title: "Posesiones Veinteañales",
      text: "Contamos con experiencia en el acompañamiento de reclamos judiciales en materia de posesiones veinteañales, con el objeto de lograr la regularización dominial y el saneamiento de títulos de propiedad sobre bienes inmuebles.",
    },
  ];

  return (
    <>
      {/* Título */}
      <div className={styles.specialtiesTitleWrapper}>
        <h3 className={styles.specialTitle}>
          <Briefcase size={20} style={{ verticalAlign: "middle" }} />
          Especialidades
        </h3>
      </div>

      {/* Mobile/Tablet => Slider */}
      {!isDesktop ? (
        <>
          <div ref={sliderRef} className={`keen-slider ${styles.slider}`}>
            {specialties.map((item) => (
              <article
                key={item.id}
                className={`keen-slider__slide ${styles.slide} ${styles.specialtyCard}`}
              >
                <h4>
                  {item.icon}
                  {item.title}
                </h4>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          {/* Dots */}
          <div className={styles.dotsWrapper}>
            {specialties.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`${styles.dot} ${
                  currentSlide === idx ? styles.dotActive : ""
                }`}
                aria-label={`Ir a la tarjeta ${item.id}`}
                aria-pressed={currentSlide === idx}
              />
            ))}
          </div>
        </>
      ) : (
        /* Desktop => Grid */
        <div className={styles.gridWrapper}>
          {specialties.map((item) => (
            <article key={item.id} className={styles.specialtyCard}>
              <h4>
                {item.icon}
                {item.title}
              </h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      )}
    </>
  );
};

export default Specialties;
