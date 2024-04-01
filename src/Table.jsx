/* eslint-disable no-unused-vars */
import sudoku from "./Sudoku";

export const Table = () => {
  const nxm = [0, 1, 2, 3, 4, 5, 6, 7, 8];

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
