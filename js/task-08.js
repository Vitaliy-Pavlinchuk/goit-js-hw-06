// const form = document.querySelector(".login-form");

// const onSubmitForm = (event) => {
//   event.preventDefault();
//     const formElements = event.currentTarget.elements;
//     const email = formElements.email.value;
//     const password = formElements.password.value;

//   if (!email || !password) {
//     alert("Все поля должны быть заполнены");
//   } else {
//     const formMeta = { email, password };
//     console.log(formMeta);
//     event.currentTarget.reset();
//   }
// };

// form.addEventListener("submit", onSubmitForm);



// const form = document.querySelector(".login-form");

// form.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { email, password },
//   } = event.currentTarget;
//   if (email.value === "" || password.value === "") {
//     return console.log("Please fill in all the fields!");
//   }
//   console.log(`Email: ${email.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }



const formEL = document.querySelector(".login-form");

formEL.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Все поля должны быть заполнены");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}