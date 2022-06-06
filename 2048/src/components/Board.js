import { useState } from 'react'
import './Board.css'

export default function Board(props) {

    // let [board, setBoard] = useState(props.data)
    let board = props.data
    return (
        <>
            <div className="board__row">
                {board[0].map((element, index) => {
                    return <div key={index + "#" + 0} className="board__cell">
                            <h1 className="board__item">{element}</h1>
                        </div>
                })}
            </div>

            <div className="board__row">
                {board[1].map((element, index) => {
                    return <div key={index + "#" + 0} className="board__cell">
                            <h1 className="board__item">{element}</h1>
                        </div>
                })}
            </div>

            <div className="board__row">
                {board[2].map((element, index) => {
                    return <div key={index + "#" + 0} className="board__cell">
                            <h1 className="board__item">{element}</h1>
                        </div>
                })}
            </div>

            <div className="board__row">
                {board[3].map((element, index) => {
                    return <div key={index + "#" + 0} className="board__cell">
                            <h1 className="board__item">{element}</h1>
                        </div>
                })}
            </div>

            

        </>
    )
}