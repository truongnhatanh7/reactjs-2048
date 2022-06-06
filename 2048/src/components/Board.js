import './Board.css'

export default function Board(props) {
    let board = props.data['board']
    return (
        <>
            <div className="board">  

                <div className="board__row">
                    {board[0].map((element, index) => {
                        return <div key={index + "#" + 0} className={`board__cell cell${element}`}>
                                <h1 className="board__item">{element}</h1>
                            </div>
                    })}
                </div>

                <div className="board__row">
                    {board[1].map((element, index) => {
                        return <div key={index + "#" + 0} className={`board__cell cell${element}`}>
                                <h1 className="board__item">{element}</h1>
                            </div>
                    })}
                </div>

                <div className="board__row">
                    {board[2].map((element, index) => {
                        return <div key={index + "#" + 0} className={`board__cell cell${element}`}>
                                <h1 className="board__item">{element}</h1>
                            </div>
                    })}
                </div>

                <div className="board__row">
                    {board[3].map((element, index) => {
                        return <div key={index + "#" + 0} className={`board__cell cell${element}`}>
                                <h1 className="board__item">{element}</h1>
                            </div>
                    })}
                </div>

                

            </div>
        </>
    )
}