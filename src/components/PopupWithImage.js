import React from "react";

export default function PopupWithImage() {
  return (
    <div class= {`popup popup_picture ${card ? "popup_opened" : ""}`}>
        <div class="popup__container-card">
            <button class="popup__close popup__close_photo" type="button" aria-label="Close" onClick={onClose}></button>
            <img class="popup__image-card" src={card ? card.link : ''} alt={card ? card.name : ''}  />
            <h2 class="popup__title-card">{card ? card.name: ''}</h2>
        </div>
    </div>
  )
}