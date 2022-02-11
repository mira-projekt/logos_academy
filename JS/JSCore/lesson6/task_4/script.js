"use strict";
// Завдання 4:

// Необхідно реалізувати наступний функціонал як на відео text, а саме:
// — на сторінці знаходиться список ol з 6ма кольорами, написаними англійською мовою.
// — потрібно щоб в при кліку на поточний пункт замалювався тим кольором, який в ньому записаний.
// — постарайтесь зробити даний функціонал використовуючи тільки одну функцію

document.querySelector("ol").addEventListener("click", function (e) {
	let li = document.querySelectorAll("li");
	const target = e.target;
	if (target === li[0]) {
		target.style.color = "red";
	} else if (target === li[1]) {
		target.style.color = "yellow";
	} else if (target === li[2]) {
		target.style.color = "green";
	} else if (target === li[3]) {
		target.style.color = "blue";
	} else if (target === li[4]) {
		target.style.color = "orange";
	} else if (target === li[5]) {
		target.style.color = "gray";
	}
});

//__________ДОДАТКОВО________________

// з класом

// ulClick.addEventListener("click", function (event) {
// 	if (event.target.nodeName === "LI") {
// 		if (event.ctrlKey || event.metaKey) {
// 			event.target.classList.toggle("selected");
// 		} else {
// 			for (let child of this.children) {
// 				child.classList.remove("selected");

// 				event.target.classList.add("selected");
// 			}
// 		}
// 	}
// });

//______________________________
//додатково з прибиранням кольору , але поки спрацьовує на один колір _____

// let li = document.querySelectorAll("li");

// for (let i = 0; i < li.length; i++) {
// 	if (li[i].tagName == "LI" || li[i].tagName == "li") {
// 		if (li[i].addEventListener) {
// 			li[i].addEventListener("click", callback, false);
// 		} else if (li[i].attachEvent) {
// 			li[i].attachEvent("on" + "click", callback);
// 		}
// 	}
// }

// let prevLi = null;

// function callback(e) {
// 	e = e || window.event;
// 	let target = e.target || e.srcElement;
// 	if (prevLi) {
// 		prevLi.style.color = "";
// 	}
// 	target.style.color = "green";
// 	prevLi = target;
// 	e.stopPropagation();
// }

//______________________
//метод forEach - getElementsBy*:
//const elements = Array.from(document.getElementsByTagName('li'))
//elements.forEach(()=>{})
// OR
// Array.from(ulSelect).forEach((elem) => {
// 	elem.addEventListener("click", function (e) {
// 		elem = e.target.nodeName;
// 		if (elem[0]) {
// 			changeBackground("red");
// 		} else if (elem[1]) {
// 			changeBackground("blue");
// 		}
// 	});
// });
