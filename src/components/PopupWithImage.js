import React from "react";

export default function PopupWithImage() {
  return (
    <div class="popup popup_photo_card">
        <div class="popup__container-card">
            <button class="popup__close popup__close_photo" type="button" aria-label="Close"></button>
            <img class="popup__image-card" alt="" src="#" />
            <h2 class="popup__title-card"></h2>
        </div>
    </div>
  )
}