import { SimpleCounter } from "./components/SimpleCounter2";
import { NoteList } from "./components/NoteList";

customElements.define("simple-counter", SimpleCounter);
customElements.define("note-list", NoteList);

const app = document.querySelector("#app")!;

app.innerHTML = /*HTML */ `
  <h2>Counter:</h2>
  <simple-counter count="1000" step="3"></simple-counter>
  <simple-counter></simple-counter>
  <simple-counter></simple-counter>
  <hr>
  <note-list></note-list>
`;