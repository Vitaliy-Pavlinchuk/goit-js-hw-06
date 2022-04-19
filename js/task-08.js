const form = document.querySelector(".login-form");

const onSubmitForm = (event) => {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (!email || !password) {
    alert("Все поля должны быть заполнены");
  } else {
    const formMeta = { email, password };
    console.log(formMeta);
    event.currentTarget.reset();
  }
};

form.addEventListener("submit", onSubmitForm);
