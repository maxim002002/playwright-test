// @ts-ignore
import { useCallback } from "react";
import { Button } from "../../components/Button/Button";
import { TestButtonOnPage } from "../../components/Button/tests/helpers/TestButtonOnPage";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { toggleUserLogin } from "../../redux/slices/UserState";

export default function DashBoard() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogout = useCallback(async () => {
    dispatch(toggleUserLogin());
    navigate("/");
  }, [dispatch, toggleUserLogin, navigate]);

  return (
    <>
      <div>
        <h1>У вас есть доступ на сайт</h1>
        <Button name="default" text="Выйти" onClick={() => handleLogout()} />
      </div>
      <div>
        <h2>Варианты кнопок покрытые тестами</h2>
        <TestButtonOnPage />
      </div>
    </>
  );
}
