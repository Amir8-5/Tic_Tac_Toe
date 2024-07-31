import { useState, useEffect } from "react";

export default function Game() {
  const [playerTurn, setPlayerTurn] = useState("player1");
  //Correspond to each square, starting from top left being number 1
  const [squares, setSquares] = useState([
    { x: false, o: false, checked: false, id: 1, key: 1, className: "" },
    { x: false, o: false, checked: false, id: 2, key: 2, className: "" },
    { x: false, o: false, checked: false, id: 3, key: 3, className: "" },
    { x: false, o: false, checked: false, id: 4, key: 4, className: "" },
    { x: false, o: false, checked: false, id: 5, key: 5, className: "" },
    { x: false, o: false, checked: false, id: 6, key: 6, className: "" },
    { x: false, o: false, checked: false, id: 7, key: 7, className: "" },
    { x: false, o: false, checked: false, id: 8, key: 8, className: "" },
    { x: false, o: false, checked: false, id: 9, key: 9, className: "" },
  ]);
  let dimentionSquares = null;

  function squareClicked(id) {
    if (squares[id - 1].checked) {
      return;
    }
    setPlayerTurn(playerTurn === "player1" ? "player2" : "player1");
    setSquares(
      squares.map((square) => {
        if (square.id === id) {
          return {
            ...square,
            checked: true,
            x: playerTurn === "player1" ? true : false,
            o: playerTurn === "player2" ? true : false,
            className: playerTurn === "player1" ? "x" : "o",
          };
        } else {
          return square;
        }
      })
    );
  }

  function createNewSquares() {
    dimentionSquares = [
      [squares[0], squares[1], squares[2]],
      [squares[3], squares[4], squares[5]],
      [squares[6], squares[7], squares[8]],
    ];
  }

  function checkXWin() {
    if (dimentionSquares[1][1].x) {
      if (dimentionSquares[0][0].x && dimentionSquares[2][2].x) {
        return true;
      } else if (dimentionSquares[0][2].x && dimentionSquares[2][0].x) {
        return true;
      } else if (dimentionSquares[1][0].x && dimentionSquares[1][2].x) {
        return true;
      } else if (dimentionSquares[0][1].x && dimentionSquares[2][1].x) {
        return true;
      }
    } else if (
      dimentionSquares[1][0].x &&
      dimentionSquares[0][0].x &&
      dimentionSquares[2][0].x
    ) {
      return true;
    } else if (
      dimentionSquares[0][2].x &&
      dimentionSquares[1][2].x &&
      dimentionSquares[2][2].x
    ) {
      return true;
    } else if (
      dimentionSquares[0][0].x &&
      dimentionSquares[0][1].x &&
      dimentionSquares[0][2].x
    ) {
      return true;
    } else if (
      dimentionSquares[2][0].x &&
      dimentionSquares[2][1].x &&
      dimentionSquares[2][2].x
    ) {
      return true;
    } else {
      return false;
    }
  }

  function checkOWin() {
    if (dimentionSquares[1][1].o) {
      if (dimentionSquares[0][0].o && dimentionSquares[2][2].o) {
        return true;
      } else if (dimentionSquares[0][2].o && dimentionSquares[2][0].o) {
        return true;
      } else if (dimentionSquares[1][0].o && dimentionSquares[1][2].o) {
        return true;
      } else if (dimentionSquares[0][1].o && dimentionSquares[2][1].o) {
        return true;
      }
    } else if (
      dimentionSquares[1][0].o &&
      dimentionSquares[0][0].o &&
      dimentionSquares[2][0].o
    ) {
      return true;
    } else if (
      dimentionSquares[0][2].o &&
      dimentionSquares[1][2].o &&
      dimentionSquares[2][2].o
    ) {
      return true;
    } else if (
      dimentionSquares[0][0].o &&
      dimentionSquares[0][1].o &&
      dimentionSquares[0][2].o
    ) {
      return true;
    } else if (
      dimentionSquares[2][0].o &&
      dimentionSquares[2][1].o &&
      dimentionSquares[2][2].o
    ) {
      return true;
    } else {
      return false;
    }
  }

  function checkWin() {
    createNewSquares();
    if (playerTurn === "player2" && checkXWin()) {
      console.log("x won");
    } else if (playerTurn === "player1" && checkOWin()) {
      console.log("o won");
    }
  }

  useEffect(() => {
    checkWin();
    console.log(squares);
  }, [squares]);

  return (
    <table className="w-8/12 h-4/5 table-fixed">
      <tbody>
        <tr className="w-full h-1/3">
          <td className="bb br w-1/3 p-6" onClick={() => squareClicked(1)}>
            <div className={`${squares[0].className}`}></div>
          </td>
          <td className="br bb w-1/3 p-6" onClick={() => squareClicked(2)}>
            <div className={`${squares[1].className}`}></div>
          </td>
          <td className="bb w-1/3 p-6" onClick={() => squareClicked(3)}>
            <div className={`${squares[2].className}`}></div>
          </td>
        </tr>
        <tr className="w-full h-1/3">
          <td className="bb br w-1/3 p-6" onClick={() => squareClicked(4)}>
            <div className={`${squares[3].className}`}></div>
          </td>
          <td className="bb br w-1/3 p-6" onClick={() => squareClicked(5)}>
            <div className={`${squares[4].className}`}></div>
          </td>
          <td className="bb w-1/3 p-6" onClick={() => squareClicked(6)}>
            <div className={`${squares[5].className}`}></div>
          </td>
        </tr>
        <tr className="w-full h-1/3">
          <td className="br w-1/3 p-6" onClick={() => squareClicked(7)}>
            <div className={`${squares[6].className}`}></div>
          </td>
          <td className="br w-1/3 p-6" onClick={() => squareClicked(8)}>
            <div className={`${squares[7].className}`}></div>
          </td>
          <td className="w-1/3 p-6" onClick={() => squareClicked(9)}>
            <div className={`${squares[8].className}`}></div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
