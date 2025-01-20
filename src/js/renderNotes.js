import { displayDeleteModal } from "./deleteNotes.js";
import { enterEditMode } from "./editNotes.js";

// Render Notes
const renderNotes = () => {
  const notesList = JSON.parse(localStorage.getItem("notes"));
  const notesContainer = document.querySelector(".notes-container");
  const submitButton = document.querySelector(".form__submit-button");

  if (notesList) {
    notesContainer.innerHTML = ""; //Clears the container to avoid duplication
    const reversedNotesArray = notesList.slice().reverse();

    reversedNotesArray.forEach((note) => {
      // Create elements
      const noteContainer = document.createElement("div");
      const subjectDateContainer = document.createElement("div");
      const noteSubject = document.createElement("span");
      const noteDate = document.createElement("span");
      const detailsToolsContainer = document.createElement("div");
      const editButton = document.createElement("button");
      const deleteButton = document.createElement("button");
      const editDeleteContainer = document.createElement("div");
      const noteText = document.createElement("p");

      // Append elements
      notesContainer.append(noteContainer);
      noteContainer.append(detailsToolsContainer);
      detailsToolsContainer.append(subjectDateContainer, editDeleteContainer);
      noteContainer.append(noteText);
      subjectDateContainer.append(noteSubject, noteDate);
      editDeleteContainer.append(deleteButton, editButton);

      // Inserting notes data
      noteSubject.textContent = note.subject;
      noteDate.textContent = note.date;
      noteText.textContent = note.text;
      deleteButton.textContent = "❌";
      editButton.textContent = "🔨";

      // Add classes
      noteContainer.classList.add("note-container");
      detailsToolsContainer.classList.add(
        "note-container__details-tools-container"
      );
      subjectDateContainer.classList.add(
        "note-container__subject-date-container"
      );
      editDeleteContainer.classList.add(
        "note-container__edit-delete-container"
      );
      noteSubject.classList.add("subject-date-container__note-subject");
      noteDate.classList.add("subject-date-container__note-date");
      deleteButton.classList.add("note-container__delete-button");
      editButton.classList.add("note-container__edit-button");
      noteText.classList.add("note-container__note-text");

      noteContainer.style.transform = `rotate(${note.rotation}deg)`;

      submitButton.textContent = "Add Note";
      submitButton.classList.remove("note-card--edited");

      // Adding event listeners
      deleteButton.addEventListener("click", () => {
        displayDeleteModal(note.subject, note.id);
      });

      editButton.addEventListener("click", () => {
        enterEditMode(note.id);
        document.querySelectorAll(".note-container").forEach((note) => {
          note.classList.remove("note-card--edited");
        });
        noteContainer.classList.add("note-card--edited");
        submitButton.textContent = "Confirm edit";
        submitButton.classList.add("note-card--edited");
      });
      noteContainer.addEventListener("click", () => {
        document.querySelectorAll(".note-container").forEach((card) => {
          card.style.zIndex = 0;
        });
        noteContainer.style.zIndex = 1;
      });
    });
  }
};

export default renderNotes;
