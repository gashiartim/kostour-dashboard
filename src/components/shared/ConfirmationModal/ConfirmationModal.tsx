import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ConfirmationData } from "../../../types";
import Modal from "../Modal/Modal";

export interface ConfirmationModalProps {
  showCloseButton?: boolean;
  confirmationData: ConfirmationData;
}

export default function ConfirmationModal(props: ConfirmationModalProps) {
  const {
    confirmationData: {
      text,
      description,
      isOpen,
      onCancel,
      onConfirm,
      customComponent,
    },
  } = props;

  const { pathname } = useLocation();
  useEffect(() => {
    cancel();
  }, [pathname]);

  const confirm = () => {
    onConfirm?.();
  };

  const cancel = () => {
    onCancel?.();
  };

  const renderCustomComponent = () => {
    const {
      confirmationData: { customComponent, ...rest },
    } = props;

    return customComponent?.(rest);
  };

  return (
    <Modal open={isOpen} onClose={cancel} onConfirm={confirm}>
      {customComponent ? (
        renderCustomComponent()
      ) : (
        <div className="text-center">
          <h2 className="mb-[20px]">{text}</h2>
          <p className="mb-[20px]">{description}</p>
        </div>
      )}
    </Modal>
  );
}
