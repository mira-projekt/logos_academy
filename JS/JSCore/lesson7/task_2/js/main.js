"use strict";
// Завдання 2:
// Необхідно реалізувати наступний функціонал як на відео keyboard, а саме:

// — потрібно створити вигляд клавіатури за допомогою html та css

// — за допомогою js та події клавіатури (keyboard event) необхідно добавляти текст який ми вводимо а також підсвічути клавіші які натискаємо

// — мова клавіатури тільки одна – англійська

// — клавіша tab – має робити табуляцію

// — клавіша caps lock – має робити текст в верхньому регістрі

// — клавіша enter – має переносити текст на новий рядок

// — клавіша backspace – має видаляти текст по одній букві

// — клавіші shift – мають робити текст у верхньому регістрі при утриманні даної клавіші

class virtualKeyboard {
	constructor() {
		this.capsOn = false;
		this.shiftOn = false;
		this.ctrlPressed = false;
		this.lang = "En";
		this.escaped = false;

		this.langKeysEn = {
			numbers: [
				["!", "1"],
				["@", "2"],
				["#", "3"],
				["$", "4"],
				["%", "5"],
				["^", "6"],
				["&", "7"],
				["*", "8"],
				["(", "9"],
				[")", "0"],
				["_", "-"],
				["+", "="],
			],
			0: [
				"q",
				"w",
				"e",
				"r",
				"t",
				"y",
				"u",
				"i",
				"o",
				"p",
				["{", "["],
				["}", "]"],
				["|", "\\"],
			],
			1: ["a", "s", "d", "f", "g", "h", "j", "k", "l", [":", ";"], ['"', "'"]],
			2: [
				"z",
				"x",
				"c",
				"v",
				"b",
				"n",
				"m",
				["<", ","],
				[">", "."],
				["?", "/"],
			],
		};

		this.screen = document.querySelector(".screen");
		this.keyboard = document.querySelector(".keyboard");
		this.keyRows = document.querySelectorAll(".key-row");
		this.anyKey = document.querySelectorAll(".key");
		this.esc = document.querySelector(".key__escape");
		this.langKey = document.querySelector(".key__lang");
		this.inputKeys = document.querySelectorAll(".key-input");
		this.letters = document.querySelectorAll(".key-letter");
		this.numbers = document.querySelectorAll(".key-number");
		this.extras = document.querySelectorAll(".key-extra");
		this.tildaKeyWrapper = document.querySelector(".key-tilda-wrapper");
		this.tildaKey = document.querySelector(".key-tilda");
		this.backspace = document.querySelector(".key__backspace");
		this.mutekey = document.querySelector(".key__mute");
		this.speakKey = document.querySelector(".key__speak");
		this.shiftkey = document.querySelectorAll('.key-special[data="shift"]');
		this.ctrlKeys = document.querySelectorAll(".ctrlKeys");
		this.capsKey = document.querySelector(".key__caps");
		this.arrows = document.querySelectorAll(".key-arrow");
		this.spacekey = document.querySelector(".key__space");
	}

	input(char) {
		if (this.ctrlPressed) {
			return;
		}

		let currentPositionStart = this.screen.selectionStart;
		let currentPositionEnd = this.screen.selectionEnd;

		if (currentPositionStart !== this.screen.value.length) {
			let valBefore = this.screen.value.substring(0, currentPositionStart);
			let valAfter = this.screen.value.substring(currentPositionEnd);
			valBefore += char;
			let result = valBefore + valAfter;
			this.screen.value = result;
			this.screen.setSelectionRange(valBefore.length, valBefore.length);
		} else {
			this.screen.value += char;
			addEventListener("mouseup", function () {});
		}
		this.screen.blur();
		this.screen.focus();
	}

	delete() {
		let currentPositionStart = this.screen.selectionStart;
		let currentPositionEnd = this.screen.selectionEnd;
		let valBefore;

		if (currentPositionStart !== this.screen.value.length) {
			if (currentPositionStart !== currentPositionEnd) {
				valBefore = this.screen.value.substring(0, currentPositionStart + 1);
			} else {
				valBefore = this.screen.value.substring(0, currentPositionStart);
			}
			let valAfter = this.screen.value.substring(currentPositionEnd);
			valBefore = valBefore.slice(0, valBefore.length - 1);
			let result = valBefore + valAfter;
			this.screen.value = result;
			keyboard.screen.setSelectionRange(valBefore.length, valBefore.length);
		} else {
			this.screen.value = this.screen.value.slice(
				0,
				this.screen.value.length - 1
			);
		}
	}

	shift() {
		this.numbers.forEach((elem) => {
			let temp = elem.querySelector(".first").innerText;
			elem.querySelector(".first").innerText =
				elem.querySelector(".second").innerText;
			elem.querySelector(".second").innerText = temp;
			elem.setAttribute("data", elem.querySelector(".second").innerText); // change num symbols
		});
		this.extras.forEach((extra) => {
			try {
				let temp = extra.querySelector(".first").innerText;
				extra.querySelector(".first").innerText =
					extra.querySelector(".second").innerText;
				extra.querySelector(".second").innerText = temp;
				extra.setAttribute("data", extra.querySelector(".second").innerText); // change num symbols
			} catch (e) {}
		});

		if (!this.shiftOn) {
			this.shiftOn = true;
			if (this.capsOn) {
				this.letters.forEach((elem) => {
					elem.innerText = elem.innerText.toLowerCase();
					elem.setAttribute("data", elem.innerText.toLowerCase());
				});
			} else {
				this.letters.forEach((elem) => {
					elem.innerText = elem.innerText.toUpperCase();
					elem.setAttribute("data", elem.innerText.toUpperCase());
				});
			}
			this.shiftkey.forEach(function (shift) {
				shift.classList.add("key__pressed");
				shift.parentElement.classList.add("key__active-grad");
			});
		} else {
			this.shiftOn = false;

			if (this.capsOn) {
				this.letters.forEach((elem) => {
					elem.innerText = elem.innerText.toUpperCase();
					elem.setAttribute("data", elem.innerText.toUpperCase());
				});
			} else {
				this.letters.forEach((elem) => {
					elem.innerText = elem.innerText.toLowerCase();
					elem.setAttribute("data", elem.innerText.toLowerCase());
				});
			}

			this.shiftkey.forEach(function (shift) {
				shift.classList.remove("key__pressed");
				shift.parentElement.classList.remove("key__active-grad");
			});
		}
	}

	caps() {
		if (!this.capsOn) {
			this.capsKey.classList.add("key__pressed");
			this.capsKey.parentElement.classList.add("key__active-grad");
			this.capsOn = true;

			if (!this.shiftOn) {
				this.letters.forEach((elem) => {
					elem.innerText = elem.innerText.toUpperCase();
					elem.setAttribute("data", elem.innerText.toUpperCase());
				});
			} else {
				this.letters.forEach((elem) => {
					elem.innerText = elem.innerText.toLowerCase();
					elem.setAttribute("data", elem.innerText.toLowerCase());
				});
			}
		} else {
			this.capsOn = false;
			this.capsKey.classList.remove("key__pressed");
			this.capsKey.parentElement.classList.remove("key__active-grad");
			if (!this.shiftOn) {
				this.letters.forEach((elem) => {
					elem.innerText = elem.innerText.toLowerCase();
					elem.setAttribute("data", elem.innerText.toLowerCase());
				});
			} else {
				this.letters.forEach((elem) => {
					elem.innerText = elem.innerText.toUpperCase();
					elem.setAttribute("data", elem.innerText.toUpperCase());
				});
			}
		}
	}
}

// create keyboard object
const keyboard = new virtualKeyboard();

keyboard.spacekey.addEventListener("mousedown", () => {
	keyboard.spacekey.classList.remove("key__space-free");
	keyboard.spacekey.classList.add("key__space-pressed");
});

keyboard.spacekey.addEventListener("mouseup", () => {
	keyboard.spacekey.classList.remove("key__space-pressed");
	keyboard.spacekey.classList.add("key__space-free");
});
keyboard.spacekey.addEventListener("mouseleave", () => {
	keyboard.spacekey.classList.remove("key__space-pressed");
	keyboard.spacekey.classList.add("key__space-free");
});

// all input keys event listener
keyboard.inputKeys.forEach((key) => {
	key.addEventListener("mousedown", function () {
		keyboard.input(key.getAttribute("data"), key);

		if (key.children.length > 0) {
			key.firstChild.classList.add("highlighted");
		} else {
			key.classList.add("highlighted");
		}
	});
	key.addEventListener("mouseup", function () {
		if (key.children.length > 0) {
			key.firstChild.classList.remove("highlighted");
		} else {
			key.classList.remove("highlighted");
		}
	});
	// key.addEventListener("mouseleave", function () {
	// 	if (key.children.length > 0) {
	// 		key.firstChild.classList.remove("highlighted");
	// 	} else {
	// 		key.classList.remove("highlighted");
	// 	}
	// 	keyboard.screen.focus();
	// });
});

// backspace delete button method
let mousedownID = 1; // set default mousedownID for repeatable delete method
let timeout = 1; // set default timeout
keyboard.backspace.addEventListener("mousedown", function () {
	keyboard.delete(); // delete first char
	keyboard.backspace.classList.remove("key__backspace-free");
	keyboard.backspace.classList.add("key__backspace-pressed");
	timeout = setTimeout(function () {
		// add .5s delay before starting repeatable removing
		if (mousedownID === 1) {
			// if backspace is pressed repeat delete method while mouseup
			mousedownID = setInterval(() => keyboard.delete(), 80);
		}
	}, 500);
});

function leaveDelete(e) {
	clearTimeout(timeout);
	clearInterval(mousedownID); // stop repeat delete method when mouseup
	mousedownID = 1; // set mousedownID to default
	timeout = 1;

	keyboard.backspace.classList.remove("key__backspace-pressed");
	keyboard.backspace.classList.add("key__backspace-free");
	keyboard.screen.focus();
}
keyboard.backspace.addEventListener("mouseup", leaveDelete);
keyboard.backspace.addEventListener("mouseleave", (e) => {
	leaveDelete(e);
});

// shift
keyboard.shiftkey.forEach((shift) => {
	shift.addEventListener("mousedown", function () {
		keyboard.shift();
	});
});

keyboard.shiftkey.forEach((shift) => {
	shift.addEventListener("mouseup", function () {
		keyboard.screen.focus();
	});
});

// caps
keyboard.capsKey.addEventListener("mousedown", function () {
	keyboard.caps();
});
keyboard.capsKey.addEventListener("mouseup", function () {
	keyboard.screen.focus();
});

function pressKey(selector) {
	document.querySelector(`.${selector}`).classList.add("highlighted");
}

function freeKey(selector) {
	document.querySelector(`.${selector}`).classList.remove("highlighted");
}

// physical keyboard keydown listener
let keyActive;
document.addEventListener("keydown", (e) => {
	if (e.code === "Space") {
		keyboard.spacekey.classList.remove("key__space-free");
		keyboard.spacekey.classList.add("key__space-pressed");
	}

	// backspace
	if (e.code === "Backspace") {
		document.querySelector(".backspace-wrapper").classList.add("hoverEffect");
	}

	// caps lock
	if (e.code === "CapsLock") {
		keyboard.caps();
	}

	if (e.code === "Backspace") {
		keyboard.backspace.classList.remove("key__backspace-free");
		keyboard.backspace.classList.add("key__backspace-pressed");
		keyboard.delete();
		return;
	}
	if (e.code === "ShiftLeft" || e.code === "ShiftRight") {
		keyboard.shift();
	}

	keyboard.inputKeys.forEach((key) => {
		if (e.code === key.getAttribute("key")) {
			keyActive = key;

			keyboard.input(key.getAttribute("data"), key);
			key.parentElement.classList.add("hoverEffect");
			if (key.children.length > 0) {
				key.firstChild.classList.add("highlighted");
			} else {
				key.classList.add("highlighted");
			}
		}
	});
});

// real keyboard keyup listener
document.addEventListener("keyup", (e) => {
	if (e.code === "Space") {
		keyboard.spacekey.classList.remove("key__space-pressed");
		keyboard.spacekey.classList.add("key__space-free");
	}

	// backspace keyup
	if (e.code === "Backspace") {
		document
			.querySelector(".backspace-wrapper")
			.classList.remove("hoverEffect");
		keyboard.backspace.classList.remove("key__backspace-pressed");
		keyboard.backspace.classList.add("key__backspace-free");
		return;
	}

	keyboard.inputKeys.forEach((key) => {
		if (e.code === key.getAttribute("key")) {
			key.parentElement.classList.remove("hoverEffect");

			if (key.children.length > 0) {
				key.firstChild.classList.remove("highlighted");
			} else {
				key.classList.remove("highlighted");
			}
		}
	});
});

keyboard.screen.focus(); // auto focus on text input onload
