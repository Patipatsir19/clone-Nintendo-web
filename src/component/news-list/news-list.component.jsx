import { useState } from "react";
import { newsdata } from "../../Asset/Newsdata"

import NewsCard from "../news-card/news-card.component";
import Button from "../button/button.component";

import './news-list.styles.scss'

const NewsList = () => {
  const [visible, setVisible] = useState(6);

  const ShowMoreItems = () => {
    setVisible((preItems) => preItems + 3);
  };

  return (
    <div>
      <div className="news-text">ข่าวสารและการอัพเดท</div>
      <div className="container">
        <div className="news-list">
          {newsdata.slice(0, visible).map((card) => (
            <NewsCard key={card.id} card={card} />
          ))}
        </div>
        <Button buttonType="othercontent" onClick={ShowMoreItems}>
          เกมอื่นๆ
        </Button>
      </div>
    </div>
  );
};

export default NewsList;
