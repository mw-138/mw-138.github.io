"use client";

import { Button } from "@/components/ui/button";
import { useTicTacToeContext } from "../context/TicTacToeContext";

export default function Board() {
  const {
    board,
    winner,
    currentPlayer,
    winnerFound,
    isDraw,
    setRowTilePlayer,
    resetBoard,
  } = useTicTacToeContext();
  return (
    <>
      <div className="flex flex-row gap-4">
        {winnerFound && <h1>{`Winner: ${winner}` ?? "No Winner Yet"}</h1>}
        {isDraw && <h1>Draw</h1>}
        {(winnerFound || isDraw) && <span>|</span>}
        <h1>Turn: {currentPlayer}</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 rounded-lg p-4">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-rows-3 gap-4">
            {row.map((cell, colIndex) => (
              <Button
                key={colIndex}
                variant="outline"
                className="flex h-20 w-20 items-center justify-center rounded-lg border text-3xl transition-colors"
                onClick={() =>
                  setRowTilePlayer(rowIndex, colIndex, currentPlayer)
                }
                disabled={winnerFound || board[rowIndex][colIndex] !== null}
              >
                {cell}
              </Button>
            ))}
          </div>
        ))}
      </div>
      {(winnerFound || isDraw) && (
        <Button variant="outline" onClick={resetBoard}>
          Reset Board
        </Button>
      )}
    </>
  );
}
