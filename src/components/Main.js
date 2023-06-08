import React from "react";
import Card from "./Card";
import { api } from "./Api";

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
	const [userName, setUserName] = React.useState("");
	const [userDescription, setUserDescription] = React.useState("");
	const [userAvatar, setUserAvatar] = React.useState("");
	const [cards, setCards] = React.useState([]);

	React.useEffect(() => {
		Promise.all([api.getUserInfoApi(), api.getInitialCards()])
			.then(([user, card]) => {
				setUserName(user.name);
				setUserDescription(user.about);
				setUserAvatar(user.avatar);
				setCards(card);
				console.log(card)
			})
			.catch((err) => alert(err));
	}, []);

	return (

		<main className="main">
			<section className="profile" aria-label="Информация о пользователе">
				<div className="avatar" onClick={onEditAvatar}>
					<img src={userAvatar} alt="Фото пользователя"
						className="profile__avatar" />
				</div>

				<div className="profile__card">
					<div className="profile__title">
						<h1 className="profile__name">{userName}</h1>
						<button type="button" className="profile__edit-btn" onClick={onEditProfile}></button>
					</div>
					<p className="profile__sign">{userDescription}</p>
				</div>
				<button type="button" className="profile__edit-btn" onClick={onAddPlace}></button>
			</section>

			<section className="elements">
				<ul className="elements__list">
					{cards.map((card) => (
						<Card card={card} onCardClick={onCardClick} key={card._id} />  //проверить card/elem
					))}
				</ul>
			</section>
		</main>
	)
}