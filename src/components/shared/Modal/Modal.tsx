import { PropsWithChildren } from "react";
import { Button } from "../Button/Button";
import cs from "classnames";

interface ModalProps {
  open: boolean;
  hideFooter?: boolean;
  title?: string;
  onClose?: () => void;
  onConfirm?: () => void;
}

export default function Modal(props: PropsWithChildren<ModalProps>) {
  const { open, hideFooter, title, children, onClose, onConfirm } = props;

  return (
    <div
      className={cs({
        "Modal fixed flex flex-wrap items-center justify-center my-0 mx-auto top-0  left-0 w-full h-screen z-[100] overflow-x-hidden bg-[#1f2029bf] pointer-events-none opacity-0":
          true,
        "opacity-100 pointer-events-auto": open,
      })}
    >
      <div
        className={cs({
          "relative block overflow-y-auto w-[700px] m-h-[500px] m-w-[700px] rounded-[4px] p-4 bg-white self-center shadow-lg opacity-0":
            true,
          "opacity-100": open,
        })}
      >
        <div className="flex items-center justify-between mb-5">
          <h3>{title}</h3>
          <Button onClick={onClose} className="Modal__close btn-danger">
            X
          </Button>
        </div>

        <div className="pb-[40px]">{children}</div>
        {!hideFooter && (
          <div className="absolute flex bg-white bottom-4">
            <Button onClick={onConfirm} className="mr-[15px] btn-success">
              Confirm
            </Button>
            <Button onClick={onClose} className="btn-danger">
              Cancel
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
