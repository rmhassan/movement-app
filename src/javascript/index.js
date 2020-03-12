import "../sass/main.scss";
// import "./component/map";
import drawGrid, { mapArray, ctx } from "./component/map";
import { drawPlayer, drawWeapon } from "./component/draw";
import Player from "./component/player";

const p1 = document.querySelector("#player1");

const offset = 64;
const padding = 5;

let p1PreviousPosition = {
  canvasPosition: {
    x: 0,
    y: 0
  },
  indexPosition: {
    row: 0,
    col: 0
  }
};

const maintainPreviousPosition = player => {
  if (player.id === 1) {
    p1PreviousPosition.canvasPosition = {
      x: player.position.x,
      y: player.position.y
    };
    p1PreviousPosition.indexPosition = {
      row: player.indexPosition.row,
      col: player.indexPosition.col
    };
  } else if (player.id === 2) {
    p2PreviousPosition.canvasPosition = {
      x: player.position.x,
      y: player.position.y
    };
    p2PreviousPosition.indexPosition = {
      row: player.indexPosition.row,
      col: player.indexPosition.col
    };
  }
};
const arrowKeysCode = {
  left: 37,
  up: 38,
  right: 39,
  down: 40
};

// Draw grid to canvas
drawGrid();

// Create new Player
const player1 = new Player(1, p1);
drawPlayer(player1);

// Clear cell when player leaves
const clearCell = player => {
  ctx.clearRect(player.position.x + 5, player.position.y + 5, 55, 55);
};

const moveLeft = player => {
  maintainPreviousPosition(player);
  clearCell(player);
  player.moveLeft();
  drawPlayer(player);
};
const moveUp = player => {
  maintainPreviousPosition(player);
  clearCell(player);
  player.moveUp();
  drawPlayer(player);
};
const moveRight = player => {
  maintainPreviousPosition(player);
  clearCell(player);
  player.moveRight();
  drawPlayer(player);
};
const moveDown = player => {
  maintainPreviousPosition(player);
  clearCell(player);
  player.moveDown();
  drawPlayer(player);
};
// Event listener for the arrow keys
window.addEventListener("keydown", e => {
  switch (e.keyCode) {
    case arrowKeysCode.left:
      moveLeft(player1);

      // if (!areClose(player1, player2)) {
      //   if (playerTurn === 1) {
      //     if (
      //       !mapArray[player1.indexPosition.row][
      //         player1.indexPosition.col - 1
      //       ] &&
      //       player1.indexPosition.col > 0
      //     ) {
      //       playerTurn = 2;
      //       updateTurn(playerTurn);
      //       moveLeft(player1);
      //     } else {
      //       playerTurn = 1;
      //     }
      //   } else if (playerTurn === 2) {
      //     if (
      //       !mapArray[player2.indexPosition.row][
      //         player2.indexPosition.col - 1
      //       ] &&
      //       player2.indexPosition.col > 0
      //     ) {
      //       playerTurn = 1;
      //       updateTurn(playerTurn);

      //       moveLeft(player2);
      //     } else {
      //       playerTurn = 2;
      //     }
      //   }
      // }
      break;
    case arrowKeysCode.up:
      moveUp(player1);

      // if (!areClose(player1, player2)) {
      //   if (playerTurn === 1) {
      //     if (
      //       !mapArray[player1.indexPosition.row - 1][
      //         player1.indexPosition.col
      //       ] &&
      //       player1.indexPosition.row > 0
      //     ) {
      //       playerTurn = 2;
      //       updateTurn(playerTurn);

      //       moveUp(player1);
      //     } else {
      //       playerTurn = 1;
      //     }
      //   } else if (playerTurn === 2) {
      //     if (
      //       !mapArray[player2.indexPosition.row - 1][
      //         player2.indexPosition.col
      //       ] &&
      //       player2.indexPosition.row > 0
      //     ) {
      //       playerTurn = 1;
      //       updateTurn(playerTurn);

      //       moveUp(player2);
      //     } else {
      //       playerTurn = 2;
      //     }
      //   }
      // }
      break;
    case arrowKeysCode.right:
      moveRight(player1);

      // if (!areClose(player1, player2)) {
      //   if (playerTurn === 1) {
      //     if (
      //       !mapArray[player1.indexPosition.row][
      //         player1.indexPosition.col + 1
      //       ] &&
      //       player1.indexPosition.col <
      //         mapArray[player1.indexPosition.row].length - 1
      //     ) {
      //       playerTurn = 2;
      //       updateTurn(playerTurn);

      //       moveRight(player1);
      //     } else {
      //       playerTurn = 1;
      //     }
      //   } else if (playerTurn === 2) {
      //     if (
      //       !mapArray[player2.indexPosition.row][
      //         player2.indexPosition.col + 1
      //       ] &&
      //       player2.indexPosition.col <
      //         mapArray[player2.indexPosition.row].length - 1
      //     ) {
      //       playerTurn = 1;
      //       updateTurn(playerTurn);

      //       moveRight(player2);
      //     } else {
      //       playerTurn = 2;
      //     }
      //   }
      // }
      break;
    case arrowKeysCode.down:
      moveDown(player1);

      // if (!areClose(player1, player2)) {
      //   if (playerTurn === 1) {
      //     if (
      //       !mapArray[player1.indexPosition.row + 1][
      //         player1.indexPosition.col
      //       ] &&
      //       player1.indexPosition.row < mapArray.length - 1
      //     ) {
      //       playerTurn = 2;
      //       updateTurn(playerTurn);

      //       moveDown(player1);
      //     } else {
      //       playerTurn = 1;
      //     }
      //   } else if (playerTurn === 2) {
      //     if (
      //       !mapArray[player2.indexPosition.row + 1][
      //         player2.indexPosition.col
      //       ] &&
      //       player2.indexPosition.row < mapArray.length - 1
      //     ) {
      //       playerTurn = 1;
      //       updateTurn(playerTurn);

      //       moveDown(player2);
      //     } else {
      //       playerTurn = 2;
      //     }
      //   }
      // }
      break;
  }
});

export { padding, player1, offset };
