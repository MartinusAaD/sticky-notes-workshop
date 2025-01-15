import addNotes from "./addNotes";

// Selecting elements
const form = document.querySelector(".form");
const inputSubject = document.querySelector(".form__input-subject");
const inputDate = document.querySelector(".form__input-date");
const inputText = document.querySelector(".form__input-note");

// Add submit event to the form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addNotes(inputSubject, inputDate, inputText);
});
