// alert('Hello JS');
// window.alert('Hello JS');

// var alert = function(message){
//     document.write(`Повідомлення: ${message}`);
// }

// window.alert('Hello JS');
// var message = 'Hello JS';
// document.write(window.message);

// window.open('https://www.football24.ua', 'Football24', 'width=400, height=400, resizable=yes');

// document.querySelector('#open').addEventListener('click', () => {
//     window.open('https://www.football24.ua', 'Football24', 'width=400,height=400,resizable=yes');
// })

// document.querySelector('#open').addEventListener('click', () => {
//     window.open('https://www.football24.ua', 'Football24', 'width=400,height=400,left=400,top=200');
// })

// - width
// - height
// - left
// - top
// - titlebar
// - menubar
// - toolbar
// - location
// - scrollbars
// - status
// - resizable

// let popup;
// document.querySelector('#open').addEventListener('click', () => {
//     popup = window.open('https://www.football24.ua', 'Football24', 'width=400,height=400,left=400,top=200');
// })

// function closeWindow(){
//     popup.close();
// }

// setTimeout(closeWindow, 2000);

// let popup;
// document.querySelector('#open').addEventListener('click', () => {
//     popup = window.open('https://www.football24.ua', 'Football24', 'width=400,height=400,left=400,top=200');
// })

// document.querySelector('#close').addEventListener('click', () => {
//     popup.close();
// })

// let popup;
// document.querySelector('#open').addEventListener('click', () => {
//     popup = window.open('https://www.football24.ua', 'Football24', 'width=400,height=400,left=400,top=200');
//     popup.resizeTo(500, 300);
// })

// document.write(`Кількість сторінок в історії = ${window.history.length}`);
// history.back()
// history.forward()
// history.go(-3);
// history.go(4);

// document.write(`<h2>Рядок запиту = ${location.href}</h2>`);
// document.write(`<h2>Шлях до ресурсу = ${location.pathname}</h2>`);
// document.write(`<h2>Загальна схема запиту = ${location.origin}</h2>`);
// document.write(`<h2>Протокол = ${location.protocol}</h2>`);
// document.write(`<h2>Порт = ${location.port}</h2>`);
// document.write(`<h2>Хост = ${location.host}</h2>`);
// document.write(`<h2>Імя Хост = ${location.hostname}</h2>`);
// document.write(`<h2>Хеш = ${location.hash}</h2>`);
// document.write(`<h2>Пошук = ${location.search}</h2>`);

// location = 'https://www.google.com';
// location.assign('https://www.google.com')
// location.reload(forceReload)
// location.replace(url)


// navigator

// document.write(navigator.userAgent)
// let browser;
// let uAgent = navigator.userAgent;
// if(uAgent.indexOf('Chrome' > -1)){
//     browser = 'Google Chrome'
// }
// document.write(browser)

// function success(position){
//     let latitude = position.coords.latitude;
//     let longitude = position.coords.longitude;
//     let altitude = position.coords.altitude;
//     let speed = position.coords.speed;
//     document.write(`<h2>Широта ${latitude}</h2>`);
//     document.write(`<h2>Довгода ${longitude}</h2>`);
//     document.write(`<h2>Висота ${altitude}</h2>`);
//     document.write(`<h2>Швидкість ${speed}</h2>`);
// }

// function error(){
//     document.write(`<h2>Помилки при визначенні місця знаходження</h2>`)
// }

// navigator.geolocation.getCurrentPosition(success, error)

// window.addEventListener('scroll', function(event){
//     // console.log(event);
//     if(window.scrollY<=250){
//         console.log(window.scrollY);
//         document.body.style.background = `rgb(${window.scrollY},${window.scrollY},${window.scrollY})`
//     }
// })

// document.getElementById('open').addEventListener('click',()=> {
//     // window.scroll(0, 1000);
//     window.scroll({
//         top: 1000,
//         behavior: 'smooth'
//     })
// })

// document.getElementById('up').addEventListener('click',()=> {
//     // window.scroll(0, 1000);
//     // window.scrollBy({
//     //     top: -100,
//     //     behavior: 'smooth'
//     // })
// })

// document.getElementById('goUp').addEventListener('click', ()=> {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth'
//     })
// })

// document.getElementById('down').addEventListener('click', ()=> {
//     document.getElementById('goUp').scrollIntoView({behavior: 'smooth'})
// })

const leftModal = document.querySelector('.modal-left');
const rightModal = document.querySelector('.modal-right');

// window.addEventListener('scroll', function(event){
//     // console.log(event);
//     if(window.scrollY<=400){
//         console.log(window.scrollY);
//         leftModal.style.left = `${window.scrollY/4}px`
//         rightModal.style.right = `${window.scrollY/4}px`
//     }
// })

function myScrollEffect(){
    if(window.scrollY<=400){
        console.log(window.scrollY);
        leftModal.style.left = `${window.scrollY/4}px`
        rightModal.style.right = `${window.scrollY/4}px`
    }
    else{
        window.removeEventListener('scroll', myScrollEffect)
    }
}

window.addEventListener('scroll', myScrollEffect)

window.addEventListener('resize', function(){
    // console.log(window.innerWidth, window.innerHeight)
    if(window.innerWidth <= 960){
        window.removeEventListener('scroll', myScrollEffect)
    }
})