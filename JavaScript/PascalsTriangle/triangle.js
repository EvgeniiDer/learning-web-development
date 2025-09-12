function CreateDiv(content)
{
    const title = document.createElement('title');
    title.textContent = 'Pascal s Triangle';
    
    const container = document.createElement('div');
    container.className = 'pascal-triangle';

    const pre = document.createElement('pre');
    pre.textContent = content;


    document.head.append(title);
    container.appendChild(pre);
    document.body.appendChild(container);
}
function createPascalTriangle(rows = 11) {
    let triangle = '';
    
    for (let i = 0; i < rows; i++) {
        triangle += ' '.repeat((rows - i - 1) * 3);        
        let number = 1;
        for (let j = 0; j <= i; j++) {
            triangle += number.toString().padEnd(6, ' ');
            number = number * (i - j) / (j + 1);
        }
        triangle += '\n';
    }
    return triangle;
}
CreateDiv(createPascalTriangle());