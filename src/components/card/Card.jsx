import "./card.css"
import "./flipped-css.css"
import {CSSTransition} from "react-transition-group"
import { useState } from "react"


const Card = ({nombres,preguntas }) => {
    const [showFront, setShowFront] = useState(true)
    return (
   
    <CSSTransition 
      in={showFront}
      timeout={300}
      classNames="flip"
      
      >
    <div className='card' onClick={() => {
                    setShowFront((v) => !v);}}>
    <div className="card-back">{nombres.nombre}</div>
      <div className="card-front">{nombres.id}</div>
     
     
    </div>
    </CSSTransition>
  )
}

export default Card
