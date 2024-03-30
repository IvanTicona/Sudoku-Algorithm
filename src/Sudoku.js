let sudoku = [
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0]];

const checkRows = (mat) => {
  for (let h = 0; h < mat.length; h++) {
    for (let i = 0; i < mat.length; i++) {
      let num = mat[i] //tomamos el numero para buscar su repeticion
      for(let j = i+1; j < mat.length; j++){
        if(num == mat[j]){ //buscamos la posicion donde se repite
          // i(index que usamos) j(donde se repite)
          mat[j] = '';
          // break, usariamos para solo buscar una repeticion
        }
      }
    }
  }
};

const invMat = ( mat ) => {
  let aux=[ //matriz auxiliar que sea la transpuesta
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]];

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat.length; j++){
      aux[i][j] = mat[j][i] //tranponemos los elementos de la matriz
    }
  }
  return aux;
};

const check3x3s = (mat) => {
  for(let j=0; j<9;j+=3){ // j es la fila
    for(let k=0; k<9;k+=3){ //k es columna
      let aux=[];
      for(let i=j; i<j+3;i++){ // hasta 3 porque son las 3 primera filas
        for(let h=k; h<k+3;h++){ //h incrementa de a 3 para cambiar de cuadrante
          aux.push(mat[i][h])
        }
      }
      checkRows(aux) //Corregimos el vector aux (el primer cuadrante)
      let count = 0 //variable recorrer el vector
      for(let i=j; i<j+3;i++){
        for(let h=k; h<k+3;h++){
          mat[i][h] = aux[count]
          count++
        }
      }
    }
  }
};

const fillSudoku = () => {

  //Llenamos la matriz de numeros random
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++){
      const rand = Math.floor(Math.random()*9)+1
      sudoku[i][j] = rand;
    }
  }

  check3x3s(sudoku); // 3x3s ✅

  //Corregimos las filas
  for (let i = 0; i < 9; i++) {
    checkRows(sudoku[i]);
  } // 3x3s ✅

  //Transponemos
  sudoku = invMat(sudoku);
  //Y corregimos las filas(excolumnas)
  for (let i = 0; i < 9; i++) {
    checkRows(sudoku[i]);
  } // 3x3s ✅
  sudoku = invMat(sudoku);
};

const generateSudoku = () => {
  fillSudoku();
  return {sudoku};
};

export default generateSudoku;