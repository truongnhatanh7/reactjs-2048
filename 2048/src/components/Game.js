import { useState, useEffect } from 'react'
import Board from './Board'

function moveLeft(board) {
    for (let row = 0; row < board.length; row++) {
        for (let col = 1; col < board.length; col++) {
            let tempCol = col
            while (true) {
                if (tempCol > 0 && board[row][tempCol - 1] === 0) {
                    let temp = board[row][tempCol]
                    board[row][tempCol] = 0
                    board[row][tempCol - 1] = temp
                    tempCol -= 1 
                } else {
                    break
                }
            }
        }
    }
    
    return JSON.parse(JSON.stringify(board))

}

function mergeLeft(board) {
    for (let row = 0; row < board.length; row++) {
        for (let col = 1; col < board.length; col++) {
            if (board[row][col - 1] === board[row][col]) {
                board[row][col - 1] *= 2
                board[row][col] = 0
            }
        }
    }
    return JSON.parse(JSON.stringify(board))
}

function moveRight(board) {
    for (let row = 0; row < board.length; row++) {
        for (let col = board.length - 2; col >= 0; col--) {
            let tempCol = col
            while (true) {
                if (tempCol < board.length && board[row][tempCol + 1] === 0) {
                    let temp = board[row][tempCol]
                    board[row][tempCol] = 0
                    board[row][tempCol + 1] = temp
                    tempCol += 1 
                } else {
                    break
                }
            }
        }
    }
    return JSON.parse(JSON.stringify(board))
}

function mergeRight(board) {
    for (let row = 0; row < board.length; row++) {
        for (let col = board.length - 2; col >= 0; col--) {
            if (board[row][col + 1] === board[row][col]) {
                board[row][col + 1] *= 2
                board[row][col] = 0
            }
        }
    }
    return JSON.parse(JSON.stringify(board))
}

function moveUp(board) {
    for (let col = 0; col < board.length; col++) {
        for (let row = 1; row < board.length; row++) {
            let tempRow = row
            while (true) {
                if (tempRow > 0 && board[tempRow - 1][col] === 0) {
                    let temp = board[tempRow][col]
                    board[tempRow][col] = 0
                    board[tempRow - 1][col] = temp
                    tempRow -= 1
                } else {
                    break
                }
            }
        }
    }
    return JSON.parse(JSON.stringify(board))
}

function mergeUp(board) {
    for (let col = 0; col < board.length; col++) {
        for (let row = 1; row < board.length; row++) {
            if (board[row - 1][col] === board[row][col]) {
                board[row - 1][col] *= 2
                board[row][col] = 0
            }
        }
    }
    return JSON.parse(JSON.stringify(board))
}


function moveDown(board) {
    for (let col = 0; col < board.length; col++) {
        for (let row = board.length - 2; row >= 0; row--) {
            let tempRow = row
            while (true) {
                console.log(tempRow, col, board)
                if (tempRow < board.length - 1 && board[tempRow + 1][col] === 0) {
                    let temp = board[tempRow][col]
                    board[tempRow][col] = 0
                    board[tempRow + 1][col] = temp
                    tempRow += 1
                } else {
                    break
                }
            }
        }
    }
    return JSON.parse(JSON.stringify(board))
}

function mergeDown(board) {
    for (let col = 0; col < board.length; col++) {
        for (let row = board.length - 2; row >= 0; row--) {
            if (board[row + 1][col] === board[row][col]) {
                board[row + 1][col] *= 2
                board[row][col] = 0
            }
        }
    }
    return JSON.parse(JSON.stringify(board))
}

export default function Game() {
    let [board, setBoard] = useState(
        [
            [0,0,0,8],
            [0,2,2,0],
            [4,4,4,4],
            [8,0,8,0]
        ]
    )

    useEffect(() => {
        window.addEventListener('keydown', (event) => {
            if (event.key === "ArrowLeft") {
                board = moveLeft(board)
                board = mergeLeft(board)
                board = moveLeft(board)
            } else if (event.key === "ArrowRight") {
                board = moveRight(board)
                board = mergeRight(board)
                board = moveRight(board)

            } else if (event.key === "ArrowUp") {
                board = moveUp(board)
                board = mergeUp(board)
                board = moveUp(board)
            } else if (event.key === "ArrowDown") {
                console.log(board)
                board = moveDown(board)
                board = mergeDown(board)
                board = moveDown(board)
            }
            setBoard(board)
        })
    }, [])



    return (
        <Board data={board} />
    )
}
