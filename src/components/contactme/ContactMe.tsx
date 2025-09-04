"use client";

import React, { useState } from "react";
import styles from "../../styles/contactme/ContactMe.module.css";
import { FadeInOnScroll } from "../shared/fadeInonscroll";
import {
  FaInfoCircle,
  FaEnvelopeOpenText,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Formulario enviado (demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <FadeInOnScroll>
        <div className={styles.badgeWrapper}>
          <div className={styles.badge}>@ Contacto</div>
        </div>

        <h2 className={styles.heading}>Ponte en Contacto</h2>
        <p className={styles.subHeading}>
          Responderemos tu consulta lo antes posible.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.15}>
        <div className={styles.contactWrapper}>
          {/* Tarjeta izquierda con info */}
          <div className={`${styles.card} ${styles.contactInfo}`}>
            <h3 className={styles.cardTitle}>
              <FaInfoCircle style={{ marginRight: "0.5rem" }} />
              Información de Contacto
            </h3>

            <h4 className={styles.infoTitle}>
              <FaMapMarkerAlt style={{ marginRight: "0.5rem" }} />
              Dirección
            </h4>
            <p>Belgrano 12 (E), 1° piso, Capital,</p>
            <p>San Juan, Argentina</p>

            <h4 className={styles.infoTitle}>
              <FaPhoneAlt style={{ marginRight: "0.5rem" }} />
              Teléfonos
            </h4>
            <p>2644769484</p>

            <h4 className={styles.infoTitle}>
              <FaEnvelope style={{ marginRight: "0.5rem" }} />
              Correo
            </h4>
            <p>juridicotascheretvidela@gmail.com</p>
          </div>

          {/* Tarjeta derecha con formulario */}
          <form
            onSubmit={handleSubmit}
            className={`${styles.card} ${styles.contactForm}`}
          >
            <h3 className={styles.cardTitle}>
              <FaEnvelopeOpenText style={{ marginRight: "0.5rem" }} />
              Envíanos un mensaje
            </h3>

            <input
              type="text"
              name="name"
              placeholder="Tu Nombre"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
            <input
              type="email"
              name="email"
              placeholder="Tu Correo"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
            <textarea
              name="message"
              placeholder="Tu Mensaje"
              value={formData.message}
              onChange={handleChange}
              required
              className={styles.textAreaField}
            />
            <button type="submit" className={styles.submitButton}>
              Enviar Mensaje
            </button>
          </form>
        </div>
      </FadeInOnScroll>

      {/* Card independiente de Instagram */}
      <FadeInOnScroll delay={0.3}>
        <div className={styles.instagramCardWrapper}>
          <div className={`${styles.card} ${styles.instagramCard}`}>
            <h3 className={styles.cardTitle}>
              <FaInstagram style={{ marginRight: "0.5rem" }} />
              Seguinos en Instagram
            </h3>
            <p>Síguenos para ver nuestras novedades y contenido legal.</p>
            <a
              href="https://www.instagram.com/ponetederecho/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagramButton}
            >
              Seguinos en Instagram
            </a>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default ContactMe;
