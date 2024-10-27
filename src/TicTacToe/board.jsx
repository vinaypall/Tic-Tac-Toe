// import React, { useState } from "react";
// import Square from "./square";

// const Board = () => {
//   const [state, setState] = useState(Array(9).fill(null));
//   const [isXTurn, setIsXTurn] = useState(true);

//   const checkWinner = () => {
//     const winnerLogic = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];

//     for (const [a, b, c] of winnerLogic) {
//       if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
//         return state[a]; // Return the winning symbol ("X" or "O")
//       }
//     }
//     return null; // No winner yet
//   };

//   const winner = checkWinner();

//   const handleClick = (index) => {
//     // Prevent further clicks if a winner is found or the square is already filled
//     if (winner || state[index] !== null) return;

//     const newState = [...state];
//     newState[index] = isXTurn ? "X" : "O";
//     setState(newState);
//     setIsXTurn(!isXTurn);
//   };

//   return (
//     <div className="board-container">
//       {winner ? (
//         <h2>{winner} Won!</h2>
//       ) : (
//         <>
//           <div className="board-row">
//             <Square onClick={() => handleClick(0)} value={state[0]} />
//             <Square onClick={() => handleClick(1)} value={state[1]} />
//             <Square onClick={() => handleClick(2)} value={state[2]} />
//           </div>
//           <div className="board-row">
//             <Square onClick={() => handleClick(3)} value={state[3]} />
//             <Square onClick={() => handleClick(4)} value={state[4]} />
//             <Square onClick={() => handleClick(5)} value={state[5]} />
//           </div>
//           <div className="board-row">
//             <Square onClick={() => handleClick(6)} value={state[6]} />
//             <Square onClick={() => handleClick(7)} value={state[7]} />
//             <Square onClick={() => handleClick(8)} value={state[8]} />
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Board;
import React, { useState } from "react";
import Square from "./square";

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (const [a, b, c] of winnerLogic) {
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a]; // Return the winning symbol ("X" or "O")
            }
        }
        return null; // No winner yet
    };

    const winner = checkWinner();
    const isDraw = !winner && state.every(square => square !== null); // Check for draw

    const handleClick = (index) => {
        // Prevent further clicks if a winner is found or the square is already filled
        if (state[index] !== null || winner) return;

        const newState = [...state];
        newState[index] = isXTurn ? "X" : "O";
        setState(newState);
        setIsXTurn(!isXTurn);
    };

    return (
        <div className="board-container">
            {winner ? (
                <h2>{winner} Won!</h2>
            ) : isDraw ? (
                <h2>It's a Draw!</h2>
            ) : (
                <>
                    <h3>Player {isXTurn?"X":"O"} please move </h3>
                    <div className="board-row">
                        <Square onClick={() => handleClick(0)} value={state[0]} />
                        <Square onClick={() => handleClick(1)} value={state[1]} />
                        <Square onClick={() => handleClick(2)} value={state[2]} />
                    </div>
                    <div className="board-row">
                        <Square onClick={() => handleClick(3)} value={state[3]} />
                        <Square onClick={() => handleClick(4)} value={state[4]} />
                        <Square onClick={() => handleClick(5)} value={state[5]} />
                    </div>
                    <div className="board-row">
                        <Square onClick={() => handleClick(6)} value={state[6]} />
                        <Square onClick={() => handleClick(7)} value={state[7]} />
                        <Square onClick={() => handleClick(8)} value={state[8]} />
                    </div>
                </>
            )}
            {/* Restart Game Button */}
            {(winner || isDraw) && (
                <button onClick={() => setState(Array(9).fill(null))}>Restart Game</button>
            )}
        </div>
    );
};

export default Board;
 