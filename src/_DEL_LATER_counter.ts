export function setupCounter(): HTMLButtonElement {
  let counter = 0;
  const root = document.createElement("button");

  const render = function(): void {
        root.innerHTML = `Antall: ${counter}`;
        root.addEventListener("click", () => {
            counter = counter++;
            render();
        });
    }

    render();
    return root;
}
document.querySelector("#app")!.append(setupCounter());