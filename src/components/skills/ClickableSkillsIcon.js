/* eslint-disable react/jsx-key */
import Image from "next/image";
import React, { useState } from "react";
import Modal from "../Modal";

export default function ClickableIcon({
  name,
  src,
  description,
  pointTitle,
  points,
  learning,
}) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <Modal show={showModal} onClose={handleCloseModal}>
        <div className="relative flex flex-col h-full">
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex items-center space-x-4 p-4 border-b">
            <Image
              alt={`${name} logo`}
              src={src}
              width={75}
              height={75}
              className={learning ? "grayscale" : ""}
            />
            <p className="text-xl font-bold">{name}</p>
          </div>
          <div className="flex-grow overflow-y-auto p-4">
            <p className="mb-8">{description}</p>
            <p className="mb-4">{pointTitle}</p>
            <div>
              {Array.isArray(points) &&
                points.map((point, index) => (
                  <p key={index} className="ml-3 my-2 leading-5">
                    • {point.text}
                  </p>
                ))}
            </div>
          </div>
          <button
            onClick={handleCloseModal}
            className="w-full py-2 bg-blue-600 text-white text-center font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Close
          </button>
        </div>
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
