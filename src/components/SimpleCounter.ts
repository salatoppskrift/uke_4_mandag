export class SimpleCounter extends HTMLElement {
    private count = 0; // navngi ting, cache invalidation (story 4 another time) og off-by-one-errors (bomme m én): 3 vanskelige ting i programmering
    private step = 1;

    static observedAttributes = ["start-count", "step"];

    constructor() {
        super();
    }
    connectedCallback(): void {
        this.count = Number(this.getAttribute("start-count") ?? 0);
        this.step = Number(this.getAttribute("step") ?? 1);
        this.render();
    }

    attributeChangedCallback(
        name: string,
        oldValue: string | null,
        newValue: string | null
    ) {
        if (name === "step") this.step = Number(newValue); // bim sala bim
        if (name === "count") this.count = Number(newValue); // bim sala bim
    }
    private render(): void {
        this.innerHTML = `<button>Antall: ${this.count}</button>`;
        this.querySelector("button")!.addEventListener("click", () => {
            this.count += this.step; // teller ikke dette som mutasjon? Hm, ikke problem siden dette er ikke ment å være en ren funksjon dette er en klassekomponent ikke funksjonskomponent ergo går dette fint?
            this.render();
        })
    }
}