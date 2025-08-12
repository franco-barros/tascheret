"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../../styles/blog/blogsection/BlogSectionMobile.module.css";
import {
  FaBookOpen,
  FaCalendarAlt,
  FaClock,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const BlogSectionMobile: React.FC = () => {
  // Post estático para maquetar
  const currentPost = {
    category: "Derecho Civil",
    title: "Ejemplo de artículo jurídico",
    description:
      "Resumen breve del artículo relacionado con temas legales importantes.",
    date: "01/01/2024",
    time: "5 min lectura",
    image: "/images/persona1.png", // Cambié por imagen real en imgas
  };

  const variants = {
    enter: { x: 60, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -60, opacity: 0 },
  };

  return (
    <>
      <div className={styles.cardWrapper}>
        <AnimatePresence mode="wait">
          <motion.div
            key="static"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={styles.card}
          >
            <div className={styles.imageWrapper}>
              <span className={styles.categoryBadge}>
                <FaBookOpen style={{ marginRight: 6 }} />
                {currentPost.category}
              </span>
              <div className={styles.image}>
                <Image
                  src={currentPost.image}
                  alt={currentPost.title}
                  fill
                  sizes="(max-width: 768px) 100vw"
                  style={{ objectFit: "cover" }}
                  priority={false}
                />
              </div>
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{currentPost.title}</h3>
              <p className={styles.cardDescription}>
                {currentPost.description}
              </p>

              <div className={styles.meta}>
                <span>
                  <FaCalendarAlt style={{ marginRight: 4 }} />
                  {currentPost.date}
                </span>
                <span>•</span>
                <span>
                  <FaClock style={{ marginRight: 4 }} />
                  {currentPost.time}
                </span>
              </div>

              <button className={styles.readButton}>
                Leer Artículo <FaArrowRight style={{ marginLeft: 6 }} />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={styles.carouselControls}>
        <button className={styles.navButton} disabled>
          <FaChevronLeft />
        </button>
        <button className={styles.navButton} disabled>
          <FaChevronRight />
        </button>
      </div>
    </>
  );
};

export default BlogSectionMobile;
