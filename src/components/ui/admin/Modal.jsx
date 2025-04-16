import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router';

const Modal = ({
  isOpen,
  onClose,
  title = 'Modal Title',
  content = null,
  proceedText = 'Proceed',
  proceedHref = '',
}) => {
  if (!isOpen) return null;

  return (
    <div id="modal">
      <div className="overlay bg-black/40 fixed top-0 left-0 right-0 bottom-0 z-50" onClick={onClose}></div>

      <div className="bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 p-5 
      flex flex-col gap-5 rounded-md w-full max-w-[300px]">
        <header className="flex items-center justify-between">
          <h1 className="font-bold">{title}</h1>

          <button onClick={onClose}>
            <IoClose className="font-semibold text-xl text-gray-600" />
          </button>
        </header>

        <div className="text-sm">{content}</div>

        <div className="flex items-center text-sm self-end gap-3 text-white">
          <button
            onClick={onClose}
            className="py-1 px-3 bg-gray-500 rounded-md border-transparent active:border-2 focus:border-gray-300"
          >
            Close
          </button>

          <Link to={proceedHref}
            className="py-1 px-3 bg-forest rounded-md active:border-forest-hover active:border-2"
          >
            {proceedText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
