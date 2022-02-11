// setTimeout(function(){
//     document.write('<h2>setTimeout</h2>')
// }, 2000);

// let timeoutID;

// function startTimeout(){
//     timeoutID = setTimeout(() => {
//         document.querySelector('.blockTimeout').innerHTML = '<h2>setTimeout</h2>';
//     }, 2000)
// }

// function stopTimeout(){
//     clearTimeout(timeoutID);
// }

// setInterval(function(){
//     document.write('<h2>setInterval</h2>')
// }, 2000);

// let intervalID;

// function createElement(){
//     let h2 = document.createElement('h2');
//     h2.textContent = 'setInterval';
//     document.querySelector('.blockInterval').append(h2);
//     // if(document.querySelector('.blockInterval').children.length >=5 ){
//     //     clearInterval(intervalID);
//     // }
// }

// function startInterval(){
//     intervalID = setInterval(createElement, 2000);
//     document.querySelector('.start').disabled = true;
//     document.querySelector('.stop').disabled = false;
// }

// function stopInterval(){
//     clearInterval(intervalID);
//     document.querySelector('.start').disabled = false;
//     document.querySelector('.stop').disabled = true;
// }

// let d = new Date();
// console.log('Date', d);
// console.log('getDay', d.getDay());
// console.log('getDate', d.getDate());
// console.log('getMonth', d.getMonth());
// console.log('getFullYear', d.getFullYear());
// console.log('getHours', d.getHours());
// console.log('getMinutes', d.getMinutes());
// console.log('getSeconds', d.getSeconds());
// console.log('getMilliseconds', d.getMilliseconds());
// console.log('getTimezoneOffset', d.getTimezoneOffset());
// console.log('getUTCHours', d.getUTCHours());
// console.log(new Date(2020, 6, 1, 12, 00, 00))

// let setD = new Date(2020, 6, 1, 12, 00, 00);

// let start =  d.getTime();
// console.log('start', start);
// setTimeout(() => {
//     let end = new Date().getTime()
//     console.log('end', end);
//     console.log('Time', end - start);
// }, 1000);

// 1 січня 1970 00,00,00

// let setD = new Date(2020, 5, 6, 16, 00, 00);
// console.log(setD);
// console.log(setD.getTime());
// function chectTime(){
//     setInterval(() => {
//         let currentD = new Date();
//         let rizn = setD.getTime() - currentD.getTime();
//         let hours = Math.floor((rizn % (1000 * 60 * 60 * 24 ))/(1000 * 60 * 60));
//         let minutes = Math.floor((rizn % (1000 * 60 * 60 ))/(1000 * 60));
//         let seconds = Math.floor((rizn % (1000 * 60))/1000);
//         document.querySelector('.coutDown').innerHTML = `${hours} : ${minutes} : ${seconds}`
//     })
// }
// chectTime()


setInterval(() => {
    let dd = new Date();
    let hh = dd.getHours();
    let mm = dd.getMinutes();
    let ss = dd.getSeconds();
    if (hh < 10) hh = '0' + hh;
    if (mm < 10) mm = '0' + mm;
    if (ss < 10) ss = '0' + ss;
    document.querySelector('.digital-clock').innerHTML = `${hh} : ${mm} : ${ss}`
})