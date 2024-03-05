const createNoteBtn = document.querySelector("div>button");
const saveNoteBtn = document.getElementById("saveNoteBtn");

createNoteBtn.addEventListener("click", (event) => {
  console.log("hahaha");
  console.log(event);
  //   const notesContainer = document.querySelector(".notes");
  const insertLocation = document.querySelector("h1").nextElementSibling;
  console.log(insertLocation);
  const noteSticky = document.createElement("div");
  const noteStickyTitle = document.createElement("div");
  const noteStickyBody = document.createElement("div");

  noteSticky.classList.add("note");
  noteStickyTitle.classList.add("notes-title");
  noteStickyBody.classList.add("notes-body");

  //   notesContainer.appendChild(noteSticky);
  insertLocation.insertAdjacentElement("afterend", noteSticky);
  noteSticky.append(noteStickyTitle, noteStickyBody);

  document.querySelector(".note-title").value = "";
  document.querySelector(".note-body").value = "";
});

saveNoteBtn.addEventListener("click", () => {
  const noteTitle = document.querySelector(".note-title").value;
  const noteBody = document.querySelector(".note-body").value;
  //   console.log("here is the title: " + noteTitle);
  //   console.log("here is the body: " + noteBody);
});
