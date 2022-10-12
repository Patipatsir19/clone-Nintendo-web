import { gamedata } from "../../gamedata";

import Card from "../card/card.component";

import "./card-list.styles.scss";

const CardList = () => (
  <div className="container">
    <div className="text">ซอฟต์แวร์เกม Nintendo Switch</div>
    <div className="card-list">
    
    {gamedata.map((card) => (
     <Card key={card.id} card={card} />
    ))}
    
   </div>
  </div>

);

export default CardList;