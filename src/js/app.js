import { validate } from "uuid";
import addNotes from "./addNotes.js";
import renderNotes from "./renderNotes.js";
import validateNotes from "./validateNotes.js";

// Initial Render
document.addEventListener("DOMContentLoaded", renderNotes);

// Selecting elements
const form = document.querySelector(".form");
const inputSubject = document.querySelector(".form__input-subject");
const inputDate = document.querySelector(".form__input-date");
const inputText = document.querySelector(".form__input-note");

// Add submit event to the form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Check if input fields have content
  if (!validateNotes(inputSubject, inputDate, inputText)) {
    return;
  }
  //
  addNotes(inputSubject, inputDate, inputText);
  renderNotes();
});
