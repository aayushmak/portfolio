"use client";
import React, { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  title: string;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 22,
      mass: 0.8,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    y: 10,
    transition: { duration: 0.15 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function CertificateModal({
  isOpen,
  onClose,
  src,
  title,
}: CertificateModalProps) {
  // Close on Esc
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener("keydown", handleKey);
    // Lock background scroll while open
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, handleKey]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />

          {/* Modal card */}
          <motion.div
            className="relative max-w-3xl w-[92vw] md:w-[80vw] lg:w-[70vw] p-4"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-200 bg-neutral-700 hover:bg-neutral-800 rounded-full w-8 h-8 flex items-center justify-center shadow"
              whileTap={{ scale: 0.95 }}
              aria-label="Close modal"
            >
              ✕
            </motion.button>

            <motion.div
              className="rounded-xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-neutral-900/40"
              variants={imageVariants}
            >
              <motion.img
                src={src}
                alt={title}
                className="w-full max-h-[72vh] object-contain mx-auto select-none"
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                whileHover={{ scale: 1.01 }}
                draggable={false}
              />
            </motion.div>

            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
