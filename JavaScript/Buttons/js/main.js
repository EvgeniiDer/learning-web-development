import ColorButton from "./ColorButton.js";
import MyButton from "./MyButton.js";


let baseButton = new MyButton("BaseButton", "Two");
baseButton.show();

let btn = new ColorButton("ColorButton", "Two", "Thre");
btn.show();