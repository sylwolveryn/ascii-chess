const blackPieces = ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜']
const whitePieces = ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
const blackPawns = Array(8).fill('♟')
const whitePawns = Array(8).fill('♙')
const emptySquares = Array(8).fill(' ')
let chessboard = [
  blackPieces.slice(),
  blackPawns.slice(),
  emptySquares.slice(),
  emptySquares.slice(),
  emptySquares.slice(),
  emptySquares.slice(),
  whitePawns.slice(),
  whitePieces.slice(),
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

function parseMove(move) {
  const fileMap = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7 }
  const from = { row: 8 - parseInt(move[1]), col: fileMap[move[0]] }
  const to = { row: 8 - parseInt(move[3]), col: fileMap[move[2]] }
  return { from, to }
}

function applyMove(board, move) {
  const { from, to } = parseMove(move)
  board[to.row][to.col] = board[from.row][from.col]
  board[from.row][from.col] = ' '
}

function applyMoves(board, whiteMoves, blackMoves) {
  let moves = []
  for (let i = 0; i < Math.max(whiteMoves.length, blackMoves.length); i++) {
    if (i < whiteMoves.length) {
      moves.push({ move: whiteMoves[i], color: 'white' })
    }
    if (i < blackMoves.length) {
      moves.push({ move: blackMoves[i], color: 'black' })
    }
  }
  moves.forEach(({ move }) => applyMove(board, move))
}

const whiteMoves = ['e2e4', 'b1c3', 'd1d8']
const blackMoves = ['g8h6', 'b8a6']

applyMoves(chessboard, whiteMoves, blackMoves)
drawBoard(chessboard)
