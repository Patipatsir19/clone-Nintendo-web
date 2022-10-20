import { useState } from "react";

import NewsCard from "../../news-card/news-card.component";
import { newsdata } from "../../../Asset/Newsdata";

import "./newsdropdown.styles.scss";

const NewsDropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <ul
      className={dropdown ? "News clicked" : "News"}
      onClick={() => setDropdown(!dropdown)}
    >
      <li>
        {newsdata.slice(0, 4).map((card) => (
          <NewsCard key={card.id} card={card} />
        ))}
      </li>
    </ul>
  );
};

export default NewsDropdown;
