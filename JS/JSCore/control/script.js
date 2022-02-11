"use strict";

// Basic functions

const getS = selector => document.querySelector(selector);

const hide = node => node.classList.add("hidden");

const show = node => node.classList.remove("hidden");


// DOM nodes collection

// static nodes
let startBlock = getS(".container__start"),
	styleBlock = getS(".style"),
	editorBlock = getS(".editor"),
	buttonsBlock = getS(".buttons"),
	addBlock = getS(".add"),
	addTableSubBlock = getS(".add__table"),
	addListSubBlock = getS(".add__list"),
	areaEditor = getS(".editor textarea"),
	$display = getS(".display"),
	colorBox = getS(".style__form--color-box"),
	
  // buttons

	editBtn = getS(".buttons__edit"),
	saveBtn = getS(".editor__buttons--save"),
	styleBtn = getS(".buttons__style"),
	textColorBtn = getS(".style__form--color-font_btn"),
	bgColorBtn = getS(".style__form--color-background_btn"),
	addBtn = getS(".editor__buttons--add"),
	createTableBtn = getS(".add__table--create-btn"),
	createListBtn = getS(".add__list--create-btn"),

  // Forms accesebility

	fontSizeRadio = document.forms.styleForm["style__form--radio"],
	fontFamilySelect = document.forms.styleForm["style__form--select"],
	boldCheckBox = document.forms.styleForm["style__form--checkbox-bold"],
	italicCheckBox = document.forms.styleForm["style__form--checkbox-italic"],
	addRadio = document.forms.addForm["add__form--radio"],
	tableForm = document.forms["add__table--form"],
	tableTr = document.forms["add__table--form"].tr,
	tableTd = document.forms["add__table--form"].td,
	tdWidth = document.forms["add__table--form"]["add__table--form-td_width"],
	tdHeight = document.forms["add__table--form"]["add__table--form-td_height"],
	tdBorderWidth =
		document.forms["add__table--form"]["add__table--form-td_border-width"],
	tdBorderType =
		document.forms["add__table--form"]["add__table--form-td_border-type"],
	tdBorderColor =
		document.forms["add__table--form"]["add__table--form-td_border-color"],
	listForm = document.forms["add__list--form"],
	liCount = document.forms["add__list--form"]["add__list--form-li_count"],
	listMarkType =
		document.forms["add__list--form"]["add__list--form-li_marks-type"];

/* DOM interaction methods,
creating node,
adding class,
adding styles */

const dom = (function () {
	function createNode(tag, className) {
		const $el = document.createElement(tag);
		if (className) {
			$el.classList.add(className);
		}
		return $el;
	}

	function injectNode($el, root) {
		root.append($el);
	}

	function randomColor() {
		const hash = "0123456789ABCDEF";
		let color = "#";
		for (let i = 0; i < 6; i++) {
			color += hash[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	function setStyle($el, styleType, value) {
		$el.style[`${styleType}`] = value;
	}

	return {
		createElement: createNode,
		injectElement: injectNode,
		getColor: randomColor,
		setStyle: setStyle,
	};
})();

// Events collection

function events() {
	editBtn.addEventListener("click", () => {
		if (!styleBlock.classList.contains("hidden")) {
			hide(styleBlock);
		}
		if (!colorBox.classList.contains("hidden")) {
			hide(colorBox);
		}
		show(editorBlock);
		hide(startBlock);
		areaEditor.value = $display.innerHTML;
	});

	saveBtn.addEventListener("click", () => {
		hide(editorBlock);
		show(startBlock);
		$display.innerHTML = areaEditor.value;
	});

	styleBtn.addEventListener("click", () => {
		if (!editorBlock.classList.contains("hidden")) {
			hide(editorBlock);
		}
		hide(startBlock);
		show(styleBlock);
	});

  // fontSize

	for (let i = 0; i < fontSizeRadio.length; i++) {
		fontSizeRadio[i].addEventListener("click", (e) => {
			dom.setStyle($display, "fontSize", e.target.value);
		});
	}

  // fontFamily

	fontFamilySelect.addEventListener("change", (e) => {
		dom.setStyle($display, "fontFamily", e.target.value);
	});

  // textColor

	textColorBtn.addEventListener("click", () => {
		colorBox.innerHTML = "";
		for (let i = 0; i < 9; i++) {
			let cell = dom.createElement("div", "style__form--color-box_cell");
			dom.injectElement(cell, colorBox);
			dom.setStyle(cell, "background", dom.getColor());
			cell.addEventListener("click", () => {
				dom.setStyle($display, "color", cell.style.background);
			});
		}
		show(colorBox);
	});

  // bgColor

	bgColorBtn.addEventListener("click", () => {
		colorBox.innerHTML = "";
		for (let i = 0; i < 9; i++) {
			let cell = dom.createElement("div", "style__form--color-box_cell");
			dom.injectElement(cell, colorBox);
			dom.setStyle(cell, "background", dom.getColor());
			cell.addEventListener("click", () => {
				dom.setStyle($display, "background", cell.style.background);
			});
		}
		show(colorBox);
	});

  // fontWeight + fontStyle

	boldCheckBox.addEventListener("click", (e) => {
		e.target.checked
			? dom.setStyle($display, "fontWeight", e.target.value)
			: dom.setStyle($display, "fontWeight", "normal");
	});

	italicCheckBox.addEventListener("click", (e) => {
		e.target.checked
			? dom.setStyle($display, "fontStyle", e.target.value)
			: dom.setStyle($display, "fontStyle", "normal");
	});

  // show + hide Block
  
	addBtn.addEventListener("click", () => {
		hide(editorBlock);
		hide($display);
		hide(buttonsBlock);
		show(addBlock);
	});

  // table

	for (let i = 0; i < addRadio.length; i++) {
		addRadio[i].addEventListener("click", (e) => {
			if (e.target.value === "table") {
				if (!addListSubBlock.classList.contains("hidden")) {
					hide(addListSubBlock);
				}
				show(addTableSubBlock);
			} else if (e.target.value === "list") {
				if (!addTableSubBlock.classList.contains("hidden")) {
					hide(addTableSubBlock);
				}
				show(addListSubBlock);
			}
		});
	}

	createTableBtn.addEventListener("click", () => {
		let table = dom.createElement("table");
		tableTr = +tableTr.value;
		tableTd = +tableTd.value;
		tdWidth = +tdWidth.value;
		tdHeight = +tdHeight.value;
		tdBorderWidth = +tdBorderWidth.value;
		tdBorderType = tdBorderType.value;
		tdBorderColor = tdBorderColor.value;
		for (let i = 0; i < tableTr; i++) {
			let row = dom.createElement("tr");
			for (let j = 0; j < tableTd; j++) {
				let cell = dom.createElement("td");
				dom.setStyle(cell, "width", `${tdWidth}px`);
				dom.setStyle(cell, "height", `${tdHeight}px`);
				dom.setStyle(
					cell,
					"border",
					`${tdBorderWidth}px ${tdBorderType} ${tdBorderColor}`
				);
				cell.textContent = "TD";
				dom.injectElement(cell, row);
			}
			dom.injectElement(row, table);
		}
		dom.injectElement(table, $display);
		hide(addTableSubBlock);
		hide(addBlock);
		show($display);
		show(buttonsBlock);
		show(startBlock);
		addRadio[0].checked = false;
		tableForm.reset();
	});

  // createList

	createListBtn.addEventListener("click", () => {
		let list = dom.createElement("ul");
		liCount = liCount.value;
		listMarkType = listMarkType.value;
		for (let i = 0; i < liCount; i++) {
			let listItem = dom.createElement("li");
			listItem.textContent = `item ${i + 1}`;
			dom.injectElement(listItem, list);
		}
		list.setAttribute("type", listMarkType);
		dom.injectElement(list, $display);
		hide(addListSubBlock);
		hide(addBlock);
		show($display);
		show(buttonsBlock);
		show(startBlock);
		addRadio[1].checked = false;
		listForm.reset();
	});
}
events();
