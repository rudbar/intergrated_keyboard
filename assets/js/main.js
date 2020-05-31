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

		},

		_createKeys() {
			
		}
};