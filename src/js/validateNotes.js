const validateNotes = (subject, date, text) => {
  const errorParagraph = document.querySelector(".form__error-text");
  const formattedSubject = subject.value.trim();
  const formattedDate = date.value.trim();
  const formattedText = text.value.trim();

  // Validate Subject
  if (!formattedSubject) {
    errorParagraph.style.visibility = "visible";
    errorParagraph.textContent = "Subject is required.";
    return false;
  }

  // Validate Date
  if (!formattedDate) {
    errorParagraph.style.visibility = "visible";
    errorParagraph.textContent = "Date is required.";
    return false;
  }

  // Validate Text
  if (!formattedText) {
    errorParagraph.style.visibility = "visible";
    errorParagraph.textContent = "Text is required.";
    return false;
  }

  // Validation Success feedback
  errorParagraph.style.visibility = "visible";
  errorParagraph.textContent = "Note submitted successfully ";

  // Hide Success message after set time
  setTimeout(() => {
    errorParagraph.style.visibility = "hidden";
  }, 2000);
  return true;
};

export default validateNotes;
