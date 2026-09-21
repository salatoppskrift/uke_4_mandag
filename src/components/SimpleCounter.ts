export class SimpleCounter extends HTMLElement {
    private count = 0; // navngi ting, cache invalidation (story 4 another time) og off-by-one-errors (bomme m én): 3 vanskelige ting i programmering
    private step = 1;

    static observedAttributes = ["count", "step"];

    constructor() {
        super();
        // this.attachShadow({ mode: "open" }); // Peter Pan, vi syr på dette!
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
        this.innerHTML = /*HTML*/`
            <style>
                button {
                    border: 2px #9b9ba8 solid;
                    color: #27272c;
                    border-radius: 4px;
                    filter: brightness(0.8) saturate(20) hue-rotate(90deg);
                }
                button:hover {
                    cursor: pointer;
                }
            </style>
            <button>Antall: ${this.count}</button>
        `;
        this.querySelector("button")!.addEventListener("click", () => {
            this.count += this.step; // teller ikke dette som mutasjon? Hm, ikke problem siden dette er ikke ment å være en ren funksjon dette er en klassekomponent ikke funksjonskomponent ergo går dette fint?
            this.render();
        })
    }
}