import { useState } from "react";
import "./Chat.scss";
import { IconsMap } from "./IconsMap";

export const Chat = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  return (
    <button
      className={isOpen ? "btn btn__chatbot chatbot-open" : "btn btn__chatbot"}
      onClick={() => setIsOpen((prev) => prev)}
    >
      <div
        className="chatbot__icons"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {IconsMap["icon2"]}
        {IconsMap["icon1"]}
      </div>
      <div className="chatbot__container">
        <header className="chatbot__header">
          <div className="chatbot__avatar">
            {IconsMap["avatar"]}
            <span>
              <div className="chatbot__online"></div>
            </span>
          </div>
          <div className="chatbot__titles">
            <div className="chatbot__title">Камила</div>
            <div className="chatbot__status">
              <span></span>
              Online
            </div>
          </div>
          <div
            className="chatbot__dots"
            onClick={() => setIsOpenSettings((prev) => !prev)}
          >
            {IconsMap["dots"]}
            <ul
              className={
                !isOpenSettings
                  ? "chatbot__settings"
                  : "chatbot__settings settings__open"
              }
            >
              <li className="chatbot__setting--item">Manager</li>
              <li className="chatbot__setting--item">Report</li>
            </ul>
          </div>
        </header>
        <ul class="chatbot__bubble-list">
          <div className="chatbot__background">
            {IconsMap["chatBackground"]}
          </div>
          <li class="chatbot__msg msg-left">
            <div class="msg__avatar">{IconsMap["avatar"]}</div>
            <div class="msg__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              eos id quasi voluptatum nemo obcaecati laborum quae enim
            </div>
          </li>
          <li class="chatbot__msg msg-right">
            <div class="msg__avatar">{IconsMap["avatar"]}</div>
            <div class="msg__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              eos id quasi voluptatum nemo obcaecati laborum quae enim
            </div>
          </li>
        </ul>
        {/* <ul class="chatbot__chat-list">
          <div className="chatbot__background">
            {IconsMap["chatBackground"]}
          </div>
          <li class="chatbot__chat-item">
            <div class="chat-item__wrapper">
              <div class="chat-item__avatar">{IconsMap["avatar"]}</div>
              <div class="chat-item__info">
                <div class="chat-item__title">
                  <div class="chat-item__name">
                    Gendolf Barabashkasssssssssss ssssssssss
                  </div>
                  <div class="chat-item__date">21.12.2021 21:22:31 </div>
                </div>
                <div class="chat-item__text">
                  If performance is also important to you, go for a smartp
                  sadasd
                </div>
              </div>
            </div>
          </li>
          <li class="chatbot__chat-item">
            <div class="chat-item__wrapper">
              <div class="chat-item__avatar">{IconsMap["avatar"]}</div>
              <div class="chat-item__info">
                <div class="chat-item__title">
                  <div class="chat-item__name">
                    Iendolf Barabashkasssssssssss ssssssssss
                  </div>
                  <div class="chat-item__date">21.12.2021 21:22:31 </div>
                </div>
                <div class="chat-item__text">
                  If performance is also important to you, go for a smartp
                  sadasd
                </div>
              </div>
            </div>
          </li>
        </ul> */}
        <footer className="chatbot__footer">
          {/* Здесь разместите поле ввода и кнопку отправки или форму регистрации */}
          <input
            className="chatbot__input"
            type="text"
            placeholder="Enter a message..."
          />
          <button className="chatbot__input-send" type="button">
            {IconsMap["arrowSend"]}
          </button>
        </footer>
      </div>
    </button>
  );
};
