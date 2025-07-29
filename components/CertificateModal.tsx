"use client";
import React from "react";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  title: string;
}

export default function CertificateModal({
  isOpen,
  onClose,
  src,
  title,
}: CertificateModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background bg-opacity-80">
      <div className="relative max-w-3xl w-full h-auto p-4 bg-transparent rounded-lg ">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-200 bg-neutral-800 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
        >
          ✕
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center text-white">{title}</h2>
        <img src={src} alt={title} className="w-full max-h-[60vh] object-contain mx-auto" />
      </div>
    </div>
  );
}
