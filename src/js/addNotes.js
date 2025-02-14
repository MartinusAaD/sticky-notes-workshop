import { v4 as uuidv4 } from "uuid";
import storeNotes from "./storeNotes.js";

export const generateRandomNumber = () => {
  return Math.floor(Math.random() * (10 - -10 + 1) + -10);
  //Math.random() * (min - max + 1) + min)
};

const addNotes = (subject, date, text) => {
  const notesArray = JSON.parse(localStorage.getItem("notes")) || [];

  const note = {
    id: uuidv4(),
    subject: subject.value.trim(),
    date: date.value.trim(),
    text: text.value.trim(),
    rotation: generateRandomNumber(),
  };
  console.log(note);

  notesArray.push(note);
  console.log(notesArray);

  storeNotes(notesArray);
};

export default addNotes;
