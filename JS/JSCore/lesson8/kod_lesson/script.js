// let ff = document.forms;
// console.log(ff);

// let f1 = document.forms.f1;
// console.log(f1);

// let f1 = document.forms["f1"];
// console.log(f1);

let f1 = document.forms[0];
// console.log(f1);
// console.log(f1.name);

// form.nameElement
// console.log(f1.elements);
// console.log(f1.elements.get);
// console.log(f1.elements["get"]);
// console.log(f1.elements[2]);
// console.log(f1.login);

// console.log(f1.elements);
// console.log(f1.children);

// login 
// console.log(f1.login);
// console.log(f1.login.name);


f1.get.addEventListener('click', function(){
    // console.log('click works')
    let userLogin = f1.login.value;
    let userPassword = f1.password.value;
    console.log(userLogin, userPassword);
    // f1.login.value = '';
    // f1.password.value = '';
    f1.reset();
});

let f2 = document.forms.f2;
// console.log(f2);

// for(let i=0; i< f2.elements.length; i++){
//     f2.elements[i].onclick = function(){
//         // document.body.style.backgroundColor = f2.elements[i].value
//         document.body.style.backgroundColor = this.value
//     }
// }

function radioColor(){
    if(event.target.type === 'radio'){
        document.body.style.backgroundColor = event.target.value;
    }
}

let f4 = document.forms.f4;

f4.show.addEventListener('click', function(){
    // console.log(this);
    // console.log(event.target);
    // console.log(event.target.checked);
    // this.checked = false;
    // f4.hide.checked = true;
    // if(f4.show.checked){
    //     f4.area.style.display = 'block'
    // }
    // else{
    //     f4.area.style.display = 'none'
    // }
    f4.area.style.display = f4.show.checked ? 'block' : 'none';
    // console.log(document.forms.f3.elements[3]);
    document.forms.f3.elements[3].checked = true;
    console.log(this.value);
});

let f5 = document.forms.f5;
// console.log(f5.colors)
// console.log(f5.colors.options);
// console.log(f5.colors.selectedIndex);
// console.log(f5.colors.value);

// for(let i=0; i<f5.colors.options.length; i++){
//     if(f5.colors.options[i].selected){
//         console.log(f5.colors.options[i])
//     }
// }

// for(let i=0; i<f5.colors.options.length; i++){
//     f5.colors.addEventListener('change', function(){
//         if(f5.colors.options[i].selected){
//             document.body.style.backgroundColor = f5.colors.options[i].value;
//         }
//     })
// }

f5.colors.addEventListener('change', function(){
    document.body.style.backgroundColor = event.target.value;
})

f5.get.addEventListener('click', () => {
    // console.log(f5.colors.value)
    // let opt  = new Option('gray color', 'gray', true, true)
    // console.log(opt);
})

let f6 = document.forms.f6;

f6.test.addEventListener('focus', function(){
    console.log('focus works')
})

f6.test.addEventListener('blur', function(){
    console.log('blur works')
})

f6.test.addEventListener('change', function(){
    console.log('change works')
})

f6.test.addEventListener('input', function(){
    // console.log('input works')
    document.querySelector('.text').textContent = this.value
})

function showMessage(){
    event.preventDefault();
    console.log('submit done')
}