// Получаем ряды
const rows = document.querySelectorAll(".table__row");

// Если есть ряды то перебираем циклом
if (rows.length > 0) {
	for (let i = 0; i < rows.length; i++) {
		const row = rows[i];

		// Получаем кнопки и поля ввода
		const buttons = row.querySelectorAll(".table__button");
		const inputs = row.getElementsByClassName("table__input");

		// Получаем типы кнопок
		let buttonTypes = {
			save: row.querySelector(".table__button_save"),
			reset: row.querySelector(".table__button_reset"),
			edit: row.querySelector(".table__button_edit"),
		};

		// Перебираем кнопки и навешиваем на них событие
		buttons.forEach((button) => {
			button.addEventListener("click", (e) => {
				// Если ближайший родитель равняеться данному классу, то выполняем фунцию
				if (e.target.closest("." + buttonTypes.save.classList[1])) {
					save();
				} else if (e.target.closest("." + buttonTypes.reset.classList[1])) {
					reset();
				} else if (e.target.closest("." + buttonTypes.edit.classList[1])) {
					edit();
				}
				e.preventDefault();
			});
		});

		function save() {
			// Перебираем массив с инпутами
			for (let i = 0; i < inputs.length; i++) {
				const input = inputs[i];

				// Получаем значения
				let inputValue = input.value;

				// Если в инпуте есть значение и ряд не содержит класс saved
				if (inputValue) {
					// Заменяем элемент
					const text = `<i class="${input.className}">${inputValue}</i>`;
					input.outerHTML = text;
					// Добавляем класс в ряд
					row.classList.add("saved");
				}
			}
		}

		// Удаляем значения
		function reset() {
			for (let i = 0; i < inputs.length; i++) {
				const input = inputs[i];
				input.value = "";
				input.innerHTML = "";
			}
		}
		function edit() {
			// Работаем если инпуты сохранены
			if (row.classList.contains("saved")) {
				for (let i = 0; i < inputs.length; i++) {
					const input = inputs[i];
					// Получаем значение из элемента
					let inputValue = input.innerHTML;
					// Заменяем элемент
					const text = `<input autocomplete="off" class="${input.className}" type="text" value="${inputValue}">`;
					input.outerHTML = text;
					// Удаляем класс
					row.classList.remove("saved");
				}
			}
		}
	}
}
