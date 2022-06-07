import { useState, useEffect } from 'react'
import Board from './Board'
import PopoverMessage from './PopoverMessage'

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

    let [board, setBoard] = useState({
        "board": [
            [2048, 0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
        ],
        "isWon": false,
        "isLost": false,

        })

    console.log("rerender", board)

    function generateRandomCell(board) {
        let emptyCells = []
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board.length; col++) {
                if (board[row][col] === 0) {
                    emptyCells.push([row, col])
                }
            }
        }
        let generateValue = [2, 4]
        let randomValue = Math.floor(Math.random() * emptyCells.length)
        board[emptyCells[randomValue][0]][emptyCells[randomValue][1]] = generateValue[Math.floor(Math.random() * 2)]
        return JSON.parse(JSON.stringify(board))
    
    }

    function checkLoseCondition(board) {
        for (let row = 0; row < board.board.length; row++) {
            for (let col = 0; col < board.board.length; col++) {
                if (board.board[row][col] === 0) {
                    return false
                }
            }
        }
        return true
    }

    function checkWinCondition(board) {
        for (let row = 0; row < board.board.length; row++) {
            for (let col = 0; col < board.board.length; col++) {
                if (board.board[row][col] === 2048) {
                    return true
                }
            }
        }
        return false
    }


    useEffect(() => {
        const handler = (event) => {
            if (!board.isLost) {
                if (event.key === "ArrowLeft") {
                    board.board = moveLeft(board.board)
                    board.board = mergeLeft(board.board)
                    board.board = moveLeft(board.board)
                } else if (event.key === "ArrowRight") {
                    board.board = moveRight(board.board)
                    board.board = mergeRight(board.board)
                    board.board = moveRight(board.board)
    
                } else if (event.key === "ArrowUp") {
                    board.board = moveUp(board.board)
                    board.board = mergeUp(board.board)
                    board.board = moveUp(board.board)
                } else if (event.key === "ArrowDown") {
                    board.board = moveDown(board.board)
                    board.board = mergeDown(board.board)
                    board.board = moveDown(board.board)
                }
                let result = generateRandomCell(board.board)
                
                setBoard(
                    {
                        "board": result,
                        "isWon": checkWinCondition(board),
                        "isLost": checkLoseCondition(board)
                    }
                )
            }
        }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener("keydown", handler)
    }, [board])

    const playAgainHandler = () => {
        setBoard({
            "board": generateRandomCell([
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0]
            ]),
            "isWon": false,
            "isLost": false
        })
    }

    return (
        <>
            {board.isWon ? <PopoverMessage message={"You win"} handler={playAgainHandler} /> : ""}
            {board.isLost ? <PopoverMessage message={"You lost"} handler={playAgainHandler} /> : ""}
            <Board data={board} />
        </>
    )
}
