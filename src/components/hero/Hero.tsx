"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/hero/Hero.module.css";

const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={styles.overlay}
      >
        <h1 className={styles.title}>
          Tascheret - Videla <br /> Abogados Laborales
        </h1>

        <div className={styles.buttons}>
          <button
            onClick={() => handleScrollTo("contact")}
            className={`${styles.btn} ${styles.btnPrimary}`}
            type="button"
          >
            Contactar
          </button>
          <button
            onClick={() => handleScrollTo("areas")}
            className={`${styles.btn} ${styles.btnSecondary}`}
            type="button"
          >
            Áreas de Práctica
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
