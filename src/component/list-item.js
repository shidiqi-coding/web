//import notesData from "../script/data/local/notesData";
class noteData extends HTMLElement {
    constructor() {
        super();

        //this._shadowRoot = this.attachShadow({ mode: 'open' });

        this._note = {
            id: "NEED_ID",
            title: "NEED_TITLE",
            body: "NEED_BODY",
            createdAt: "NEED_CREATED_AT"
        };

        this._style = document.createElement("style");
    }


    setnoteData(value) {
        this._note["id"] = value.id;
        this._note["title"] = value.title;
        this._note["body"] = value.body;
        this._note["createdAT"] = value.createdAT;

        this.render();
    }

    connectedCallback() {
        this.render();
    }

    updateStyle() {
        this._style.textContent = `
        note-data{
        border: 1px solid #fff;
    border-radius: 8px;
    padding: 15px;
     grid-template-columns: 1fr 1fr;    
   
    flex-basis: 15%;
        }

        .title-card,.body-card,.create-card{
    color: #000;
  
}


    `;
    }


    render() {
        this.updateStyle();

        this.setAttribute("note-id", this._note.id);

        this.innerHTML = `
        ${this._style.outerHTML}
        
        <article class =note-data id ="${this._note.id}">
      <h2 class = title-card>${this._note.title}</h2>
      <p class = body-card>${this._note.body}</p>
      <p class = create-card >${this._note.createdAt}</p>
    </article>
  `;

    }
    /*set note(note) {
        this._note = note;
        this.render();
    }

    render() {
        this.innerHTML = `
        <article class = note-data id="${this._note.id}">
      <h2 class = title-card>${this._note.title}</h2>
      <p class = body-card>${this._note.body}</p>
      <p class = create-card >${this._note.createdAt}</p>
    </article>
        `;
    }*/

}




customElements.define("note-data", noteData);
