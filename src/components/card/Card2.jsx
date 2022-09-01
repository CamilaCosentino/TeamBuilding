import "./card.css"
import "./flipped-css.css"
import {CSSTransition} from "react-transition-group"
import { useState } from "react"


const Card = ({preguntas }) => {
    const [showFront2, setShowFront2] = useState(true)
    return (
   
    <CSSTransition 
      in={showFront2}
      timeout={300}
      classNames="flip"
      
      >
    <div className='card' onClick={() => {
                    setShowFront2((v) => !v);}}>
    <div className="card-back2">{preguntas.pregunta}</div>
      <div className="card-front">{preguntas.id}</div>
     
     
    </div>
    </CSSTransition>
  )
}

export default Card
