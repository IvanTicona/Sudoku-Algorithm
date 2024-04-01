/* eslint-disable no-unused-vars */

//Generar un array con valores del 1-9 en orden aleatorio
const getArray = () => {
  let arr = [];
  while (arr.length < 9) {
    const rand = Math.floor(Math.random() * 9) + 1;
    if (!arr.includes(rand)) {
      arr.push(rand);
    }
  }

  return arr;
};

//Generar el sudoku

function generarSudoku() {
  const board = Array.from({ length: 9 }, () =>
    Array.from({ length: 9 }, () => 0)
  );
  generarSolucion(board);
  removerCeldas(board, 40); // numero de celdas para borrar
  return board;
}

// Buscar solucion
function generarSolucion(board) {
  if (solveSudoku(board)) {
    return true; //  resuelto
  }
  return false; // sin solución
}

function solveSudoku(board) {
  const empty = findEmptyCell(board);
  if (!empty) {
    return true;
  }

  const [row, col] = empty;
  const arr = getArray();
  for (let num = 1; num <= 9; num++) {
    if (isValid(board, row, col, arr[num-1])) {
      board[row][col] = arr[num-1];
      if (solveSudoku(board)) {
        return true;
      }
      board[row][col] = 0; // borrar si no si cumple regla
    }
  }
  return false;
}

// encontrar una casilla vacia
function findEmptyCell(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        return [row, col];
      }
    }
  }
  return null; // No hay celdas vacías
}

// verificar numero en cierta posicion
function isValid(board, row, col, num) {
  // ver fila y columna
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num || board[i][col] === num) {
      return false;
    }
  }
  // ver 3x3
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (board[i][j] === num) {
        return false;
      }
    }
  }
  return true;
}

// borrar numeros de la tabla
function removerCeldas(board, numToRemove) {
  let removed = 0;
  while (removed < numToRemove) {
    const row = Math.floor(Math.random() * 9);
    const col = Math.floor(Math.random() * 9);
    if (board[row][col] !== 0) {
      const original = board[row][col];
      board[row][col] = 0;
      const clonedBoard = board.map((row) => row.slice());
      const solutions = [];
      if (solveSudoku(clonedBoard)) {
        removed++;
      } else {
        board[row][col] = original;
      }
    }
  }
}

const sudoku = generarSudoku();
// console.log(sudoku);

export default sudoku;
