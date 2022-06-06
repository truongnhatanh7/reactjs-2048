import './PopoverMessage.css'
import '../base.css'

export default function PopoverMessage(props) {
    return (
        <div className="popover-wrapper">
            <h1>{props.message}</h1>
            <button className="btn" onClick={props.handler}>Play again</button>
        </div>
    )
}