import renderNotes from "./renderNotes.js";
import storeNotes from "./storeNotes.js";

const displayDeleteModal = (subject, id) => {
  const deleteModal = document.querySelector(".delete-modal");
  const deleteMessage = document.querySelector(".delete-modal__text");
  deleteModal.classList.add("display-modal");
  deleteMessage.textContent = `Are you sure you want to delete "${subject}"?`;
  const confirmDeleteButton = document.querySelector(
    ".delete-modal__button-confirm"
  );
  confirmDeleteButton.addEventListener("click", () => {
    confirmDelete(id);
  });
};

const closeDeleteModal = () => {
  const deleteModal = document.querySelector(".delete-modal");
  deleteModal.classList.remove("display-modal");
};

const initializeCloseModal = () => {
  const cancelDeleteButton = document.querySelector(
    ".delete-modal__button-cancel"
  );
  cancelDeleteButton.addEventListener("click", closeDeleteModal);
};

const confirmDelete = (id) => {
  const notesList = JSON.parse(localStorage.getItem("notes"));
  const filteredArray = notesList.filter((note) => note.id !== id);
  storeNotes(filteredArray);
  renderNotes();
  closeDeleteModal();
};

initializeCloseModal();
export { displayDeleteModal, closeDeleteModal };
