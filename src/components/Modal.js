// components/Modal.js
import { useEffect, useState } from "react";

export default function Modal({ show, onClose, children }) {
  const [visible, setVisible] = useState(false);
  const [animationClass, setAnimationClass] = useState("fade-out-scale");

  useEffect(() => {
    if (show) {
      setVisible(true);
      setAnimationClass("fade-in-scale");
    } else {
      setAnimationClass("fade-out-scale");
      setTimeout(() => setVisible(false), 150); // Match this duration with your fade-out animation
    }
  }, [show]);

  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? onClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [onClose]);

  if (!visible && animationClass === "fade-out-scale") return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-25" onClick={onClose} />
      <div
        className={`bg-white p-5 rounded shadow-lg z-10 h-[95%] w-[95%] max-w-[95%] sm:w-[550px] ${animationClass}`}
      >
        {children}
      </div>
    </div>
  );
}
