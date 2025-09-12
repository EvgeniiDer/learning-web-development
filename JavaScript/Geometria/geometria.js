function createFigure(title, content) {
    const container = document.getElementById('figures-container');
    

    const figureDiv = document.createElement('div');
    figureDiv.className = 'figure';
    
    const titleElem = document.createElement('h2');
    titleElem.textContent = title;
    
    const contentElem = document.createElement('pre');
    contentElem.textContent = content;
    
    figureDiv.appendChild(titleElem);
    figureDiv.appendChild(contentElem);
    container.appendChild(figureDiv);
}

// 0) Прямоугольник 5x5
function drawRectangle() {
    let result = '';
    for (let i = 0; i < 5; i++) {
        result += '*****\n';
    }
    createFigure('0) Прямоугольник 5x5', result);
}

// 1) Возрастающий треугольник
function drawIncreasingTriangle() {
    let result = '';
    for (let i = 1; i <= 5; i++) {
        result += '*'.repeat(i) + '\n';
    }
    createFigure('1) Возрастающий треугольник', result);
}

// 2) Убывающий треугольник
function drawDecreasingTriangle() {
    let result = '';
    for (let i = 5; i >= 1; i--) {
        result += '*'.repeat(i) + '\n';
    }
    createFigure('2) Убывающий треугольник', result);
}

// 3) Треугольник с пробелами справа
function drawRightSpacedTriangle() {
    let result = '';
    for (let i = 5; i >= 1; i--) {
        const spaces = 5 - i;
        result += ' '.repeat(spaces) + '*'.repeat(i) + '\n';
    }
    createFigure('3) Треугольник с пробелами справа', result);
}

// 4) Треугольник с пробелами слева
function drawLeftSpacedTriangle() {
    let result = '';
    for (let i = 1; i <= 5; i++) {
        const spaces = 5 - i;
        result += ' '.repeat(spaces) + '*'.repeat(i) + '\n';
    }
    createFigure('4) Треугольник с пробелами слева', result);
}

// 5) Ромб/песочные часы
function drawDiamond() {
    let result = '';
    const size = 6;
    
    // Верхняя часть
    for (let i = 0; i < size; i++) {
        const spaces = size - i - 1;
        const slashes = i * 2;
        result += ' '.repeat(spaces) + '/' + ' '.repeat(slashes) + '\\' + '\n';
    }
    
    // Нижняя часть
    for (let i = size - 1; i >= 0; i--) {
        const spaces = size - i - 1;
        const slashes = i * 2;
        result += ' '.repeat(spaces) + '\\' + ' '.repeat(slashes) + '/' + '\n';
    }
    createFigure('5) Ромб/Песочные часы', result);
}

// 6) Шахматная доска 5x5
function drawChessboard() {
    let result = '';
    for (let i = 0; i < 5; i++) {
        let row = '';
        for (let j = 0; j < 5; j++) {
            row += (i + j) % 2 === 0 ? '+ ' : '- ';
        }
        result += row.trim() + '\n';
    }
    createFigure('6) Шахматная доска 5x5', result);
}
function crateChessboard()
{
     let board = '';
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            board += (row + col) % 2 === 0 ? '□' : '■';
        }
        board += '\n'
    }
    createFigure('6) Board', board)
}

// Запуск всех функций при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    drawRectangle();
    drawIncreasingTriangle();
    drawDecreasingTriangle();
    drawRightSpacedTriangle();
    drawLeftSpacedTriangle();
    drawDiamond();
    drawChessboard();
    
});