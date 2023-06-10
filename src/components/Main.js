import React from "react";
import Card from "./Card";
import { api } from "../utils/api";

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
	const [userName, setUserName] = React.useState("");
	const [userDescription, setUserDescription] = React.useState("");
	const [userAvatar, setUserAvatar] = React.useState("");
	const [cards, setCards] = React.useState([]);

	React.useEffect(() => {
		Promise.all([api.getUserInfo(), api.getInitialCards()])
			.then(([user, card]) => {
				setUserName(user.name);
				setUserDescription(user.about);
				setUserAvatar(user.avatar);
				setCards(card);
			})
			.catch((err) => alert(err));
	}, []);

	return (

		<main className="content">
			<section className="profile">
				<div className="profile__card">
					<img className="profile__avatar" src={userAvatar} alt="Аватар пользователя" />
					<button className="profile__avatar-btn" onClick={onEditAvatar}></button>
					<div className="profile__info">
						<h1 className="profile__name">{userName}</h1>
						<button className="profile__edit-btn" type="button" onClick={onEditProfile}></button>
						<p className="profile__sign">{userDescription}</p>
					</div>
				</div>
				<button className="profile__add-photo-btn" onClick={onAddPlace} type="button"></button>
			</section>

			<section className="elements">
				<ul className="elements__list">
					{cards.map((card) => (
						<Card card={card} onCardClick={onCardClick} key={card._id} />
					))}
				</ul>
			</section>
		</main>
	)
}