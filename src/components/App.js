import React from 'react';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import PopupImage from './PopupWithImage';


function App() {
  return (
    <body class="body-root">
      <Header />
      <Main />
      <Footer />
      <PopupWithForm />
      <ImagePopup />


      <div class="popup popup_edit_profile">
        <div class="popup__container">
          <button class="popup__close popup__close_profile" type="button"></button>
          <h2 class="popup__name">Редактировать профиль</h2>
          <form class="popup__form popup__form_profile" name="form-profile" autocomplete="off" novalidate>
            <input id="input-name" class="popup__item popup__item_type_name" name="name" minlength="2"
              maxlength="40" required placeholder="Имя" value="Иван Иванов" type="text" />
            <span class="input-name-error input-error"></span>

            <input id="input-description" class="popup__item popup__item_type_sign" name="description" minlength="2"
              maxlength="200" required placeholder="Вид деятельности" value="Путешественник по миру" type="text" />
            <span class="input-error input-description-error"></span>
            <button class="popup__submit" type="submit">Сохранить</button>
          </form>
        </div>
      </div>


      <div class="popup popup_type_add-card">
        <div class="popup__container">
          <button class="popup__close popup__close_card" type="button" aria-label="Close"></button>
          <h2 class="popup__name">Новое место</h2>
          <form class="popup__form popup__form_card" name="form-card" autocomplete="off" novalidate>
            <input id="input-place" class="popup__item popup__item_palce_name" name="place" type="text"
              placeholder="Название" required minlength="2" maxlength="30" />
            <span class="input-error input-place-error"></span>

            <input id="input-link" class="popup__item popup__item_place_link" name="link" type="url"
              placeholder="Ссылка на картинку" required />
            <span class="input-error input-link-error"></span>
            <button class="popup__submit" type="submit">Создать</button>
          </form>
        </div>
      </div>


      <div class="popup popup_avatar">
        <div class="popup__container">
          <button class="popup__close" type="button"></button>
          <h2 class="popup__name">Обновить аватар</h2>
          <form class="popup__form popup__form_avatar" autocomplete="off" name="form-avatar">
            <input id="input-avatar" class="popup__item popup__item_avatar" minlength="2" required
              placeholder=" Введите ссылку на изображение" type='url' name="avatar" />
            <span class="input-error input-avatar-error"></span>
            <button class="popup__submit" type="submit">Сохранить</button>
          </form>
        </div>
      </div>


      <div class="popup popup_delete">
        <div class="popup__container">
          <button class="popup__close" type="button"></button>
          <h2 class="popup__name">Вы уверены?</h2>
          <form class="popup__form popup__form_delete" autocomplete="off" name="form-delete">
            <button class="popup__submit" type="submit">Да</button>
          </form>
        </div>
      </div>


    </body>
  );
}

export default App;