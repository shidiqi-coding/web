import "./script/view/note-list.js";
import notesData from "./script/data/local/notesData.js";

/*document.addEventListener('DOMContentLoaded', () => {
    notesData();
})*/
/*(() => {
    const noteList = document.getElementById("noteList");

    //notesData.map((note) => {
    const tempelateNoteitem = (note) => `
    <article class =note-data id="${note.id}">
      <h2 class = title-card>${note.title}</h2>
      <p class = body-card>${note.body}</p>
      <p class = create-card >${note.createdAt}</p>
    </article>
  `;


    noteList.innerHTML = '';
    notesData.forEach((note) => {
        noteList.innerHTML += tempelateNoteitem(note);
    });

})();*/

const noteListElement = document.createElement("note-list");
noteListElement.notesData = notesData;
document.body.appendChild(noteListElement);

/*const noteListElement = document.querySelector('note-list');
noteListElement.setnoteList(notesData);*/

