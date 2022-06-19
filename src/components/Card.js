function Card(props) {
  const { card, onCardClick } = props;
  const handleCardClick = () => {
    onCardClick(card);
  };
  return (
    <li className="card">
      <img
        src={card.link}
        alt={card.name}
        className="card__image"
        onClick={handleCardClick}
      />
      <div className="card__description">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like">
          <button
            className="card__like-button"
            aria-label="Мне нравится"
          ></button>
          <span className="card__like-counter">{card.likes.length}</span>
        </div>
      </div>
      <button className="card__trash" aria-label="Удаление карточки"></button>
    </li>
  );
}
export default Card;
