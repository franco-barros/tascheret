"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "../../../styles/about/Specialties.module.css";
import { Briefcase, Car, Home } from "lucide-react";

const Specialties: React.FC = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1.2, spacing: 16 },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 24 },
      },
    },
  });

  return (
    <>
      {/* Título centrado */}
      <div className={styles.specialtiesTitleWrapper}>
        <h3 className={styles.specialTitle}>
          <Briefcase size={20} style={{ verticalAlign: "middle" }} />
          Especialidades
        </h3>
      </div>

      <div ref={sliderRef} className="keen-slider">
        <article className={`keen-slider__slide ${styles.specialtyCard}`}>
          <h4>
            <Briefcase size={16} style={{ marginRight: "0.5rem" }} />
            Laboral
          </h4>
          <p>
            Asesoramiento en contratación de personal, despidos,
            indemnizaciones, liquidaciones, accidentes y enfermedades
            inculpables.
          </p>
        </article>

        <article className={`keen-slider__slide ${styles.specialtyCard}`}>
          <h4>
            <Car size={16} style={{ marginRight: "0.5rem" }} />
            Accidentes de tránsito
          </h4>
          <p>
            Asistencia a víctimas de accidentes de tránsito en reclamos
            extrajudiciales y judiciales, buscando la reparación
            correspondiente.
          </p>
        </article>

        <article className={`keen-slider__slide ${styles.specialtyCard}`}>
          <h4>
            <Home size={16} style={{ marginRight: "0.5rem" }} />
            Veinteañales
          </h4>
          <p>
            Reclamos por posesiones veinteañales, orientados a la regularización
            dominial y saneamiento de títulos de propiedad.
          </p>
        </article>
      </div>
    </>
  );
};

export default Specialties;
