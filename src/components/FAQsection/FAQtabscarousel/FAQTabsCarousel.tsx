"use client";

import React, { useState } from "react";
import styles from "../../../styles/faqsection/FAQTabsCarousel.module.css";
import { ChevronDown } from "lucide-react";
import { FadeInOnScroll } from "../../shared/fadeInonscroll";

const faqItems = [
  {
    category: "General",
    questions: [
      {
        question: "¿Qué servicios ofrece el estudio jurídico?",
        answer:
          "Brindamos asesoría legal en conflictos laborales, accidentes, y regularización de inmuebles.",
      },
      {
        question: "¿Cómo puedo contactar para una consulta?",
        answer:
          "Podés contactarnos por WhatsApp, correo electrónico o mediante el formulario web.",
      },
      {
        question: "¿Atendemos tanto a empleados como a empleadores?",
        answer:
          "Sí, asesoramos y defendemos a trabajadores y empresas por igual.",
      },
      {
        question: "¿Cuál es el costo de una consulta legal?",
        answer:
          "El costo varía según el caso, te invitamos a solicitar una entrevista para evaluación.",
      },
    ],
  },
  {
    category: "Casos Laborales",
    questions: [
      {
        question: "¿Qué hago si me despidieron injustificadamente?",
        answer:
          "Podemos asesorarte para reclamar indemnizaciones y defender tus derechos laborales.",
      },
      {
        question: "¿Cómo se gestiona una reestructuración de personal?",
        answer:
          "Asistimos a las empresas para que cumplan con la legislación y negocien con los trabajadores.",
      },
      {
        question: "¿Qué cubren los accidentes laborales?",
        answer:
          "Incluyen accidentes y enfermedades inculpables, con derecho a indemnización y tratamiento.",
      },
      {
        question: "¿Qué trámites debo realizar en caso de despido?",
        answer:
          "Te guiamos en la liquidación, presentación de reclamos y asesoramiento jurídico.",
      },
    ],
  },
  {
    category: "Procedimientos",
    questions: [
      {
        question: "¿Qué es un reclamo extrajudicial?",
        answer:
          "Es una gestión previa para resolver conflictos sin iniciar un proceso judicial.",
      },
      {
        question: "¿Cómo se inicia un juicio laboral?",
        answer:
          "A través de la presentación de una demanda ante la justicia laboral con asesoría profesional.",
      },
      {
        question: "¿Qué es la posesión veinteañal?",
        answer:
          "Proceso legal para regularizar la propiedad de un inmueble tras 20 años de posesión continua.",
      },
      {
        question: "¿Cuánto tiempo tarda un proceso legal laboral?",
        answer:
          "Depende del caso y la jurisdicción, pero generalmente puede extenderse varios meses o años.",
      },
    ],
  },
];

const FAQTabsCarousel: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number | null>(
    null
  );

  const toggleQuestion = (index: number) => {
    setActiveQuestionIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <div className={styles.tabList}>
        {faqItems.map((group, index) => (
          <button
            key={group.category}
            className={`${styles.tabItem} ${
              index === activeCategoryIndex ? styles.tabItemActive : ""
            }`}
            onClick={() => {
              setActiveCategoryIndex(index);
              setActiveQuestionIndex(null);
            }}
          >
            {group.category}
          </button>
        ))}
      </div>

      <ul className={styles.questionList}>
        {faqItems[activeCategoryIndex].questions.map((item, index) => {
          const isActive = activeQuestionIndex === index;

          return (
            <FadeInOnScroll key={item.question} delay={index * 0.1}>
              <button
                className={styles.questionItem}
                tabIndex={0}
                onClick={() => toggleQuestion(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") toggleQuestion(index);
                }}
              >
                <div className={styles.questionHeader}>
                  <span
                    className={
                      isActive ? styles.answerText : styles.questionText
                    }
                  >
                    {isActive ? item.answer : item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`${styles.chevron} ${
                      isActive ? styles.chevronOpen : ""
                    }`}
                  />
                </div>
              </button>
            </FadeInOnScroll>
          );
        })}
      </ul>
    </>
  );
};

export default FAQTabsCarousel;
