export class SimpleCounter extends HTMLElement {
    private count = 0;
    private step = 1;

    constructor() {
        super();
    }
    connectedCallback(): void {
        this.count = Number(this.getAttribute("start-value") ?? 0);
        this.step = Number(this.getAttribute("step") ?? 1);
        this.render();
    }
    private render(): void {
        this.innerHTML = `<button>Antall: ${this.count}</button>`;
        this.querySelector("button")!.addEventListener("click", () => {
            this.count += this.step; // teller ikke dette som mutasjon? Hm, ikke problem siden dette er ikke ment å være en ren funksjon dette er en klassekomponent ikke funksjonskomponent ergo går dette fint?
            this.render();
        })
    }
}