"use client";

import React from "react";
import Image from "next/image";
import styles from "../../../styles/blog/blogsection/BlogSectionDesktop.module.css";
import {
  FaBookOpen,
  FaCalendarAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

const BlogSectionDesktop: React.FC = () => {
  // Mostramos 3 tarjetas estáticas con contenido genérico
  const posts = [
    {
      id: "1",
      category: "Derecho Penal",
      title: "Artículo jurídico 1",
      description: "Resumen breve del artículo legal 1.",
      date: "10/02/2024",
      time: "7 min lectura",
      image: "/images/persona1.png",
    },
    {
      id: "2",
      category: "Derecho Laboral",
      title: "Artículo jurídico 2",
      description: "Resumen breve del artículo legal 2.",
      date: "22/03/2024",
      time: "4 min lectura",
      image: "/images/persona2.png",
    },
    {
      id: "3",
      category: "Derecho Civil",
      title: "Artículo jurídico 3",
      description: "Resumen breve del artículo legal 3.",
      date: "15/04/2024",
      time: "6 min lectura",
      image: "/images/persona.png",
    },
  ];

  return (
    <div className={styles.cardGridWrapper}>
      {posts.map((post) => (
        <div
          key={post.id}
          className={styles.card}
          style={{ cursor: "default" }}
        >
          <div className={styles.imageWrapper}>
            <span className={styles.categoryBadge}>
              <FaBookOpen style={{ marginRight: 6 }} />
              {post.category}
            </span>
            <Image
              src={post.image}
              alt={post.title}
              className={styles.image}
              fill
              sizes="(max-width: 768px) 100vw, 330px"
              style={{ objectFit: "cover" }}
              priority={false}
            />
          </div>

          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{post.title}</h3>
            <p className={styles.cardDescription}>{post.description}</p>

            <div className={styles.meta}>
              <span>
                <FaCalendarAlt style={{ marginRight: 4 }} />
                {post.date}
              </span>
              <span>•</span>
              <span>
                <FaClock style={{ marginRight: 4 }} />
                {post.time}
              </span>
            </div>

            <button className={styles.readButton} disabled>
              Leer Artículo <FaArrowRight style={{ marginLeft: 6 }} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogSectionDesktop;
