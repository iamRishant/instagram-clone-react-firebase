import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Prevent rendering if not open

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-black rounded-lg shadow-lg p-6 w-[60vw] relative h-[90vh] ">
        <button
          onClick={onClose} // Close the modal when clicked
          className="text-xl hover:text-red-700 rounded-md  text-white absolute top-2 right-2"
        >
          x
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
