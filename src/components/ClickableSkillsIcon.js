import Image from "next/image";
import React, { useState } from "react";
import Modal from "./Modal";

export default function ClickableIcon({ name, id, src }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <Modal show={showModal} onClose={handleCloseModal}>
        <h2 className="text-xl font-bold">This is a Modal for {name}</h2>
        <p>Some content goes here...</p>
      </Modal>

      <div className="px-5 min-h-28 hover:scale-110 duration-150">
        <Image
          alt={name + " logo"}
          src={src}
          height={95}
          className="mx-auto"
          onClick={handleOpenModal}
        />
      </div>
      <p className="text-center">{name}</p>
    </div>
  );
}
