import React from 'react';

const SearchModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Prevent rendering if not open

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 isolate">
      <div className="bg-black rounded-lg shadow-lg p-6 w-[60vw] relative h-[90vh] z-30">
        <button
          onClick={onClose} // Close the modal when clicked
          className="text-xl hover:text-red-700 rounded-md z-30  text-white absolute top-2 right-2"
        >
          x
        </button>
        {children}
      </div>
    </div>
  );
};

export default SearchModal;
