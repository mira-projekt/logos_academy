// keyup, keydown, keypress

// const ball = document.querySelector('.ball');

// window.addEventListener('keydown', function(event){
//     // console.log('Event', event)
//     // console.log('Key code', event.keyCode);
//     if(event.keyCode === 37){
//         // console.log('press arrow left');
//         let goLeft = ball.offsetLeft;
//         // console.log(goLeft)
//         if(goLeft > 0){
//             ball.style.left = goLeft - 10 + 'px';
//         }
//     }
//     if(event.keyCode === 38){
//         let goTop = ball.offsetTop;
//         // console.log(goTop);
//         if(goTop > 0){
//             ball.style.top = goTop - 10 + 'px';
//         }
//     }
//     if(event.keyCode === 39){
//         let goRight = ball.offsetLeft;
//         // console.log(window.innerWidth)
//         if(goRight < window.innerWidth - 100){
//             ball.style.left = goRight + 10 + 'px';
//         }
//     }
//     if(event.keyCode === 40){
//         let goBottom = ball.offsetTop;
//         if(goBottom < window.innerHeight - 100){
//             ball.style.top = goBottom + 10 + 'px';
//         }
//     }
// })

const sel = selector => document.querySelector(selector);

sel('.add').addEventListener('click', function(){
    // sel('.box').classList.add('bg-red');
    document.querySelector('.box').classList.add('bg-red', 'shadow');
})

sel('.remove').addEventListener('click', function(){
    // document.querySelector('.box').classList.remove('bg-red');
    document.querySelector('.box').classList.remove('bg-red', 'shadow');
})

sel('.toggle').addEventListener('click', function(){
    // document.querySelector('.box').classList.toggle('bg-red');
    document.querySelector('.box').classList.toggle('bg-red');
    // let className =  document.querySelector('.box').className;
    // console.log(className)
    // document.querySelector('.box').className += ' bg-red'
    // let className =  document.querySelector('.box').className;
    // if(className.includes('bg-red')){
    //     document.querySelector('.box').classList.remove('bg-red');
    // }
    // else{
    //     document.querySelector('.box').classList.add('bg-red');
    // }
    // console.log(document.querySelector('.box').classList.contains('bg-red'))
    // if(document.querySelector('.box').classList.contains('bg-red') && document.querySelector('.box').classList.contains('shadow')){
    //     document.querySelector('.box').classList.remove('bg-red','shadow');
    // }
    // else{
    //     document.querySelector('.box').classList.add('bg-red','shadow');
    // }
})



function change(){
    const myLink = document.getElementById('link');
    // console.log(myLink);
    // console.dir(myLink);
    // console.dir(event.target.dataset.name)
    // console.log(myLink.hasAttribute('target'));
    // console.log(myLink.getAttribute('href'));
    // myLink.setAttribute('href', 'https://www.google.com');
    // myLink.setAttribute('target', '_blank');
    // myLink.setAttribute('class', 'new');
    //  myLink.removeAttribute('href');
}

document.querySelector('.check').addEventListener('click', function(){
    const box = document.querySelector('.box');
    // console.log(box);
    // console.log(box.style.backgroundColor);

    let st = getComputedStyle(box);
    // console.log(st);
    console.log(st.backgroundColor);
})

document.querySelector('.box').onclick = function(){
    let st = getComputedStyle(this);
    console.log(st.backgroundColor)
}