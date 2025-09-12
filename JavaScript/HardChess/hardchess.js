function CreateDiv(ChessGenerator)
{
    const title = document.createElement('title');
    title.textContent = 'Hard Chess';   

    const container = document.createElement('div');
    container.className = 'hard_chess';

    const pre = document.createElement('pre');
    pre.textContent = ChessGenerator;

    container.appendChild(pre);
    document.head.append(title);
    document.body.appendChild(container);
}
function CreateChess(size = 5, filled = '*', empty = ' ') {
    let board = '';
    const squareSize = 5; 
    
    for(let bigRow = 0; bigRow < size; bigRow++) {
        
        for(let smallRow = 0; smallRow < squareSize; smallRow++) {
            for(let bigCol = 0; bigCol < size; bigCol++) {
                const isWhiteSquare = (bigRow + bigCol) % 2 === 0;
                const symbol = isWhiteSquare ? empty : filled;
                
                
                for(let smallCol = 0; smallCol < squareSize; smallCol++) {
                    board += symbol;
                }
            }
            board += '\n';
        }
    }
    return board;
}
CreateDiv(CreateChess());