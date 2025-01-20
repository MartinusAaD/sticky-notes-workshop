// Variables to track the edit mode and the id of element being edited
const editState = {
  isEditMode: false,
  currentEditId: null,
};

//
const editNote = (id) => {
  const notesList = JSON.parse(localStorage.getItem("notes"));
  const subjectInput = document.querySelector(".form__input-subject");
  const dateInput = document.querySelector(".form__input-date");
  const noteText = document.querySelector(".form__input-note");

  const noteToEdit = notesList.find((note) => note.id === id);

  subjectInput.value = noteToEdit.subject;
  dateInput.value = noteToEdit.date;
  noteText.value = noteToEdit.text;

  return noteToEdit;
};

const enterEditMode = (id) => {
  const noteToEdit = editNote(id);
  editState.currentEditId = noteToEdit.id;
  editState.isEditMode = true;
};

export { editNote, enterEditMode, editState };
