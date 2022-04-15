const rows = document.querySelectorAll(".table__row");

if (rows.length > 0) {
	for (let i = 0; i < rows.length; i++) {
		const row = rows[i];
		const buttons = row.querySelectorAll(".table__button");
		const inputs = row.getElementsByClassName("table__input");

		let buttonTypes = {
			save: row.querySelector(".table__button_save"),
			reset: row.querySelector(".table__button_reset"),
			edit: row.querySelector(".table__button_edit"),
		};

		buttons.forEach((button) => {
			button.addEventListener("click", (e) => {
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
			for (let i = 0; i < inputs.length; i++) {
				const input = inputs[i];

				let inputValue = input.value;
				if (inputValue && !input.classList.contains("saved")) {
					const text = `<i class="${input.className}">${inputValue}</i>`;
					input.outerHTML = text;
					row.classList.add("saved");
				}
			}
		}
		function reset() {
			for (let i = 0; i < inputs.length; i++) {
				const input = inputs[i];
				input.value = "";
				input.innerHTML = "";
			}
		}
		function edit() {
			if (row.classList.contains("saved")) {
				for (let i = 0; i < inputs.length; i++) {
					const input = inputs[i];
					let inputValue = input.innerHTML;
					const text = `<input autocomplete="off" class="${input.className}" type="text" value="${inputValue}">`;
					input.outerHTML = text;
					row.classList.remove("saved");
				}
			}
		}
	}
}
