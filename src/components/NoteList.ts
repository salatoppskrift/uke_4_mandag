export class NoteList extends HTMLElement {
    static observedAttributes = ["heading"];

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback(): void {
        this.render();
    }

    attributeChangedCallback(
        _name: string,
        oldValue: string | null,
        newValue: string | null
    ): void {
        if (oldValue !== newValue && this.isConnected) {
            this.render();
        }
    }

    private render(): void {
        this.shadowRoot!.innerHTML = `
            <style>h2 { color: steelblue; }</style>
            <h2></h2>
            <p>Her kommer listen.</p>
        `;
        this.shadowRoot!.querySelector("h2")!.textContent =
            this.getAttribute("heading") ?? "Notater";
    }
}

customElements.define("note-list", NoteList);