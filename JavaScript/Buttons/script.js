class MyButton{
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
        cont buttonHtml = `<button class="${this.#text}>`
    }
}