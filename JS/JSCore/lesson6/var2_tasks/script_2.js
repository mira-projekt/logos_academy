const colorBox = document.querySelector(".colors");
const secretBox = document.querySelector(".secret");
const cells = document.querySelectorAll(".cell");
const listItems = document.querySelectorAll("li");
let index = 0;
const secrets = ["You want to know?", "I dont tell You!", "I have a secret!"];
const colors = ["green", "red", "yellow"];

function colorChanging(event) {
	index++;
	if (index > 2) {
		index = 0;
	}
	event.target.style.backgroundColor = colors[index];
}

colorBox.addEventListener("mouseover", colorChanging);
colorBox.addEventListener("mouseout", (e) => {
	e.target.style.backgroundColor = "rgb(136, 26, 136)";
});
secretBox.addEventListener("mouseover", (e) => {
	e.target.innerText = secrets[0];
	e.target.style.backgroundColor = colors[2];
});
secretBox.addEventListener("mousedown", (e) => {
	e.target.style.backgroundColor = "black";
	e.target.style.color = "white";
	e.target.innerText = secrets[1];
});
secretBox.addEventListener("mouseup", (e) => {
	e.target.innerText = secrets[0];
	e.target.style.backgroundColor = colors[2];
});
secretBox.addEventListener("mouseout", (e) => {
	e.target.innerText = secrets[2];
	e.target.style.backgroundColor = "rgb(136, 26, 136)";
});

function cellsEvents() {
	for (let i = 0; i < cells.length; i++) {
		cells[i].addEventListener("click", (e) => {
			let imageUrl = prompt("Enter url for background:");
			e.target.style.backgroundImage = `url(${imageUrl})`;
		});
	}
}
cellsEvents();

function listItemsColor() {
	for (let i = 0; i < listItems.length; i++) {
		listItems[i].addEventListener("click", function (e) {
			let colorInTag = listItems[i].textContent;
			if (e.target.style.color === colorInTag) {
				e.target.style.color = "#000";
			} else {
				e.target.style.color = colorInTag;
			}
		});
	}
}
listItemsColor();
