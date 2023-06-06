import React from "react";
import avatar__link from "../images/man.jpg";

export default function Main() {
	return (

		<main className="main">
			<section className="profile" aria-label="Информация о пользователе.">
				<div className="avatar">
					<img src={avatar__link} alt="Фото пользователя."
						className="avatar__img" />
				</div>

				<div className="profile__card">
					<div className="profile__title">
						<h1 className="profile__name">Иван Иванов</h1>
						<button type="button" className="profile__edit-btn"></button>
					</div>
					<p className="profile__sign">Путешественник</p>
				</div>
				<button type="button" className="profile__edit-btn"></button>
			</section>

			<section class="elements">
				<ul class="elements__list">
					<template id="elements-add">
						<li class="elements__item">
							<button class="elements__delete" type="button"></button>
							<img class="elements__image" src="#" />
							<div class="elements__bottom">
								<h3 class="elements__place"></h3>
								<div class="elements__likes">
									<button class="elements__like" type="button" aria-label="like"></button>
									<span class="elements__likes-quantity"></span>
								</div>
							</div>
						</li>
					</template>
				</ul>
			</section>
		</main>
	)
}