export class SimpleCounter extends HTMLElement {
    private count = 0;
    private step = 1;

    static observedAttributes = ["start-value", "step"];

    constructor() {
        super();
    }
    connectedCallback(): void {
        this.count = Number(this.getAttribute("start-value") ?? 0);
        this.step = Number(this.getAttribute("step") ?? 1);
        this.render();
    }

    attributeChangedCallback(
        name: string,
        oldValue: string | null,
        newValue: string | null
    ) {
        console.log(name, oldValue, newValue);
        // blir én endret, kalles dette attributechangedcallback to ganger, én til å beskrive gamle verdien, andre til å beskrive nye verdien. Endrer jeg verdiene til step og count på samme tid gir den meg kun utslag til de nye endringene, og gir meg ikke melding om de gamle propertisene sine verdier.
        // selv om jeg endrer så endrer ikke objektene seg i det hele tatt. Jeg mottar melding om at det var *forsøk* på å endre.
    }
    private render(): void {
        this.innerHTML = `<button>Antall: ${this.count}</button>`;
        this.querySelector("button")!.addEventListener("click", () => {
            this.count += this.step; // teller ikke dette som mutasjon? Hm, ikke problem siden dette er ikke ment å være en ren funksjon dette er en klassekomponent ikke funksjonskomponent ergo går dette fint?
            this.render();
        })
    }
}