/* eslint-disable no-unused-vars */
import generateSudoku from "./Sudoku";


export const Table = () => {
  const tamanio = [0,1,2,3,4,5,6,7,8];

  const {sudoku} = generateSudoku();

  return (
    <div className="sudoku">
      {tamanio.map((row) => {
        return (
          <div key={row * 3} className="row">
            {tamanio.map((col) => {
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
