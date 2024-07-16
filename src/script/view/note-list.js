import "../../component/list-item.js";

class noteList extends HTMLElement {

  constructor() {
    super();

    this._noteList = [];

    this._style = document.createElement('style');

    this.render();
  }

  setNoteList(value) {
    this._noteList = value;


    this.render();
  }

  connectedCallback() {
    this.render();
  }

  updateStyle() {
    this._style.textContent = `
        note-list {
    margin-block: 1rem;
    display: grid;
  flex-wrap: wrap;
  justify-content: center;

gap: 1rem;
}

      `;
  }

  render() {
    this.updateStyle();
    const noteItemElements = this._noteList.map((note) => {
      const list = document.createElement("note-data");
      list.setList(note);

      return list;
    });

  
    this.innerHTML = '';
    this.append(this._style, ...noteItemElements);
  }

  /*set notesData(notesData) {
    this._notesData = notesData;
    this.render();

  }

  render() {
    this._notesData.forEach(note => {
      const noteItemElements = document.createElement("note-data");
      noteItemElements.note = note;
      this.appendChild(noteItemElements);
    })
  }*/
}

customElements.define('note-list', noteList);
