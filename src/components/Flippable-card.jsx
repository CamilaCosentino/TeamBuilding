import { nombreO } from "../nombreO"
import { preguntas } from "../preguntas"
import Card from "./card/Card"
import "./flippeble-card.css"
import Card2 from "./card/Card2"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserCircle, faQuestionCircle} from "@fortawesome/free-regular-svg-icons"

const FlippableCard = () => {
  
  return (
    <main>

   <h2>Integrantes  <FontAwesomeIcon icon={faUserCircle}/></h2>
    <div className="flippable-card-container">


       {nombreO.map(i =>  { 
     return <Card nombres={i} />
      })} 
 </div>
 <h2>Preguntas  <FontAwesomeIcon icon={faQuestionCircle}/></h2>
 <div className="flippable-card-container">
      {preguntas.map(i =>  { 
     return <Card2  preguntas={i} />
      })}
      </div>
   
    </main>
  )
}

export default FlippableCard
