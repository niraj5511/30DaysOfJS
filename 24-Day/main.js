const button = document.querySelector("button");
const mass = document.querySelector("#mass");
const earth = document.querySelector("img.earth");
const container = document.querySelector(".container");
const dropdown = document.querySelector(".dropdown");
const body = document.querySelector("body");

let weight, noInput;

button.addEventListener("click", (e) => {
  weight = parseFloat(mass.value);
  if (weight == 0) {
    earth.style.display = "none";
    noInput = document.createElement("h3");
    noInput.style.color = "white";
    noInput.textContent = "Enter valid weight first";
    container.appendChild(noInput);
  }
});
let noPlanet;
button.addEventListener("click", () => {
  let selectedValue = dropdown.value;
  // console.log(selectedValue);
  if (selectedValue == "select-placeholder") {
    earth.style.display = "none";
    noPlanet = document.createElement("h4");
    noPlanet.style.color = "white";
    noPlanet.textContent = "Choose planet first";

    // container.removeChild(noInput);
    container.appendChild(noPlanet);
  }
});
let mercuryImage, mercuryWeight;
button.addEventListener("click", () => {
  let selectedValue = dropdown.value;
  // console.log(selectedValue);
  if (selectedValue == "mercury") {
    earth.style.display = "none";
    mercuryImage = document.createElement("img");

    mercuryImage.src = "images/mercury.png";
    mercuryImage.alt = "Mercury Planet";
    mercuryImage.width = "180";
    mercuryImage.style.marginTop = "60px";
    mercuryImage.style.marginLeft = "450px";

    mercuryWeight = document.createElement("h3");
    mercuryWeight.style.color = "white";
    mercuryWeight.textContent = "Weight in Mercury :" + weight * 0.38;
    mercuryWeight.style.display = "flex";
    mercuryWeight.style.justifyContent = "center";
    mercuryWeight.style.fontSize = "40px";

    body.appendChild(mercuryImage);
    body.appendChild(mercuryWeight);
    container.removeChild(noPlanet);
    

  }
});
let venusImage, venusWeight;
button.addEventListener("click", () => {
  let selectedValue = dropdown.value;
  // console.log(selectedValue);
  if (selectedValue == "venus") {
    earth.style.display = "none";
    venusImage = document.createElement("img");

    venusImage.src = "images/venus.png";
    venusImage.alt = "Venus Planet";
    venusImage.width = "180";
    venusImage.style.marginTop = "60px";
    venusImage.style.marginLeft = "450px";

    venusWeight = document.createElement("h3");
    venusWeight.style.color = "white";
    venusWeight.textContent = "Weight in Venus :" + weight * 0.91;
    venusWeight.style.display = "flex";
    venusWeight.style.justifyContent = "center";
    venusWeight.style.fontSize = "40px";

    body.removeChild(mercuryImage);
    body.removeChild(mercuryWeight);
    body.appendChild(venusImage);
    body.appendChild(venusWeight);
  }
});
let earthImage, earthWeight;
button.addEventListener("click", () => {
  let selectedValue = dropdown.value;
  // console.log(selectedValue);
  if (selectedValue == "earth") {
    earth.style.display = "none";
    earthImage = document.createElement("img");

    earthImage.src = "images/earth.png";
    earthImage.alt = "Earth Planet";
    earthImage.width = "180";
    earthImage.style.marginTop = "60px";
    earthImage.style.marginLeft = "450px";

    earthWeight = document.createElement("h3");
    earthWeight.style.color = "white";
    earthWeight.textContent = "Weight in Earth :" + weight * 1.0;
    earthWeight.style.display = "flex";
    earthWeight.style.justifyContent = "center";
    earthWeight.style.fontSize = "40px";

    body.removeChild(venusImage);
    body.removeChild(venusWeight);
    body.appendChild(earthImage);
    body.appendChild(earthWeight);
  }
});
let marsImage, marsWeight;
button.addEventListener("click", () => {
  let selectedValue = dropdown.value;
  // console.log(selectedValue);
  if (selectedValue == "mars") {
    earth.style.display = "none";
    marsImage = document.createElement("img");

    marsImage.src = "images/mars.png";
    marsImage.alt = "Mars Planet";
    marsImage.width = "180";
    marsImage.style.marginTop = "60px";
    marsImage.style.marginLeft = "450px";

    marsWeight = document.createElement("h3");
    marsWeight.style.color = "white";
    marsWeight.textContent = "Weight in Mars :" + weight * 0.38;
    marsWeight.style.display = "flex";
    marsWeight.style.justifyContent = "center";
    marsWeight.style.fontSize = "40px";

    body.removeChild(earthImage);
    body.removeChild(earthWeight);
    body.appendChild(marsImage);
    body.appendChild(marsWeight);
  }
});
let jupiterImage, jupiterWeight;
button.addEventListener("click", () => {
  let selectedValue = dropdown.value;
  // console.log(selectedValue);
  if (selectedValue == "jupiter") {
    earth.style.display = "none";
    jupiterImage = document.createElement("img");

    jupiterImage.src = "images/jupiter.png";
    jupiterImage.alt = "Jupiter Planet";
    jupiterImage.width = "180";
    jupiterImage.style.marginTop = "60px";
    jupiterImage.style.marginLeft = "450px";

    jupiterWeight = document.createElement("h3");
    jupiterWeight.style.color = "white";
    jupiterWeight.textContent = "Weight in Jupiter :" + weight * 2.34;
    jupiterWeight.style.display = "flex";
    jupiterWeight.style.justifyContent = "center";
    jupiterWeight.style.fontSize = "40px";

    body.removeChild(marsImage);
    body.removeChild(marsWeight);
    body.appendChild(jupiterImage);
    body.appendChild(jupiterWeight);
  }
});
let saturnImage, saturnWeight;
button.addEventListener("click", () => {
  let selectedValue = dropdown.value;
  // console.log(selectedValue);
  if (selectedValue == "saturn") {
    earth.style.display = "none";
    saturnImage = document.createElement("img");

    saturnImage.src = "images/saturn.png";
    saturnImage.alt = "Saturn Planet";
    saturnImage.width = "180";
    saturnImage.style.marginTop = "60px";
    saturnImage.style.marginLeft = "450px";

    saturnWeight = document.createElement("h3");
    saturnWeight.style.color = "white";
    saturnWeight.textContent = "Weight in Saturn :" + weight * 1.06;
    saturnWeight.style.display = "flex";
    saturnWeight.style.justifyContent = "center";
    saturnWeight.style.fontSize = "40px";

    body.removeChild(jupiterImage);
    body.removeChild(jupiterWeight);
    body.appendChild(saturnImage);
    body.appendChild(saturnWeight);
  }
});
let uranusImage, uranusWeight;
button.addEventListener("click", () => {
  let selectedValue = dropdown.value;
  // console.log(selectedValue);
  if (selectedValue == "uranus") {
    earth.style.display = "none";
    uranusImage = document.createElement("img");

    uranusImage.src = "images/uranus.png";
    uranusImage.alt = "Uranus Planet";
    uranusImage.width = "180";
    uranusImage.style.marginTop = "60px";
    uranusImage.style.marginLeft = "450px";

    uranusWeight = document.createElement("h3");
    uranusWeight.style.color = "white";
    uranusWeight.textContent = "Weight in Uranus :" + weight * 0.92;
    uranusWeight.style.display = "flex";
    uranusWeight.style.justifyContent = "center";
    uranusWeight.style.fontSize = "40px";

    body.removeChild(saturnImage);
    body.removeChild(saturnWeight);
    body.appendChild(uranusImage);
    body.appendChild(uranusWeight);
  }
});
let neptuneImage, neptuneWeight;
button.addEventListener("click", () => {
  let selectedValue = dropdown.value;
  // console.log(selectedValue);
  if (selectedValue == "neptune") {
    earth.style.display = "none";
    neptuneImage = document.createElement("img");

    neptuneImage.src = "images/neptune.png";
    neptuneImage.alt = "Neptune Planet";
    neptuneImage.width = "180";
    neptuneImage.style.marginTop = "60px";
    neptuneImage.style.marginLeft = "450px";

    neptuneWeight = document.createElement("h3");
    neptuneWeight.style.color = "white";
    neptuneWeight.textContent = "Weight in Neptune :" + weight * 1.19;
    neptuneWeight.style.display = "flex";
    neptuneWeight.style.justifyContent = "center";
    neptuneWeight.style.fontSize = "40px";

    body.removeChild(uranusImage);
    body.removeChild(uranusWeight);
    body.appendChild(neptuneImage);
    body.appendChild(neptuneWeight);
  }
});
let plutoImage, plutoWeight;
button.addEventListener("click", () => {
  let selectedValue = dropdown.value;
  // console.log(selectedValue);
  if (selectedValue == "pluto") {
    earth.style.display = "none";
    plutoImage = document.createElement("img");

    plutoImage.src = "images/pluto.png";
    plutoImage.alt = "Pluto Planet";
    plutoImage.width = "180";
    plutoImage.style.marginTop = "60px";
    plutoImage.style.marginLeft = "450px";

    plutoWeight = document.createElement("h3");
    plutoWeight.style.color = "white";
    plutoWeight.textContent = "Weight in Pluto :" + weight * 0.06;
    plutoWeight.style.display = "flex";
    plutoWeight.style.justifyContent = "center";
    plutoWeight.style.fontSize = "40px";

    body.removeChild(neptuneImage);
    body.removeChild(neptuneWeight);
    body.appendChild(plutoImage);
    body.appendChild(plutoWeight);
  }
});
