import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-background p-6 rounded-lg max-w-2xl w-full m-4">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-foreground">
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
