import MyButton from "./MyButton.js";

export default class ColorButton extends MyButton{
    #color;
    constructor(text, btnCss, color)
    {
        super(text, btnCss);
        this.#color = color;
    }
    show()
    {
        const buttonHTML = `<button class="${this.buttonCss} ${this.#color}">${this.buttonText }</button>`;
        const buttonElement = document.getElementById("container");
        if(buttonElement === null)
        {
            console.error("ButtonElement is null");
            return;
        }
        buttonElement.innerHTML += buttonHTML;
    }
}
