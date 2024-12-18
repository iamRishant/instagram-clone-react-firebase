import React from 'react'

const CreatePostModal = ({ isOpen, onClose, children }) => {

    if(!isOpen) return null;
  return (
    <div className="fixed inset-0 z-30 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-black rounded-lg shadow-lg p-6 w-[30vw] relative min-h-[50vh] flex items-center justify-center ">
        <button
          onClick={onClose} // Close the modal when clicked
          className="text-xl hover:text-red-700 rounded-md  text-white absolute top-2 right-2"
        >
          x
        </button>
        {children}
      </div>
    </div>
  )
}

export default CreatePostModal
