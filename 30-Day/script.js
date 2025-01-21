const firstName = document.getElementById("text1");
const lastName = document.getElementById("text2");
const email = document.getElementById("text3");
const password = document.getElementById("text4");
const telephone = document.getElementById("text5");
const bio = document.getElementById("text6");

const namePattern = /\w{2,16}[A-Za-z0-9]/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;

const invalidFirstName = document.getElementById("invalidFirstName");
const invalidLastName = document.getElementById("invalidLastName");
const invalidEmail = document.getElementById("invalidEmail");
const invalidPassword = document.getElementById("invalidPassword");
const invalidTelephone = document.getElementById("invalidTelephone");
const invalidBio = document.getElementById("invalidBio");

firstName.addEventListener("input", (e) => {
  let firstNameValue = e.target.value;
  if (namePattern.test(firstNameValue) === false) {
    invalidFirstName.textContent =
      "First Name must be alphanumeric and contain 3-16 characters";
  } else {
    invalidFirstName.style.display = "none";
  }
});

lastName.addEventListener("input", (e) => {
  let lastNameValue = e.target.value;
  if (namePattern.test(lastNameValue) === false) {
    invalidLastName.textContent =
      "Last Name must be alphanumeric and contain 3-16 characters";
  } else {
    invalidLastName.style.display = "none";
  }
});

email.addEventListener("input", (e) => {
  let emailValue = e.target.value;
  if (emailPattern.test(emailValue) === false) {
    invalidEmail.textContent =
      "Email must be a valid address, e.g. example@example.com";
  } else {
    invalidEmail.style.display = "none";
  }
});
