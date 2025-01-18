const texts = [
  "📖       Instructor",
  "🔥       Motivator",
  "🔥       Motivational Speaker",
  "💻       Programmer",
  "🌿       Educator",
  "💼       Content Creator",
];
let index = 0;

function updateText() {
  const textField = document.getElementById("textField");
  textField.value = texts[index];
  index = (index + 1) % texts.length;
}
setInterval(updateText, 2000);
updateText();

const subjects = [
  "NODE",
  "PANDAS",
  "JAVASCRIPT",
  "PYTHON",
  "NUMPY",
  "REDUX",
  "MONGODB",
  "REACT",
];
let index1 = 0;
function updateSubject() {
  const subj = document.getElementById("subj");
  subj.value = subjects[index1];
  index1 = (index1 + 1) % subjects.length;
}
setInterval(updateSubject, 2000);
updateSubject();
