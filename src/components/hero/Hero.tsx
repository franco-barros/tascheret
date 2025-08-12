"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../../styles/hero/Hero.module.css";

const Hero: React.FC = () => {
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
          <Link
            href="/contacto"
            className={`${styles.btn} ${styles.btnPrimary}`}
          >
            Contactar
          </Link>
          <Link
            href="/areas"
            className={`${styles.btn} ${styles.btnSecondary}`}
          >
            Áreas de Práctica
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
