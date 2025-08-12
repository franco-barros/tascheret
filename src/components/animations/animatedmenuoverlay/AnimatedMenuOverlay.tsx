"use client";

import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../../styles/animations/AnimatedMenuOverlay.module.css";

interface AnimatedMenuOverlayProps {
  onClose: () => void;
  scrollToSection: (id: string) => void;
  navLinks: { href: string; label: string }[];
  activeSection: string;
}

const AnimatedMenuOverlay: React.FC<AnimatedMenuOverlayProps> = ({
  onClose,
  scrollToSection,
  navLinks,
  activeSection,
}) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 500); // igual a la duración de la animación
  };

  return createPortal(
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.menuOverlayContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.animatedMenu}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <button
              className={styles.closeButton}
              onClick={handleClose}
              aria-label="Cerrar menú"
            >
              &times;
            </button>

            <div className={styles.menuItemsContainer}>
              {navLinks.map(({ href, label }) => (
                <button
                  key={href}
                  onClick={() => {
                    scrollToSection(href);
                    handleClose();
                  }}
                  className={`${styles.menuItem} ${
                    activeSection === href ? styles.activeItem : ""
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default AnimatedMenuOverlay;
