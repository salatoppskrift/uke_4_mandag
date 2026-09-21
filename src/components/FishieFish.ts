export class FishieFish extends HTMLElement {
    private hunger = 45;
    private mood: () => Mood = () => {
        if (this.hunger > 95 || this.hunger < 40) return "stressed";
        else if (this.hunger >= 40 && this.hunger < 50) return "hungry";
        else if (this.hunger >= 75) return "joyous";
        else return "content";
    };
    constructor() {
        super();
    }
    connectedCallback(): void {
        this.render();
    }

    private render(): void {
        while (this.firstChild) this.removeChild(this.firstChild);
        const ul = createUlElement(this);
        const feedButton = createFeedButton(this);
        const resetButton = createResetButton(this, 45);
        this.append(ul, feedButton, " ", resetButton);

        function createUlElement(el: FishieFish): HTMLUListElement {
            const ul = document.createElement("ul");
            Object.values(el).map((prop, i) => {
                const elKey = Object.keys(el)[i];
                const li = document.createElement("li");
                li.innerHTML = elKey[0].toUpperCase() + elKey.substring(1) + ": ";
                if (elKey === "mood") {
                    li.innerHTML += el.mood();
                }
                else {
                    li.innerHTML += prop;
                }
                return li;
            }).map(liItem => ul.append(liItem));
            return ul;
        }
        function createFeedButton(el: FishieFish): HTMLButtonElement {
            const feedButton = document.createElement("button");
            feedButton.innerHTML = "Feed the fish";
            feedButton.addEventListener("click", () => {
                el.hunger += 15;
                if (el.hunger > 100) el.hunger = 100;
                el.render();
            });
            return feedButton;
        }
        function createResetButton(el: FishieFish, resettingNumber: number) {
            const resetButton = document.createElement("button");
            resetButton.innerHTML = "Reset the fish"
            resetButton.addEventListener("click", () => {
                el.hunger = resettingNumber;
                el.render();
            })
            return resetButton;
        }
        // class FeedButton extends HTMLButtonElement {
        //   constructor() {
        //     super();
        //   }
        //   private render() {
        //     this.innerHTML = "feed the Fish";
        //     this.addEventListener("click", () => {
        //       const el : FishieFish;
        //       el.hunger += 5;
        //       el.render();
        //     });
        //   }
        // }
        // this.innerHTML = `<ul>${.join("")}</ul>`;
    }
}