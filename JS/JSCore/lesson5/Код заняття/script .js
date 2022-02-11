// console.log(document);
// console.log(document.documentElement);
// console.log(document.body);
// console.log(document.head);

// console.log(document.body.firstChild);
// console.log(document.body.childNodes);
// console.log(document.body.childNodes[1]);
// console.log(document.body.childNodes[1].firstChild);

// for(let i=0; i< document.body.childNodes.length; i++){
//     console.log(document.body.childNodes[i])
// }

// for(let elem of document.body.childNodes){
//     console.log(elem)
// }
// console.log(document.body.lastChild);

// console.log(document.body.firstChild);
// console.log(document.body.firstChild.nextSibling);
// console.log(document.body.firstChild.nextSibling.nextSibling);
// console.log(document.body.lastChild.previousSibling);
// console.log(document.body.lastChild.previousSibling.parentNode);

// Навігація по елементах та текстових вузлах
// firstChild
// lastChild
// childNodes
// nextSibling
// previousSibling
// parentNode

// Навігація по елементах
// firstElementChild
// lastElementChild
// children
// nextElementSibling
// previousElementSibling
// parentElement

// console.log(document.body.childNodes);
// console.log(document.body.children);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);
// console.log(document.body.firstElementChild.nextElementSibling);
// console.log(document.body.lastElementChild.previousElementSibling);
// console.log(document.body.lastElementChild.parentElement);

// Пряма навігація
// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.getElementsByName()
// document.querySelector()
// document.querySelectorAll()

// let box = document.getElementById('box');
// console.log(box);
// console.dir(box);
// console.log(box.innerHTML);
// console.log(box.outerHTML);
// console.log(box.textContent);
// console.log(box.innerText);

// box.innerHTML = '<h2>Some new Box</h2>';
// box.innerHTML += '<h2>Some new Box</h2>';
// box.textContent = '<h2>Some new Box</h2>';
// box.firstElementChild.textContent = 'Some new Box'

// let ll = document.getElementById('link');
// console.log(ll);
// console.dir(ll);
// ll.textContent = 'google';
// ll.href = 'https://www.google.com';
// ll.target = '_blank';
// ll.style.color = 'red';
// ll.style.fontSize = '40px';
// ll.style.backgroundColor = 'yellow';
// console.log(ll.style.color);
// ll.style.cssText = 'color: red; font-size: 40px';

// let tt = document.getElementsByClassName('text');
// console.log(tt);
// console.log(tt[0]);
// console.log(tt[1]);

// for(let i=0; i<tt.length; i++){
//     console.log(tt[i]);
//     tt[i].style.color = 'red';
//     tt[i].textContent = `new text ${i+1}`;
// }

// let li = document.getElementsByTagName('li');
// console.log(li);
// li[0].style.color = 'green';

// let tt = document.getElementsByName('tt');
// console.log(tt);
// console.log(tt[0]);

// let sel = document.querySelector('.text');
// console.log(sel);

// let sel = document.querySelector('ol');
// console.log(sel);
// let sel = document.querySelector('ol>li');
// console.log(sel);
// let sel = document.querySelector('ol>li:nth-of-type(3)');
// console.log(sel);

// let selAll = document.querySelectorAll('#box, .text, ol>li:nth-of-type(3), [name="tt"]');
// console.log(selAll);

// for (const elem of selAll) {
//     elem.style.color = 'red';
// }

// for (const elem of document.body.children) {
//     if(elem.matches('.text')){
//         elem.style.color = 'red';
//     }
// }

// let li = document.querySelector('li:first-child');
// // console.log(li)
// console.log(li.closest('body'));
// console.log(li.closest('#box'));

// let div = document.createElement('div');
// console.log(div);
// let text = document.createTextNode('Hello JS');
// console.log(text);

// .append(), .prepend(), .before(), .after(), .replaceWitch()

// let append = document.createElement('h2');
// append.textContent = 'append';
// append.style.color = 'green';
// document.querySelector('#box').append(append);

// let prepend = document.createElement('h2');
// prepend.textContent = 'prepend';
// document.querySelector('#box').prepend(prepend);

// let before = document.createElement('h1');
// before.textContent = 'before';
// document.querySelector('#box').before(before);

// let after = document.createElement('h1');
// after.textContent = 'after';
// document.querySelector('#box').after(after);

// let text = document.createTextNode('some text');
// document.querySelector('#box').after(text);

// document.querySelector('#box').after('<h1>after</h1>');

// .insertAdjacentHTML
// document.querySelector('#box').insertAdjacentHTML('afterbegin', '<p style="color:red">afterbegin = prepend</p>');
// document.querySelector('#box').insertAdjacentHTML('beforebegin', '<p>beforebegin = before</p>');
// document.querySelector('#box').insertAdjacentHTML('afterend', '<p>afterend = after</p>');
// document.querySelector('#box').insertAdjacentHTML('beforeend', '<p>beforeend = append</p>');

// document.querySelector('#box').insertAdjacentElement
// document.querySelector('#box').insertAdjacentText

// document.querySelector('#box').remove();

// let text3 = document.querySelector('.text').cloneNode(true);
// console.log(text3);
// text3.textContent = 'clone element';
// document.querySelector('.text').after(text3);

// elem.appendChild()
// elem.insertBefore()
// elem.removeChild()
// elem.replaceChild()