//Callback

// In this case the err has a value and it will return the err block.
// const doSomething = (callback) => {
//   setTimeout(() => {
//     const skills = ["HTML", "CSS", "JS"];
//     callback("It did not go well", skills);
//   }, 2000);
// };
// const callback = (err, result) => {
//   if (err) {
//     return console.log(err);
//   }
//   return console.log(result);
// };
// doSomething(callback);

// In this case the err is false and it will return the else block which is the result.
const doSomething = (callback) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    callback(false, skills);
  }, 2000);
};
doSomething((err, result) => {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
});

// Promise

// accepting
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    if (skills.length > 0) {
      resolve(skills);
    } else {
      reject("Something wrong has happened");
    }
  }, 2000);
});
doPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));

// rejecting
const doPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    if (skills.includes("Node")) {
      resolve("fullstack developer");
    } else {
      reject("Something wrong has happened");
    }
  }, 2000);
});
doPromise1
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.error(error));

// fetch APIs
const url = "https://restcountries.com/v2/all"; // countries api
fetch(url)
  .then((response) => response.json()) // accessing the API data as JSON
  .then((data) => {
    // getting the data
    // console.log(data);
  })
  .catch((error) => console.error(error)); // handling error if something wrong happens

// Async and Await

const square = async function (n) {
  return n * n;
};
console.log(square(2));

// accessing value from promise

// const square = async function (n) {
//   return n * n
// }
// const value = await square(2)
// console.log(value)

// fetch API using promise
const url1 = "https://restcountries.com/v2/all";
fetch(url1)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data)
  })
  .catch((error) => console.error(error));

// fetch api using async and await
const fetchData = async () => {
  try {
    const response = await fetch(url);
    const countries = await response.json();
    // console.log(countries);
  } catch (err) {
    console.error(err);
  }
};
console.log("===== async and await");
fetchData();
