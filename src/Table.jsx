/* eslint-disable no-unused-vars */
//import sudoku from "./Sudoku";

export const Table = () => {
  const nxm = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  let sudoku = [[], [], [], [], [], [], [], [], []];

  const fillSudoku = () => {
    // Complejidad = ?

    for (let i = 0; i < sudoku.length; i++) {
      // 2n
      for (let j = 0; j < sudoku.length; j++) {
        // 2n
        while (sudoku[i].length < 9) {
          //
          const rand = Math.floor(Math.random() * 9) + 1; // 4
          if (!sudoku[i].includes(rand)) {
            //3
            sudoku[i].push(rand); // 2
          }
        }
      }
    }
  };

  fillSudoku();

  return (
    <div className="sudoku">
      {nxm.map((row) => {
        return (
          <div key={row * 3} className="row">
            {nxm.map((col) => {
              return sudoku[row][col] != 0 ? (
                <span key={col * 4} className="col">
                  {sudoku[row][col]}
                </span>
              ) : (
                <span key={col * 4} className="col-empty">
                  <input className="cell" type="text" />
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
