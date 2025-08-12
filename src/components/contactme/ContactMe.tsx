"use client";

import React, { useState } from "react";
import styles from "../../styles/utils/ContactMe.module.css";
import { FadeInOnScroll } from "../shared/fadeInonscroll";
import {
  FaInfoCircle,
  FaEnvelopeOpenText,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
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
          {/* Tarjeta izquierda con título e ícono */}
          <div className={`${styles.card} ${styles.contactInfo}`}>
            <h3 className={styles.cardTitle}>
              <FaInfoCircle
                style={{ marginRight: "0.5rem", verticalAlign: "middle" }}
              />
              Información de Contacto
            </h3>

            <h4 className={styles.infoTitle}>
              <FaMapMarkerAlt
                style={{ marginRight: "0.5rem", verticalAlign: "middle" }}
              />
              Dirección
            </h4>
            <p>Mitre 309 Este, 2° Piso, Capital,</p>
            <p>San Juan, Argentina</p>

            <h4 className={styles.infoTitle}>
              <FaPhoneAlt
                style={{ marginRight: "0.5rem", verticalAlign: "middle" }}
              />
              Teléfono
            </h4>
            <p>(264) 440-3154</p>

            <h4 className={styles.infoTitle}>
              <FaEnvelope
                style={{ marginRight: "0.5rem", verticalAlign: "middle" }}
              />
              Correo
            </h4>
            <p>estudio@lancianitrincado.com</p>

            <h4 className={styles.infoTitle}>
              <FaClock
                style={{ marginRight: "0.5rem", verticalAlign: "middle" }}
              />
              Horarios
            </h4>
            <p>Lun-Vie: 9:00 – 15:00</p>
          </div>

          {/* Tarjeta derecha con título e ícono */}
          <form
            onSubmit={handleSubmit}
            className={`${styles.card} ${styles.contactForm}`}
          >
            <h3 className={styles.cardTitle}>
              <FaEnvelopeOpenText
                style={{ marginRight: "0.5rem", verticalAlign: "middle" }}
              />
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
    </section>
  );
};

export default ContactMe;
