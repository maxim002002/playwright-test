//@ts-ignore
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../../components/Button/Button";
import Modal from "../../Modal";
import { AuthForm } from "../../Form/AuthForm/AuthForm";
import { toggleModalState, getModalState } from "../../redux/slices/ModalState";
import "../../__reset.scss";

export default function Home() {
  const dispatch = useDispatch();

  const isOpen = useSelector(getModalState);
  const toggleAuthModal = useCallback(() => {
    dispatch(toggleModalState());
  }, []);

  return (
    <>
      <Modal
        id="modal-auth"
        isOpen={isOpen}
        toggleOpen={toggleAuthModal}
        title="Авторизация"
      >
        <AuthForm />
      </Modal>
      <Button
        text="Авторизоваться"
        name="primary"
        onClick={toggleAuthModal}
        type={"button"}
        id="authBtn"
        dataTestId="buttonOpen-authModal"
      />
      <div>
        <h2>для авторизации</h2>
        <p>admin@gmail.com</p>
        <p>12345</p>
      </div>
    </>
  );
}
