import { validate } from "uuid";
import addNotes, { generateRandomNumber } from "./addNotes.js";
import renderNotes from "./renderNotes.js";
import validateNotes from "./validateNotes.js";
import { editNote, editState, enterEditMode } from "./editNotes.js";
import storeNotes from "./storeNotes.js";

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
  if (!editState.isEditMode) {
    addNotes(inputSubject, inputDate, inputText);
    renderNotes();
  } else {
    const notesList = JSON.parse(localStorage.getItem("notes"));

    const editedNote = {
      id: editState.currentEditId,
      subject: inputSubject.value.trim(),
      date: inputDate.value.trim(),
      text: inputText.value.trim(),
      rotation: generateRandomNumber(),
    };
    const updatedNoteList = notesList.map((note) => {
      return note.id === editState.currentEditId ? editedNote : note;
    });

    storeNotes(updatedNoteList);
    renderNotes();
    editState.currentEditId = null;
    editState.isEditMode = false;
    submitButton.classList.remove("note-card--edited");
    submitButton.textContent = "Add note";
  }
});
