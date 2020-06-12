const Keyboard = {
		elements: {
			main: null, // это элемент всей клавиатуры в целос
			keysContainer: null, // контейнер для кнопок
			keys: [] // массив для кнопок
		},

		eventHandlers: {
			oninput: null, // событие при нажатии кнопок на клавиатуре
			onclose: null // событие при закрытии клавиатуры
		},

		properties: {
			value: "", // текущее значение, т.е. какая кнопка нажата
			capsLock: false // нажат капслок или нет
		},

		init() {
			// Создаем основные элементы для клавиатуры
			this.elements.main = document.createElement("div");
			this.elements.keysContainer = document.createElement("div");

			// Добавление атрибутов и кнопок
			this.elements.main.classList.add("keyboard", "1keyboard--hidden");
			this.elements.keysContainer.classList.add("keyboard__keys");

			// Добавляем созданные элементы в DOM
			this.elements.main.appendChild(this.elements.keysContainer);
			document.body.appendChild(this.elements.main);
		},

		_createKeys() {
			
			const fragment = document.createDocumentFragment();
			const keyLayout = [
				"1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
				"q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
				"caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
				"done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
				"space"
			];

			// Функция для создания иконки
			const createIconHTML = (icon_name) => {
				return '<i class="material-icons">${icon_name}</i>';
			};

			keyLayout.forEach(key => {
				const keyElement = document.createElement("button");
				const insertLineBreak = ["backspace", "p", "enter", "?"].indexOf(key) !== -1;

				// Прикрепляем классы и атрибуты к дивам
				keyElement.setAttribute("type", "button");
				keyElement.classList.add("keyboard__key");

				switch(key) {
					case "backspace":
					keyElement.classList.add("keyboard__key--wide");
					keyElement.innerHTML = createIconHTML("backspace");
				}
			});

		},

		_triggerEvent(handlerName) {
			console.log("Произошло событие: " + handlerName);
		},

		_toggleCapsLock() {
			console.log("Нажат Caps Lock!");
		},

		open(initialValue, oninput, onclose) {

		},

		close() {

		}
};

window.addEventListener("DOMContentLoaded", function() {
	Keyboard.init();
});