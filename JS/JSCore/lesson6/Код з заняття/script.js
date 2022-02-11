// MouseEvent
//  - click

// function someClick(){
//     // console.log('Click works');
//     // console.log(event);
//     // console.log(event.target);
//     if(event.altKey){
//         console.log('click + alt')
//     }
//     else{
//         console.log('click');
//     }
// }

// document.getElementById('push').onclick = function(e){
//     // console.log('click from JS');
//     // console.log(event);
//     // console.log(e)
// }

// function someClick(){
//     // console.log(event)
//     console.log('click html attr');
// }

// function someClick1(){
//     // console.log('click js property');
//     console.log(this);
// }

// document.getElementById('click1').onclick = someClick1;

// document.getElementById('push').onclick = function(){
//     console.log('click 1');
// }

// document.getElementById('push').onclick = function(){
//     console.log('click 2');
// }

// document.getElementById('push').addEventListener()
// document.getElementById('push').removeEventListener()

// addEventListener(event, handler[, options])

// document.getElementById('push').addEventListener('click', function(){
//     console.log('click 1')
// })

// document.getElementById('push').addEventListener('click', function(){
//     console.log('click 2')
// })


// function showMessage(){
//     console.log('Hello world'); 
//     document.getElementById('push').removeEventListener('click', showMessage)
// }

// document.getElementById('push').addEventListener('click', showMessage)
// document.getElementById('push').addEventListener('click', function(){
//     console.log('some else');
// })

// function divFunc(){
//     console.log('click div');   
//     console.log(event.target);
//     // event.stopPropagation();
// }

// function pFunc(){
//     console.log('click p'); 
//     console.log(event.target);  
//     event.stopPropagation();
// }

// function bFunc(){
//     console.log('click b');   
//     console.log(event.target);
//     event.stopPropagation();
// }

// function showTagName(){
//     console.log(event.target)
// }

// document.querySelector('.top-block').addEventListener('click', showTagName, true)
// document.querySelector('.main-block').addEventListener('click', showTagName, true)
// document.querySelector('.bottom-block').addEventListener('click', showTagName, true)

// const randomizer = (min, max) => Math.round(Math.random()*(max - min));

// function addColor(){
//     if(event.target.className == 'block'){
//         const r = randomizer(0,255);
//         const g = randomizer(0,255);
//         const b = randomizer(0,255);
//         event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//     }
// }

// let countOver = 0;
// let countOut = 0;
// let countMove = 0;

// document.querySelector('.box').addEventListener('mouseover', function(){
//     event.target.style.backgroundColor = 'red';
//     countOver++;
//     console.log('countOver', countOver)
// })

// document.querySelector('.box').addEventListener('mouseout', function(){
//     event.target.style.backgroundColor = 'white';
//     countOut++;
//     console.log('countOut', countOut)
// })

// document.querySelector('.box').addEventListener('mousemove', function(){
//     countMove++;
//     console.log('countMove', countMove)
// })

// document.querySelector('h1').addEventListener('mousedown', function(){
//     event.target.style.height = '100px'
//     console.log('mousedown')
// })

// document.querySelector('h1').addEventListener('mouseup', function(){
//     event.target.style.height = '50px'
//     console.log('mouseup')
// })


// mousedown=> mouseup => click

// document.querySelector('h1').addEventListener('dblclick', function(){
//     console.log('dblclick')
// })

// document.querySelector('h1').addEventListener('click', function(){
//     console.log('click')
// })