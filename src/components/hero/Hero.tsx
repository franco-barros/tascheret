"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../../styles/hero/Hero.module.css";

const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.logoLayer}>
        <div className={styles.logoInner}>
          <Image
            src="/icons/LogoversiónC-4.png"
            alt="Logo Tascheret - Videla"
            fill
            sizes="(max-width: 480px) 80vw, (max-width: 768px) 70vw, 1000px"
            priority
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={styles.content}
      >
        <h1 className={styles.title}>
          Te acompañamos en cada paso para defender tus derechos.
        </h1>

        <div className={styles.buttons}>
          <button
            onClick={() => handleScrollTo("contact")}
            className={`${styles.btn} ${styles.btnPrimary}`}
            type="button"
          >
            Contactar
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
