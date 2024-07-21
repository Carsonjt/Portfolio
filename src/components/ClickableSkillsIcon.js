/* eslint-disable react/jsx-key */
import Image from "next/image";
import React, { useState } from "react";
import Modal from "./Modal";

export default function ClickableIcon({
  name,
  src,
  description,
  points,
  learning,
}) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <Modal show={showModal} onClose={handleCloseModal}>
        <h2 className="text-xl font-bold text-center">{name}</h2>
        <Image
          alt={name + " logo"}
          src={src}
          width={125}
          height={125}
          className={`mx-auto ${learning ? "grayscale" : ""}`}
          onClick={handleOpenModal}
        />
        <p className="my-5">{description}</p>

        {Array.isArray(points) && points.map((point) => <p>• {point.text}</p>)}
      </Modal>

      <div className="px-5 h-[100px] hover:scale-110 duration-150 relative">
        <Image
          alt={name + " logo"}
          src={src}
          width={95}
          height={95}
          className={`mx-auto ${learning ? "grayscale" : ""}`}
          onClick={handleOpenModal}
        />
        {learning && (
          <div className="absolute left-0 bottom-0 bg-orange-500 rounded-lg m-2 text-sm px-1 py-0.5 text-white font-mono">
            LEARNING
          </div>
        )}
      </div>
      <p className="text-center">{name}</p>
    </div>
  );
}
