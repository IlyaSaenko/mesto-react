import React from "react";

export default function Card({ card, onCardClick }) {
  const handleCardClick = () => onCardClick(card);

    return (
    <template id="elements-add">
    <li className="elements__item">
      <img
        src={card.link}
        alt={card.name}
        className="elements__image"
        onClick={handleCardClick}
      />
      <button type="button" className="elements__delete"></button>
      <div className="elements__bottom">
        <h2 className="elements__place">{card.name}</h2>
        <div className="elements__likes">
          <button type="button" className="elements__like"></button>
          <span className="elements__likes-quantity">{card.likes.length}</span>
        </div>
      </div>
    </li>
    </template>
  );
}