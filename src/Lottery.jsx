import { useState } from "react"
import { genTicket ,sum} from "./helper";

export default function Lottery(){

    let [ticket,setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket) === 15;
    
    return(
        <div>
            <h1>Lottary Game</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>

            <button>Buy New Ticket</button>
            <h2>{ isWinning && "Congratulations, You Won! " }</h2>
        </div>
    )
}  
