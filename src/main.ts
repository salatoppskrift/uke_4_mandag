import { SimpleCounter } from "./components/SimpleCounter";
import { NoteList } from "./components/NoteList";

customElements.define("simple-counter", SimpleCounter);
customElements.define("note-list", NoteList);

const app = document.querySelector("#app")!;

/*
i konsollen:
const notes = document.querySelector("note-list")
  -> undefined
notes.getAttribute("heading");
  -> null
  // huh, vjrfor?
notes.setAttribute("heading", "endri fra konsollien");
  -> true
  // whyyy..?
  -> undefined
notes.getAttribute("heading");
  -> "endri fra konsollien"
  // OK THEN!! Litt som dom-manipulering av style, mottar ingenting hvis jeg har stilert fra css style.color men hvis jeg har skrevet den m JS, DA mottar jeg string-verdien. All right!!!
  */

app.innerHTML = /*HTML */ `
  <h2>Counter:</h2>
  <simple-counter count="1000" step="3"></simple-counter>
  <simple-counter></simple-counter>
  <simple-counter></simple-counter>
  <hr>
  <note-list></note-list>
`;