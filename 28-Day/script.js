const addPlayer = document.getElementById("add");
console.log(addPlayer);
const invalid = document.getElementById("invalid");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const countryName = document.getElementById("country");
const score = document.getElementById("score");
let value1 = firstName.value;
let value2 = lastName.value;
let value3 = countryName.value;
let value4 = score.value;

addPlayer.addEventListener("click", (e) => {
  if (value1 === "" || value2 === "" || value3 === "" || value4 === "") {
    invalid.textContent = "All Fields are required";
  }
});
