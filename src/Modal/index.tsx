//ts-ignore
import React, { useCallback, FC, useRef } from "react";
import { CreateModal } from "./CreateModal";
import useKeyDown from "../hooks/useKeyDown";
import useClickOutside from "../hooks/useClickOutside";
import classnames from "classnames";
import style from "./Modal.module.scss";
import closeBtn from "../assets/svg/closeBtn.svg";

interface IModalProps {
  isOpen: boolean;
  toggleOpen: VoidFunction;
  title: string;
  children: React.ReactNode;
  id: string;
}

const Modal: FC<IModalProps> = ({
  isOpen,
  toggleOpen,
  title,
  children,
  id,
}) => {
  const formRef = useRef<HTMLDivElement>(null);

  const handleClickClose = useCallback(() => {
    isOpen && toggleOpen();
  }, [isOpen, toggleOpen]);

  useKeyDown(["Escape"], handleClickClose);
  useClickOutside(formRef, handleClickClose);

  return isOpen ? (
    <CreateModal id={id}>
      <div
        className={classnames(style.formContainer, {
          [style.CloseBackground]: isOpen,
        })}
        data-testid="modal-background"
      >
        <div
          ref={formRef}
          className={classnames(style.FormBox, {
            [style.FormBoxClose]: isOpen,
          })}
        >
          <div className={style.authForm}>
            <h3>{title}</h3>
            {children}
          </div>
          <button onClick={handleClickClose}>
            <img
              className={style.closeBtn}
              src={closeBtn}
              alt="close button"
              data-testid="buttonClose-authModal"
            />
          </button>
        </div>
      </div>
    </CreateModal>
  ) : null;
};

export default Modal;
