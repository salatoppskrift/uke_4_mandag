export class NoteList extends HTMLElement {
    static observedAttributes = ["heading"];

    constructor() {
        super();
        this.attachShadow({ mode: "open" }); // Peter Pan!
    }

    connectedCallback(): void {
        this.render();
    }

    attributeChangedCallback(
        name: string,
        oldValue: string | null,
        newValue: string | null
    ): void {
        console.log(this.isConnected);
        if (oldValue !== newValue && this.isConnected) {
            this.render();
        }
    }

    private render(): void {
        this.shadowRoot!.innerHTML = /*HTML*/`
            <style>
                h2 { color: steelblue; }
            </style>
            <h2></h2>
            <p>Her kommer listen.</p>
        `;
        this.shadowRoot!.querySelector("h2")!.textContent =
            this.getAttribute("heading") ?? "Notater";
    }
}