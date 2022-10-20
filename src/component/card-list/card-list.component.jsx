import { useState } from "react";
import { gamedata } from "../../Asset/gamedata";

import Card from "../card/card.component";
import Button from "../button/button.component";

import "./card-list.styles.scss";

const CardList = () => {
  const [visible, setVisible] = useState(4);

  const ShowMoreItems = () => {
    setVisible((preItems) => preItems + 4);
  };

  return (
    <div>
      <div className="text">ซอฟต์แวร์เกม Nintendo Switch</div>
      <div className="container">
        <div className="card-list">
          {gamedata.slice(0, visible).map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
        <Button buttonType="othergame" onClick={ShowMoreItems}>
          เกมอื่นๆ
        </Button>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="https://www.nintendo.com/th/schedule/index.html">
              กำหนดการจำหน่าย
            </a>
          </li>
          <li>
            <a href="https://www.nintendo.com/th/games/smartphone/index.html">
              แอปพลิเคชั่นสำหรับสมาร์คโฟน
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardList;
