"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "../../../styles/practicearea/PracticeAreasMobile.module.css";

interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface Props {
  practiceAreas: PracticeArea[];
}

const PracticeAreasMobile: React.FC<Props> = ({ practiceAreas }) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 16 },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 1, spacing: 16 },
      },
    },
  });

  return (
    <div ref={sliderRef} className={`keen-slider ${styles.sliderMobile}`}>
      {practiceAreas.map((area) => (
        <article
          key={area.id}
          id={`area-${area.id}`}
          className={`keen-slider__slide ${styles.areaCard}`}
        >
          {area.icon && <div className={styles.iconWrapper}>{area.icon}</div>}
          <h4>{area.title}</h4>
          <p>{area.description}</p>
        </article>
      ))}
    </div>
  );
};

export default PracticeAreasMobile;
