

function createDoc(ChessGenerator)
{
    const title = document.createElement('title');
    title.textContent = 'Chess';

    const figureDev = document.createElement('div');
    figureDev.className = 'chess-figure';

    const titleElem = document.createElement('h4');
    titleElem.className = 'title';
    titleElem.textContent = 'Chess Figure';

    const boardElem = document.createElement('pre');
    boardElem.textContent = ChessGenerator;
    
    figureDev.appendChild(titleElem);
    figureDev.appendChild(boardElem);

    document.body.appendChild(figureDev);
    document.head.append(title);
}
function CreateChess(size = 8)
{
    let board = '';
    for(let row = 0; row < size; row++)
    {
        for(let col = 0; col < size; col++)
        {
            board += (row + col) % 2 === 0 ? '□' : '■';
        }
        board +='\n';
    }
    return board;
}
createDoc(CreateChess());

