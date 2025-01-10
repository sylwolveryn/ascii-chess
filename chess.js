// https://nicholas.carlini.com/writing/2025/regex-chess.html?utm_source=hackernewsletter&utm_medium=email&utm_term=fav

/*

possible tablechars
╔═╗
║ ║
╚═╝

white chess pieces
♙ ♖ ♗ ♕ ♔ ♗ ♘ ♖

black chess pieces
♟ ♜ ♝ ♛ ♚ ♝ ♞ ♜ 
*/

const blackPieces = ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜']
const whitePieces = ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
const blackPawns = Array(8).fill('♟')
const whitePawns = Array(8).fill('♙')
const emptySquares = Array(8).fill(' ')
const chessboard = [
  blackPieces,
  blackPawns,
  emptySquares,
  emptySquares,
  emptySquares,
  emptySquares,
  whitePawns,
  whitePieces,
]

function drawBoard(board) {
  const columns = [
    '   ',
    'a',
    ' ',
    'b',
    ' ',
    'c',
    ' ',
    'd',
    ' ',
    'e',
    ' ',
    'f',
    ' ',
    'g',
    ' ',
    'h',
  ]
  const separator = '  +---+---+---+---+---+---+---+---+'

  console.log(columns.join(' '))

  for (let i = 0; i < board.length; i++) {
    console.log(separator)
    let row = `${8 - i} |`
    for (let j = 0; j < board[i].length; j++) {
      row += ` ${board[i][j]} |`
    }
    console.log(row)
  }
  console.log(separator)
}

drawBoard(chessboard)
