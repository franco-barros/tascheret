"use client";

import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Scale } from "lucide-react";
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
  const [animate, setAnimate] = useState(true);

  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => {
      onClose();
    }, 500);
  };

  const overlayContent = (
    <div className={styles.menuOverlayContainer}>
      <div
        className={`${styles.animatedMenu} ${
          animate ? styles.open : styles.closing
        }`}
      >
        <button
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Cerrar menú"
        >
          &times;
        </button>

        <div className={styles.menuItemsContainer}>
          {navLinks.map(({ href, label }) => {
            const isActive = activeSection === href;
            return (
              <button
                key={href}
                onClick={() => {
                  scrollToSection(href);
                  handleClose();
                }}
                className={`${styles.menuItem} ${
                  isActive ? styles.activeItem : ""
                }`}
              >
                {isActive && <Scale size={18} className={styles.activeIcon} />}{" "}
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  return createPortal(overlayContent, document.body);
};

export default AnimatedMenuOverlay;
