export class SimpleCounter extends HTMLElement {
    private count = 0;
    private step = 1;

    static observedAttributes = ["count", "step"];

    constructor() {
        super();
        this.attachShadow({ mode: "open" }); // Peter Pan, vi syr på dette!
    }
    connectedCallback(): void {
        this.count = Number(this.getAttribute("count") ?? 0);
        this.step = Number(this.getAttribute("step") ?? 1);
        this.render();
    }

    // vi så litt på Can I use 0u0

    attributeChangedCallback(
        name: string,
        oldValue: string | null,
        newValue: string | null
    ) {
        if (name === "step") this.step = Number(newValue); // bim sala bim
        if (name === "count") this.count = Number(newValue); // bim sala bim
        this.render();
    }
    private render(): void {
        this.shadowRoot!.innerHTML = /*HTML*/`
            <style>
                * {
                    color: #68ebd5;
                    background-color: #0a4b53;
                }
            </style>
            <button>Antall: ${this.count}</button>
        `;
        this.shadowRoot!.querySelector("button")!.addEventListener("click", () => {
            this.count += this.step;
            this.render();
        })
    }
}