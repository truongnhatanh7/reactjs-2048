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
                console.log("Merge:", board)
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
            console.log(event.key)
            if (event.key === "ArrowLeft") {
                board = moveLeft(board)
                board = mergeLeft(board)
                board = moveLeft(board)
                console.log("Finish merge", board)
                setBoard(board)
            }
        })
    }, [])



    return (
        <Board data={board} />
    )
}
