import { IoClose } from "react-icons/io5";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-neutral-950 p-6 rounded-lg shadow-lg w-72  relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-xl">
          <IoClose className="dark:text-white" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
