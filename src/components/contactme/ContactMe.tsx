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
  FaFacebook,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Error al enviar el mensaje.");
        return;
      }

      toast.success("Mensaje enviado con éxito");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error("Error en el servidor. Intenta de nuevo más tarde.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      {/* 📌 Contenedor de notificaciones */}
      <Toaster position="top-center" reverseOrder={false} />

      <FadeInOnScroll>
        <div className={styles.badgeWrapper}>
          <div className={styles.badge}>@ Contacto </div>
        </div>

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
            <p>Santa Fé 110 (o)</p>
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
            <button
              type="submit"
              className={styles.submitButton}
              disabled={loading}
            >
              {loading && <span className={styles.spinner}></span>}
              {loading ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </form>
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.3}>
        <div className={styles.socialCardWrapper}>
          <div className={`${styles.card} ${styles.socialCard}`}>
            <h3 className={styles.cardTitle}>Seguinos en nuestras redes</h3>
            <p>Mantenete informado con nuestras novedades y contenido legal.</p>
            <div className={styles.socialButtons}>
              <a
                href="https://www.instagram.com/ponetederecho/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialButton} ${styles.instagramButton}`}
              >
                <FaInstagram style={{ marginRight: "0.5rem" }} />
                Instagram
              </a>
              <a
                href="https://www.facebook.com/share/1BCYBUXbV8/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialButton} ${styles.facebookButton}`}
              >
                <FaFacebook style={{ marginRight: "0.5rem" }} />
                Facebook
              </a>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default ContactMe;
