"use strict";
// Необхідно реалізувати наступний функціонал як на відео signUp, а саме:

// — заповнити всі поля форми: first name, second name, email

// — вибрати стать: man, woman

// — вибрати position: Fronted, Backend, QC/QA

// — поставити галочку навпроти пункту: I agree…

// — після чого клікаємо на кнопку Sign Up і переходимо до блоку профайлу
// користувача (примітка: без галочки напроти I agree… кнопка має бути не
// активна)

// — на блоці профайлу має бути вся інформація яку ми заповнювали, 
//а також картинка чоловіча чи жіноча відносно статі яку ми обирали

// — при кліку на Sign Out ми повертаємося на блок створення акаунту, поля в блоці мають бути зачищені


function secondTask() {
  const signUpForms = document.forms.signUp;
  let userData = [];

  signUpForms.agreement.addEventListener('click', function () {
      if (this.checked) {
          signUpForms.signUpButton.removeAttribute('disabled');            
      } else if (!this.checked) {
          signUpForms.signUpButton.setAttribute('disabled', 'disabled');
      }
  });

  signUpForms.signUpButton.addEventListener('click', () => {
      if (signUpForms.agreement.checked) {
          userData.push(signUpForms.firstName.value);
          userData.push(signUpForms.secondName.value);
          userData.push(signUpForms.email.value);
          userData.push(signUpForms.radioGender.value);

          if (signUpForms.position.value === 'Choose...') {
              userData.push('');
          } else {
              userData.push(signUpForms.position.value);
          }

          if (userData[3] === 'man') {
              document.querySelector('.registrated_header_image').style.backgroundImage = `url(man.png)`;
          } else if (userData[3] === 'woman') {
              document.querySelector('.registrated_header_image').style.backgroundImage = `url(woman.png)`;
          }
         
          document.querySelector('.profile_name').textContent = `${userData[0]} ${userData[1]}`;
          document.querySelector('.profile_mail').textContent = `${userData[2]}`;
          document.querySelector('.profile_position').textContent = `${userData[4]}`; 
          document.querySelector('.form_sign').classList.add('hidden');
          document.querySelector('.registrated').classList.remove('hidden'); 
      }
  });

  document.querySelector('.signOut_button').addEventListener('click',()=>{
      userData = [];
      document.querySelector('.registrated').classList.add('hidden');
      document.querySelector('.form_sign').classList.remove('hidden');
      signUpForms.signUpButton.setAttribute('disabled', 'disabled');
      signUpForms.reset();
  });
}

secondTask();