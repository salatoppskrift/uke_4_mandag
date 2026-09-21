import { SimpleCounter } from "./components/SimpleCounter";

customElements.define("simple-counter", SimpleCounter);

const app = document.querySelector("#app")!;

app.innerHTML = /*HTML */ `
  <simple-counter start-value="1000" step="3"></simple-counter>
  <simple-counter step="5"></simple-counter>
  <simple-counter></simple-counter>
`;