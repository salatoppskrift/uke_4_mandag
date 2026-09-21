// export class SimpleCounter extends HTMLElement {
//     private value = 0;
//     private step = 1;

//     static obervedAttributes = ["start-value", "step"];

//     constructor() {
//         super();
//         console.log(this.value);
//     }
    
//     connectedCallback(): void {
//         this.value = Number(this.getAttribute("start-value"));
//         this.step = Number(this.getAttribute("step") ?? 1);
//         this.render();
//         // console.log(this.getAttribute("start-value"))
//     }
//     attributeChangedCallback(
//         name: string,
//         oldValue: string | null,
//         newValue: string | null
//     ) {
//         if (name === "step") this.step = Number(newValue);
//         if (name === "step") this.step = Number(newValue);
//         // console.log(name, oldValue, newValue);
//     }
//     private render(): void {
//         this.innerHTML = `<button>Antall: ${this.value}</button>`;
//         this.querySelector("button")!.addEventListener("click", () => {
//             this.value = this.value++;
//             this.render();
//         });
//     }
// }