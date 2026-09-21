import { SimpleCounter } from "./components/SimpleCounter";
import { NoteList } from "./components/NoteList";

customElements.define("simple-counter", SimpleCounter);
customElements.define("note-list", NoteList);

const app = document.querySelector("#app")!;

app.innerHTML = /*HTML */ `
  <simple-counter count="1000" step="3"></simple-counter>
  <simple-counter></simple-counter>
  <simple-counter></simple-counter>
  <hr>
  <note-list></note-list>
`;