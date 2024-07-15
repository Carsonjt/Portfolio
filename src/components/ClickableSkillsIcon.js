import Image from "next/image";
import React, { useState } from "react";
import Modal from "./Modal";

export default function ClickableIcon({ name, id, src, learning }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <Modal show={showModal} onClose={handleCloseModal}>
        <h2 className="text-xl font-bold">This is a Modal for {name}</h2>
        <p>Some content goes here...</p>
      </Modal>

      <div className="px-5 h-[100px] hover:scale-110 duration-150 relative">
        <Image
          alt={name + " logo"}
          src={src}
          width={95}
          className={`mx-auto ${learning ? "grayscale" : ""}`}
          onClick={handleOpenModal}
        />
        {learning && (
          <div className="absolute bottom-0 left-6 bg-orange-500 rounded-lg m-2 text-sm px-1 py-0.5 text-white font-mono">
            LEARNING
          </div>
        )}
      </div>
      <p className="text-center">{name}</p>
    </div>
  );
}
