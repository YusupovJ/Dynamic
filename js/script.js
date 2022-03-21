const row = document.querySelectorAll(".sheet__row");

if (row.length > 0) {
	row.forEach((el) => {
		el.addEventListener("click", (e) => {
			if (e.target.closest(".sheet__buttons")) {
				const element = e.target;
				// текущий индекс
				let elementActiveIndex = element.classList[element.classList.length - 1].split("").pop();

				// получаем текущие поля ввода
				const nameElement = document.querySelector(`.sheet__name_${elementActiveIndex}`);
				const surnameElement = document.querySelector(`.sheet__surname_${elementActiveIndex}`);
				// если мы нажали на кнопку сохранения
				if (e.target.closest(".sheet__btn_save")) {
					if (nameElement.querySelector("input") && surnameElement.querySelector("input")) {
						// значения полей ввода
						const nameValue = nameElement.querySelector("input").value;
						const surnameValue = surnameElement.querySelector("input").value;

						// текст который будем добавлять
						const innerNameText = `<p class="sheet__text">${nameValue}</p>`;
						const innerSurnameText = `<p class="sheet__text">${surnameValue}</p>`;

						// удаляем поля ввода
						nameElement.querySelector("input").remove();
						surnameElement.querySelector("input").remove();

						// добавляем текст
						nameElement.innerHTML = innerNameText;
						surnameElement.innerHTML = innerSurnameText;
					}

					document.querySelector(`.sheet__row_${elementActiveIndex}`).classList.add("saved");

					// если нажали на кнопку очищения
				} else if (e.target.closest(".sheet__btn_reset")) {
					// получаем текущую кнопку
					const resetText = document.querySelectorAll(`.sheet__row_${elementActiveIndex} .sheet__text`);
					// очищаем текст
					resetText.forEach((element) => {
						element.innerHTML = "";
					});
					// если нажали на кнопку изменить
				} else if (e.target.closest(".sheet__btn_edit")) {
					// получаем текущую кнопку
					const editActiveButton = document.querySelector(`.sheet__btn_edit_${elementActiveIndex}`);

					// получаем текст
					const nameValue = editActiveButton.closest(".sheet__row").querySelector(".sheet__name .sheet__text").innerHTML;
					const surnameValue = editActiveButton.closest(".sheet__row").querySelector(".sheet__surname .sheet__text").innerHTML;

					// добавляем текст
					nameElement.innerHTML = `<input type="text" value="${nameValue}">`;
					surnameElement.innerHTML = `<input type="text" value="${surnameValue}">`;

					document.querySelector(`.sheet__row_${elementActiveIndex}`).classList.remove("saved");
				}
			}
		});
	});
}
