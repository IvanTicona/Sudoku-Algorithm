/* eslint-disable no-unused-vars */

export const Table = () => {
  let num = [0,1,2,3,4,5,6,7,8];

  let sudoku = [[],[],[],[],[],[],[],[],[]];

  const fillSudoku = () => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++){
        let aux = [];
        for (let h = 0; h < i; h++) {
          aux.push(sudoku[h][j]);
        }
        while(sudoku[i].length < j+1){
          const rand = Math.floor(Math.random() * 9) + 1;
          
          // if(!sudoku[i].includes(rand)) {
            if (!aux.includes(rand)){
              sudoku[i].push(rand)
            }
          // }
        }
      }
    }
  };

  fillSudoku();

  return (
    <div className="sudoku">
      {num.map((row) => {
        return (
          <div key={row * 3} className="row">
            {num.map((col) => {
              return (
                <span key={col * 4} className="col">
                  {
                    sudoku[row][col]
                  }
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
