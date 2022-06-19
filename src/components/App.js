import { useState } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  };
  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  };

  return (
    <div className="page">
      <Header />
      <Main
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        submitBtnText="Сохранить"
        isOpened={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="name-input"
          name="name"
          type="text"
          className="popup__input popup__name"
          minLength="2"
          maxLength="40"
          required
          placeholder="Имя"
        />
        <span className="name-input-error popup__error"></span>
        <input
          id="job-input"
          name="about"
          type="text"
          className="popup__input popup__job"
          minLength="2"
          maxLength="200"
          required
          placeholder="О себе"
        />
        <span className="job-input-error popup__error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="add"
        title="Новое место"
        submitBtnText="Создать"
        isOpened={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="image-title-input"
          name="name"
          type="text"
          className="popup__input"
          minLength="2"
          maxLength="30"
          required
          placeholder="Название"
        />
        <span className="image-title-input-error popup__error"></span>
        <input
          id="image-link-input"
          name="link"
          type="url"
          className="popup__input"
          required
          placeholder="Ссылка на картинку"
        />
        <span className="image-link-input-error popup__error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        submitBtnText="Да"
      ></PopupWithForm>
      <PopupWithForm
        name="update-avatar"
        title="Обновить аватар"
        submitBtnText="Сохранить"
        isOpened={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="avatar-link-input"
          name="avatar_link"
          type="url"
          className="popup__input"
          required
          placeholder="Ссылка на аватар"
        />
        <span className="avatar-link-input-error popup__error"></span>
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        isOpened={isImagePopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
