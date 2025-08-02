export default class MyButton{
    /**
     * @private {string} */
       #text; 
     /** 
      * @private {string}*/ 
        #btnCss; 
    /**
     * 
     * @param {string} text - Текст для кнопки 
     * @param {string} btnCss - CSS класс для кнопки
     */
    constructor(text, btnCss)
    {
        this.#text = text;
        this.#btnCss = btnCss;
    }
    show()
    {
        const buttonHtml = `<button class="${this.#btnCss}">${this.#text}</button>`;
        const buttonElement = document.getElementById("container");
        if(buttonElement === null)
        {
            console.error('buttonElement is null');
            return;
        }
        buttonElement.innerHTML += buttonHtml;
    }
    get buttonText()
    {
        return this.#text;
    }
    get buttonCss()
    {
        return this.#btnCss;

    }
    set buttonText(newText)
    {
        this.#text = newText;
    }
}
