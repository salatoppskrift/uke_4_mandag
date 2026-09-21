// export class SimpleCounter2 extends HTMLElement {
//     private count = 0;
//     private step = 1;

//     constructor() {
//         super();
//         this.attachShadow({ mode: "open" });
//     }

//     connectedCallback(): void {
//         this.count = Number(this.getAttribute("count")  ?? 0);
//         this.step = Number(this.getAttribute("count")  ?? 1);
//         this.render();
//     }

//     private render(): void {
//         // this.innerHTML = /*HTML*/`
//         this.shadowRoot!.innerHTML = /*HTML*/`
//             <style>
//                 * {
//                     color: darkgreen;
//                 }
//             </style>
//             <button>Antall: ${this.count}</button>
//         `;
//         this.shadowRoot!.querySelector("button")!.addEventListener("click", () => {
//             this.count = this.count + 1;
//             this.render();
//         });
//     }
// }

// customElements.define("simple-counter", SimpleCounter2);