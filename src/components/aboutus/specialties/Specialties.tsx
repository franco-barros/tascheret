"use client";

import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "../../../styles/about/Specialties.module.css";
import { Briefcase, Car, Home } from "lucide-react";

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

  // AutoPlay solo en mobile/tablet 👇
  useEffect(() => {
    if (!isDesktop) {
      const interval = setInterval(() => {
        instanceRef.current?.next();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [instanceRef, isDesktop]);

  const specialties = [
    {
      id: 1,
      icon: <Briefcase size={16} style={{ marginRight: "0.5rem" }} />,
      title: "Laboral",
      text: "Asesoramiento en contratación de personal, despidos, indemnizaciones, liquidaciones, accidentes y enfermedades inculpables.",
    },
    {
      id: 2,
      icon: <Car size={16} style={{ marginRight: "0.5rem" }} />,
      title: "Accidentes de tránsito",
      text: "Asistencia a víctimas de accidentes de tránsito en reclamos extrajudiciales y judiciales, buscando la reparación correspondiente.",
    },
    {
      id: 3,
      icon: <Home size={16} style={{ marginRight: "0.5rem" }} />,
      title: "Veinteañales",
      text: "Reclamos por posesiones veinteañales, orientados a la regularización dominial y saneamiento de títulos de propiedad.",
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
          <div ref={sliderRef} className="keen-slider">
            {specialties.map((item) => (
              <article
                key={item.id}
                className={`keen-slider__slide ${styles.specialtyCard}`}
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
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`${styles.dot} ${
                  currentSlide === idx ? styles.active : ""
                }`}
                aria-label={`Ir a la tarjeta ${item.id}`}
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
