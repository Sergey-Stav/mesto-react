import { useState, useEffect } from "react";
import { api } from "../utils/api.js";
import Card from "./Card.js";

function Main(props) {
  const { onEditProfile, onAddPlace, onEditAvatar, onCardClick } = props;
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    api
      .getCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile page__profile">
        <div className="profile__info">
          <div className="profile__container-avatar">
            <img src={userAvatar} alt="Аватар" className="profile__avatar" />
            <button
              onClick={onEditAvatar}
              className="profile__avatar-button-edit"
              aria-label="открыть форму обновления аватара профиля"
            ></button>
          </div>
          <h1 className="profile__title">{userName}</h1>
          <p className="profile__subtitle">{userDescription}</p>
          <button
            onClick={onEditProfile}
            className="profile__button-edit opacity"
            aria-label="Редактировать"
          ></button>
        </div>
        <button
          onClick={onAddPlace}
          className="profile__button-add-elements opacity"
          aria-label="Добавить"
        ></button>
      </section>
      <div className="elements page__elements">
        <ul className="cards">
          {cards.map((item) => {
            return (
              <Card key={item._id} card={item} onCardClick={onCardClick} />
            );
          })}
        </ul>
      </div>
    </main>
  );
}

export default Main;
