"use client";

import { createContext, useContext, useState } from "react";

type Player = "X" | "O" | null;
type BoardRow = Player[];
type Board = BoardRow[];

type Context = {
  board: Board;
  winner: Player;
  currentPlayer: Player;
  winnerFound: boolean;
  isDraw: boolean;
  setRowTilePlayer: (
    rowIndex: number,
    cellIndex: number,
    player: Player,
  ) => void;
  resetBoard: () => void;
};

const TicTacToeContext = createContext<Context>({
  board: [],
  winner: null,
  currentPlayer: null,
  winnerFound: false,
  isDraw: false,
  setRowTilePlayer: () => {},
  resetBoard: () => {},
});

export function TicTacToeProvider({ children }: { children: React.ReactNode }) {
  const EmptyBoard: Board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  const [board, setBoard] = useState<Board>(EmptyBoard);
  const [winner, setWinner] = useState<Player>(null);
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const winnerFound = winner !== null;
  const isDraw = !winnerFound && countEmptyTiles() === 0;

  function countEmptyTiles(): number {
    let emptyTileCount = 0;

    for (const row of board) {
      for (const cell of row) {
        if (cell === null) {
          emptyTileCount++;
        }
      }
    }

    return emptyTileCount;
  }

  function getWinningCombinations(): Board {
    const combinations: Board = [];

    // Rows
    for (let i = 0; i < 3; i++) {
      combinations.push(board[i]);
    }

    // Columns
    for (let i = 0; i < 3; i++) {
      const column: Player[] = [board[0][i], board[1][i], board[2][i]];
      combinations.push(column);
    }

    // Diagonals
    const diagonal1: Player[] = [board[0][0], board[1][1], board[2][2]];
    const diagonal2: Player[] = [board[0][2], board[1][1], board[2][0]];
    combinations.push(diagonal1, diagonal2);

    return combinations;
  }

  function checkWinner(): Player | null {
    const combinations = getWinningCombinations();

    for (const combination of combinations) {
      if (
        combination[0] &&
        combination[0] === combination[1] &&
        combination[1] === combination[2]
      ) {
        return combination[0];
      }
    }

    return null;
  }

  function setRowTilePlayer(
    rowIndex: number,
    cellIndex: number,
    player: Player,
  ): void {
    setBoard((prev) => {
      const newBoard = [...prev];
      if (newBoard[rowIndex][cellIndex] === null) {
        newBoard[rowIndex][cellIndex] = player;
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
        const winner = checkWinner();
        if (winner !== null) {
          setWinner(winner);
        }
      }
      return newBoard;
    });
  }

  function resetBoard(): void {
    setCurrentPlayer("X");
    setBoard(EmptyBoard);
    setWinner(null);
  }

  return (
    <TicTacToeContext.Provider
      value={{
        board,
        winner,
        currentPlayer,
        winnerFound,
        isDraw,
        setRowTilePlayer,
        resetBoard,
      }}
    >
      {children}
    </TicTacToeContext.Provider>
  );
}

export function useTicTacToeContext() {
  return useContext(TicTacToeContext);
}
