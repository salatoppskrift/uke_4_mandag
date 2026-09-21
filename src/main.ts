import { SimpleCounter } from "./components/SimpleCounter";

customElements.define("simple-counter", SimpleCounter);

const app = document.querySelector("#app")!;

app.innerHTML = /*HTML */ `
  <simple-counter count="1000" step="3"></simple-counter>
  <simple-counter></simple-counter>
  <simple-counter></simple-counter>
`;