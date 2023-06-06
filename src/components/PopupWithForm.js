import React from "react";

export default function PopupWithForm({ title, name, children }) {
	return (
		<div className={`popup popup_${name}`} >
			<form
				className="popup__container"
				autoComplete="off"
				name={`form-${name}`}
			>
				<button type="button" className="popup__close button"></button>
				<h2 className="popup__title">{title}</h2>
				<span className={`input-${name}-error input-error`}></span>
				{children}
				<button className="popup__submit">Сохранить</button>
			</form>
		</div>
	)
}