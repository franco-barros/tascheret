"use client";

import React, { useState, useEffect } from "react";
import { BlogSectionMobile } from "./blogsectionmobile";
import { BlogSectionDesktop } from "./blogsectiondesktop";
import styles from "../../styles/blog/blogsection/BlogSection.module.css";
import { FaBrain } from "react-icons/fa";
import { FadeInOnScroll } from "../shared/fadeInonscroll";

const BlogSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <section className={styles.blogSection} id="blog">
      <FadeInOnScroll>
        <div className={styles.badge}>
          <FaBrain style={{ marginRight: 8, verticalAlign: "middle" }} />
          Blog Jurídico
        </div>

        <h2 className={styles.title}>
          <span>Artículos</span> / <span>Recursos</span>
        </h2>

        <p className={styles.subtitle}>
          Explora contenido especializado para temas legales y jurídicos
        </p>
      </FadeInOnScroll>

      {isMobile ? <BlogSectionMobile /> : <BlogSectionDesktop />}
    </section>
  );
};

export default BlogSection;
